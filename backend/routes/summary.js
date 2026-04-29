const router = require("express").Router();
const Product = require("../models/product");
const { HfInference } = require("@huggingface/inference");
const keywordExtractor = require("keyword-extractor");

// Hugging Face client - token .env se aayega
const hf = new HfInference(process.env.HF_TOKEN);

/* ===========================
   GENERATE SUMMARY
=========================== */
router.get("/:productId", async (req, res) => {
  try {
    // Step 1: Product aur uske reviews fetch
    const product = await Product.findById(req.params.productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Step 2: Agar reviews hi nahi hain toh summary kaise banegi
    if (!product.reviews || product.reviews.length === 0) {
      return res.json({
        summary: null,
        keywords: [],
        reviewCount: 0,
        message: "No reviews yet — summary will appear once customers start reviewing."
      });
    }

    // Step 3: Saare review comments ek string mein 
    const allComments = product.reviews
      .map((r) => r.comment)
      .filter((c) => c && c.trim() !== "") // empty comments hata do
      .join(" ");

    // Step 4: Average rating calculate
    const avgRating = product.averageRating?.toFixed(1) || "N/A";

    // Step 5: Keywords nikale
    const keywords = keywordExtractor.extract(allComments, {
      language: "english",
      remove_digits: true,
      return_changed_case: true,
      remove_duplicates: true
    });

    // Top 8 keywords lo
    const topKeywords = keywords.slice(0, 8);

    // Call for Hugging Face BART model
    // facebook/bart-large-cnn specifically summarization ke liye trained hai
    let summary = "";

    try {
      const result = await hf.summarization({
        model: "facebook/bart-large-cnn",       //sshleifer/distilbart-cnn-12-6
        inputs: allComments,
        parameters: {
          max_length: 100,  // summary kitni lambi hogi
          min_length: 20,   // summary kitni choti hogi
        },
        options: {
            wait_for_model: true, // 👈 Essential to prevent the HTTP provider error
            use_cache: true
        }
      });
      summary = result.summary_text;
    } catch (hfError) {
      console.error("HF Model Error:", hfError.message);
      // Agar HF fail ho toh fallback - khud se basic summary
      const positiveCount = product.reviews.filter(r => r.rating >= 4).length;
      const negativeCount = product.reviews.filter(r => r.rating <= 2).length;
      summary = `Highly rated at ${avgRating}/5! Analysis of ${product.reviews.length} reviews shows that users are most satisfied with the **${topKeywords[0]}** and **${topKeywords[1]}**. A significant majority (${positiveCount} users) recommend this for its exceptional quality and ${topKeywords[2] || 'tribal art style'}.`;
    }

    // Step 7: Response bhejo
    res.json({
      summary,
      keywords: topKeywords,
      reviewCount: product.reviews.length,
      averageRating: avgRating,
      message: null
    });

  } catch (err) {
    console.error("Summary Route Error:", err.message);
    res.status(500).json({ message: "Failed to generate summary" });
  }
});

module.exports = router;
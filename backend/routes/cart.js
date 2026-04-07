const router = require("express").Router();
const Cart = require("../models/cart");
const auth = require("../middleware/auth"); // Your JWT middleware

/* GET USER CART */
router.get("/", auth, async (req, res) => {
  try {
    let cart = await Cart.findOne({ userId: req.user._id });
    if (!cart) cart = await Cart.create({ userId: req.user._id, items: [] });
    res.status(200).send(cart.items);
  } catch (error) {
    res.status(500).send({ message: "Error fetching cart" });
  }
});

/* ADD / INCREMENT ITEM */
router.post("/add", auth, async (req, res) => {
  try {
    const { product } = req.body;
    const pId = (product.id || product._id).toString();

    let cart = await Cart.findOne({ userId: req.user._id });
    if (!cart) cart = await Cart.create({ userId: req.user._id, items: [] });

    const itemIndex = cart.items.findIndex(i => i.productId === pId);

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += 1;
    } else {
      cart.items.push({
        productId: pId,
        title: product.name || product.title,
        price: product.price,
        image: product.image,
        quantity: 1
      });
    }
    await cart.save();
    res.status(200).send(cart.items);
  } catch (error) {
    res.status(500).send({ message: "Failed to add item" });
  }
});

/* REMOVE / DECREMENT ITEM */
router.delete("/remove/:id", auth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id });
    const itemIndex = cart.items.findIndex(i => i.productId === req.params.id);

    if (itemIndex > -1) {
      if (cart.items[itemIndex].quantity > 1) {
        cart.items[itemIndex].quantity -= 1;
      } else {
        cart.items.splice(itemIndex, 1);
      }
      await cart.save();
    }
    res.status(200).send(cart.items);
  } catch (error) {
    res.status(500).send({ message: "Failed to remove item" });
  }
});

/* CLEAR CART */
router.delete("/clear", auth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id });
    if (cart) {
      cart.items = [];
      await cart.save();
    }
    res.status(200).send([]);
  } catch (error) {
    res.status(500).send({ message: "Failed to clear cart" });
  }
});

module.exports = router;
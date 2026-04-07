import quizimage from './quiz.png'
import courceimage from './Kerala-Mural 1.png'
import marketimage from './handicraft_clg 1.png'

let card_Data=[
    {
        "title": "Quiz...",
        "id": "quiz",
        "heading": "🎯 Quiz & Puzzle Arena – Play, Learn & Win! 🏆",
        "description": "Dive into a world of exciting challenges that celebrate India’s rich culture and heritage! Engage in interactive quizzes and mind-bending puzzles designed to test your knowledge while keeping the fun alive. Win coins, badges, and exclusive rewards as you explore the diverse traditions, art forms, and history of India. Every challenge brings you closer to becoming a true cultural champion! 🚀",
        "img": quizimage,
        "link": "./quizcard",
        "button": "Let's Start",
        "flexDirection": "row"
    },
    {
        "title": "Courses...",
        "id": "cource",
        "heading": "🎯 Learn from the Masters: Explore India’s Timeless Art, Dance & Music Online!",
        "description": "Immerse yourself in the vibrant heritage of India by enrolling in expert-led courses on traditional arts 🎭, crafts, dance 💃, and music 🎶. Learn from master artisans and renowned performers, refine your skills, and keep India's cultural legacy alive—all while earning rewards that unlock even more enriching experiences!",
        "img": courceimage,
        "link": "/courses",
        "button": "Let's Explore",
        "flexDirection": "row-reverse"

    },
    {
        "title": "Market Place...",
        "id": "marketplace",
        "heading": "Shop 🛍️ UniqueHandmade Items from India 🇮🇳",
        "description": "Step into our vibrant online marketplace, where tradition meets craftsmanship! Explore a curated collection of authentic handcrafted items, created by skilled tribal artists from across India. Every purchase not only brings home a piece of India’s rich cultural heritage but also directly supports the artisans, empowering them to sustain their craft and livelihoods.",
        "img": marketimage,
        "link": "/marketplace",
        "button": "Let's Explore",
        "flexDirection": "row"

    }


]
export default card_Data

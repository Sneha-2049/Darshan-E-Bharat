import rajasthan from './Rajasthan.jpg'
import rajasthan2 from './rajasthan2.webp'
import madhyapradesh from './madhyapradesh.jpg'
import madhyapradesh2 from './madhyapradesh2.jpg'
import kerela from './kerela.gif'
import kerela2 from './kerela2.jpeg'
import meghalaya from './meghalaya.jpeg'
import meghalaya2 from './meghalaya2.gif'


const stateCulturalData = {
  "Rajasthan": {
    images: [
      rajasthan,
      rajasthan2
    ],
    description: "Land of kings with magnificent forts and vibrant culture."
  },
  "Madhya Pradesh":{
    images: [
      madhyapradesh2,
      madhyapradesh
    ],
    description: "Land of kings with magnificent forts and vibrant culture."
  },
  "Kerala": {
    images: [
     kerela,
     kerela2
    ],
    description: "God's own country with backwaters and rich traditions."
  },
  "Meghalaya": {
    images: [
     meghalaya,
     meghalaya2
    ],
    description: "God's own country with backwaters and rich traditions."
  },

  "Tamil Nadu": {
    images: [
      "https://images.unsplash.com/photo-1587474260584-136574528ed5",
      "https://images.unsplash.com/photo-1598866594230-a7c12756260f"
    ],
    description: "Land of temples with Dravidian architecture heritage."
  },
  // Default fallback
  "default": {
    images: [
      "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3"
    ],
    description: "Explore the rich cultural heritage of this region."
  }
};
export default stateCulturalData;
  
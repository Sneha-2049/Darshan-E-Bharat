import React from "react";
import { motion } from "framer-motion";

const Websitedescription = () => {
  return (
    <div className="home-container">
      <div className="content-box">
        <motion.h1 
          className="title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Discover India's Cultural Tapestry
        </motion.h1>
        <motion.p 
          className="description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Journey through India’s diverse heritage with an immersive digital experience. 
          Explore traditional arts, historic landmarks, and cultural stories that define the soul of the nation.
        </motion.p>
        <motion.button 
          className="explore-button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Explore Now
        </motion.button>
      </div>
    </div>
  );
};

export default Websitedescription;

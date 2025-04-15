
import { motion } from "framer-motion";
import { useState } from "react";

const FloatingCrocodile = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        initial={{ scale: 0, rotate: 10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 2 
        }}
        whileHover={{ 
          scale: 1.1,
          rotate: [0, -5, 5, -5, 0],
          transition: { duration: 0.5 }
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative w-16 h-16 sm:w-20 sm:h-20 cursor-pointer"
      >
        <div className="absolute inset-0 bg-orange-600 rounded-full opacity-20 animate-pulse" />
        <motion.div 
          className="relative w-full h-full flex items-center justify-center"
          animate={{ y: [0, -5, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <img
            src="/lovable-uploads/64ab89aa-b0c2-495b-92f0-855cee68e875.png"
            alt="Crocodile Icon"
            className="w-full h-full object-contain"
          />
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: -40 }}
              className="absolute -top-2 whitespace-nowrap bg-orange-600 text-white text-xs rounded-full px-3 py-2 font-medium"
            >
              Join the adventure!
            </motion.div>
          )}
          <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
            😀
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FloatingCrocodile;

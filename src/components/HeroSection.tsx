
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background with parallax and overlay effects */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-amber-50 via-orange-100 to-orange-200 opacity-70"
      />
      
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('/lovable-uploads/7952dc46-4ef0-4b91-b755-1b267457a432.png')] bg-cover bg-center"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            opacity: 0.4,
          }}
        />
        {/* Orange overlay for brand consistency */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 via-orange-700/20 to-transparent" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-32 left-10 w-40 h-40 bg-orange-500 rounded-full opacity-10 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-orange-400 rounded-full opacity-10 blur-3xl animate-pulse" />
      <div className="absolute top-60 right-20 w-20 h-20 bg-orange-300 rounded-full opacity-20 blur-xl animate-pulse" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col items-center overflow-hidden">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md mb-8"
        >
          <img
            src="/lovable-uploads/64ab89aa-b0c2-495b-92f0-855cee68e875.png"
            alt="Tour der Wang"
            className="w-full h-auto"
          />
        </motion.div>
        
        {/* Hero Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-800 mb-6 font-display">
            Experience The Legend
          </h1>
          <p className="text-lg md:text-xl text-gray-800 mb-8">
            Join us on an extraordinary journey through the mystical lands of Wang, 
            where ancient traditions meet breathtaking landscapes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button 
                variant="orange"
                size="lg" 
                className="px-8 py-6 text-lg rounded-md shadow-lg"
              >
                Book Your Tour
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg rounded-md"
              >
                Explore Destinations <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Featured Images */}
        <div className="w-full max-w-5xl mx-auto relative grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/3802d925-960d-4aa2-a3c6-a629039b56a4.png" 
                alt="Tour der Wang Crocodile Statue" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm md:text-base">
                  The legendary Wang Crocodile - A symbol of strength and wisdom
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Second image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/7952dc46-4ef0-4b91-b755-1b267457a432.png" 
                alt="Tour der Wang Crocodile by water" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm md:text-base">
                  Journey through mystic waters and ancient landscapes
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: "loop" 
          }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <p className="text-orange-800 mb-2 text-sm font-medium">Scroll to discover</p>
            <motion.div
              animate={{ 
                y: [0, 5, 0],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "loop" 
              }}
            >
              <ChevronDown className="h-6 w-6 text-orange-800" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

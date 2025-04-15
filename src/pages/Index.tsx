
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import FloatingCrocodile from "@/components/FloatingCrocodile";
import { NavMenuDemo } from "@/components/NavMenuDemo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      {/* NavMenu Demo Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 font-display text-center">Customizable NavMenu Component</h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          A flexible navigation component that can be customized through props. Supports different variants,
          user profiles, and interactive features like GitHub sync and chat mode.
        </p>
        <div className="mt-10 border rounded-lg overflow-hidden">
          <NavMenuDemo />
        </div>
      </div>
      
      {/* Additional content sections can be added here */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 font-display">Discover the Wang Experience</h2>
          <p className="text-lg text-gray-600 mb-8">
            Embark on an unforgettable adventure through ancient traditions, breathtaking 
            landscapes, and cultural treasures. Our tours offer a unique glimpse into a 
            world where legends come alive.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* These are placeholder cards for content that would come after the hero section */}
            {["Exotic Destinations", "Cultural Immersion", "Wildlife Adventures"].map((title, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-lg border border-orange-100">
                <h3 className="text-xl font-bold text-orange-800 mb-3">{title}</h3>
                <p className="text-gray-600">Experience the wonder of the mystical Wang region.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <FloatingCrocodile />
    </div>
  );
};

export default Index;

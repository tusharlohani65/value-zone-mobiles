
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Photography/Vlogging Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20photography%20and%20vlogging%20studio%20setup%20with%20DSLR%20cameras%2C%20ring%20lights%2C%20LED%20panels%2C%20tripods%2C%20gimbals%2C%20wireless%20microphones%2C%20video%20editing%20workstation%20with%20multiple%20monitors%2C%20content%20creator%20workspace%2C%20warm%20cinematic%20lighting%2C%20orange%20and%20yellow%20studio%20lights%2C%20modern%20equipment%20arrangement%2C%20professional%20photographer%20and%20videographer%20accessories%2C%20clean%20studio%20environment%20with%20soft%20shadows%20and%20professional%20lighting%20setup&width=1920&height=1080&seq=photo-vlog-studio-43&orientation=landscape')`
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Photography Icons */}
        <div className="absolute top-20 left-20 w-8 h-8 flex items-center justify-center animate-bounce">
          <i className="ri-camera-line text-orange-400 text-2xl"></i>
        </div>
        <div className="absolute top-40 right-32 w-8 h-8 flex items-center justify-center animate-pulse">
          <i className="ri-video-line text-yellow-400 text-2xl"></i>
        </div>
        <div className="absolute bottom-32 left-32 w-8 h-8 flex items-center justify-center animate-ping">
          <i className="ri-mic-line text-red-400 text-2xl"></i>
        </div>
        <div className="absolute bottom-20 right-20 w-8 h-8 flex items-center justify-center animate-bounce">
          <i className="ri-lightbulb-line text-orange-300 text-2xl"></i>
        </div>
        
        {/* Moving Light Rays */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-orange-400/20 via-yellow-400/10 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-yellow-400/20 via-orange-400/10 to-transparent animate-pulse delay-1000"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-orange-400/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-yellow-400/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-red-400/40 rounded-full animate-bounce delay-700"></div>
        
        {/* Scanning Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-400/50 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent animate-pulse delay-1000"></div>
        
        {/* Corner Brackets */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-orange-400/60"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-orange-400/60"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-orange-400/60"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-orange-400/60"></div>
      </div>
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <div className="backdrop-blur-sm bg-black/20 rounded-2xl p-8 border border-white/10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">
            Tech Accessories Store
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            India's Largest Tech Accessories Store
          </p>
          
          <p className="text-lg mb-12 text-gray-300 max-w-3xl mx-auto">
            Discover premium photography equipment, professional vlogging gear, and cutting-edge tech accessories. 
            Your one-stop destination for all content creation needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/accessories')}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
            >
              Shop Now
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="border-2 border-orange-400 text-orange-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-400 hover:text-black transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

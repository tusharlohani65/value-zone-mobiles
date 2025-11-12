
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/base/Button';

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section 
      className="py-16 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.9), rgba(234, 88, 12, 0.9)), url('https://readdy.ai/api/search-image?query=Professional%20photography%20and%20vlogging%20equipment%20background%20with%20cameras%2C%20lighting%20gear%2C%20and%20content%20creation%20accessories%2C%20modern%20tech%20accessories%20backdrop%20with%20orange%20gradient%20overlay&width=1920&height=400&seq=cta-accessories&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Upgrade Your Content Creation Setup?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Discover professional photography and vlogging equipment, get expert advice, and enjoy unbeatable prices. 
            Join thousands of satisfied creators who trust us for their tech accessory needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="whitespace-nowrap bg-white text-orange-600 hover:bg-gray-100"
              onClick={() => navigate('/accessories')}
            >
              <i className="ri-camera-line mr-2"></i>
              Shop Accessories
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="whitespace-nowrap border-white text-white hover:bg-white hover:text-orange-600"
              onClick={() => navigate('/contact')}
            >
              <i className="ri-customer-service-2-line mr-2"></i>
              Get Expert Advice
            </Button>
          </div>

          {/* Special Offers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-truck-line text-2xl"></i>
              </div>
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-sm text-orange-100">Free shipping on orders above ₹999</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl"></i>
              </div>
              <h3 className="font-semibold mb-2">Official Warranty</h3>
              <p className="text-sm text-orange-100">All products come with brand warranty</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-customer-service-2-line text-2xl"></i>
              </div>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm text-orange-100">Expert assistance whenever you need</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
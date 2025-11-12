
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Smartphones', href: '/smartphones' },
    { name: 'Accessories', href: '/accessories' },
    { name: 'Brands', href: '/brands' },
    { name: 'Support', href: '/support' },
    { name: 'Contact', href: '/contact' },
  ];

  const categories = [
    { name: 'iPhone', href: '/brand/apple' },
    { name: 'Samsung Galaxy', href: '/brand/samsung' },
    { name: 'OnePlus', href: '/brand/oneplus' },
    { name: 'Xiaomi', href: '/brand/xiaomi' },
    { name: 'Google Pixel', href: '/brand/google' },
    { name: 'Nothing Phone', href: '/brand/nothing' },
  ];

  const services = [
    { name: 'Mobile Repair', href: '/support' },
    { name: 'Trade-In Program', href: '/support' },
    { name: 'EMI Options', href: '/support' },
    { name: 'Extended Warranty', href: '/support' },
    { name: 'Mobile Insurance', href: '/support' },
    { name: 'Data Transfer', href: '/support' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <i className="ri-plug-line text-white text-lg"></i>
              </div>
              <h3 className="text-xl font-bold" style={{ fontFamily: '"Pacifico", serif' }}>
                Value Zone Gadget
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              India's premier gadget accessories store offering the latest tech accessories, mobile accessories, and premium gadget solutions. Your trusted partner for all tech accessory needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                <i className="ri-twitter-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                <i className="ri-instagram-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                <i className="ri-youtube-fill text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => navigate(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Brands */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Brands</h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <button
                    onClick={() => navigate(category.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <button
                    onClick={() => navigate(service.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <i className="ri-phone-line text-blue-400 text-xl mr-3"></i>
              <div>
                <p className="text-sm text-gray-400">Call Us</p>
                <p className="font-semibold">+91 7827962864</p>
              </div>
            </div>
            <div className="flex items-center">
              <i className="ri-mail-line text-blue-400 text-xl mr-3"></i>
              <div>
                <p className="text-sm text-gray-400">Email Us</p>
                <p className="font-semibold">support@valuezonemobile.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <i className="ri-map-pin-line text-blue-400 text-xl mr-3"></i>
              <div>
                <p className="text-sm text-gray-400">Visit Store</p>
                <p className="font-semibold">Nehru Place, Delhi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Value Zone Gadget. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}

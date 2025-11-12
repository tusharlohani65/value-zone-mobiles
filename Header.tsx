import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../base/Button';
import { useCartContext } from './CartProvider';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { getTotalItems, setIsCartOpen } = useCartContext();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'All Accessories', href: '/accessories' },
    { name: 'Brands', href: '/brands' },
    { name: 'Support', href: '/support' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/accessories?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <i className="ri-plug-line text-white text-xl"></i>
            </div>
            <span className="text-2xl font-bold text-gray-900" style={{ fontFamily: '"Pacifico", serif' }}>
              Value Zone Gadget
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 cursor-pointer ${
                  isActive(item.href)
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              {isSearchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search accessories..."
                    className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="ml-2 p-2 text-blue-600 hover:text-blue-700 cursor-pointer"
                  >
                    <i className="ri-search-line text-xl"></i>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="ml-1 p-2 text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    <i className="ri-close-line text-xl"></i>
                  </button>
                </form>
              ) : (
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-gray-600 hover:text-gray-900 cursor-pointer"
                >
                  <i className="ri-search-line text-xl"></i>
                </button>
              )}
            </div>

            {/* Wishlist */}
            <button 
              onClick={() => navigate('/wishlist')}
              className="relative p-2 text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              <i className="ri-heart-line text-xl"></i>
            </button>

            {/* Cart */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              <i className="ri-shopping-cart-line text-xl"></i>
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>

            {/* Sign In */}
            <Link to="/signin">
              <Button variant="outline" size="sm" className="hidden sm:flex whitespace-nowrap">
                <i className="ri-user-line mr-2"></i>
                Sign In
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="flex">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search accessories..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 cursor-pointer"
                >
                  <i className="ri-search-line"></i>
                </button>
              </div>
            </form>
            
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 cursor-pointer ${
                    isActive(item.href) ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                to="/signin" 
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 cursor-pointer"
              >
                Sign In
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

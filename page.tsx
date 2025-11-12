import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import Card from '../../components/base/Card';
import { useCart } from '../../hooks/useCart';

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
}

export default function Wishlist() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: 1,
      name: 'Premium Wireless Earbuds Pro Max with Active Noise Cancellation',
      price: 4999,
      image: 'https://readdy.ai/api/search-image?query=premium%20wireless%20earbuds%20with%20charging%20case%2C%20modern%20tech%20product%20photography%2C%20white%20background%2C%20professional%20studio%20lighting%2C%20high-end%20audio%20device&width=400&height=400&seq=wish1&orientation=squarish',
      category: 'Audio',
      inStock: true
    },
    {
      id: 2,
      name: 'Fast Charging Power Bank 20000mAh with LED Display',
      price: 2499,
      image: 'https://readdy.ai/api/search-image?query=portable%20power%20bank%20with%20digital%20display%2C%20sleek%20black%20design%2C%20modern%20tech%20accessory%2C%20white%20background%2C%20professional%20product%20photography&width=400&height=400&seq=wish2&orientation=squarish',
      category: 'Charging',
      inStock: true
    },
    {
      id: 3,
      name: 'Professional Camera Gimbal Stabilizer 3-Axis',
      price: 8999,
      image: 'https://readdy.ai/api/search-image?query=camera%20gimbal%20stabilizer%2C%20professional%20photography%20equipment%2C%20black%20metal%20construction%2C%20white%20background%2C%20studio%20lighting&width=400&height=400&seq=wish3&orientation=squarish',
      category: 'Camera',
      inStock: false
    },
    {
      id: 4,
      name: 'RGB Gaming Mouse Pad XXL with USB Hub',
      price: 1299,
      image: 'https://readdy.ai/api/search-image?query=large%20gaming%20mouse%20pad%20with%20rgb%20lighting%2C%20modern%20gaming%20accessory%2C%20black%20surface%2C%20white%20background%2C%20professional%20product%20shot&width=400&height=400&seq=wish4&orientation=squarish',
      category: 'Gaming',
      inStock: true
    },
    {
      id: 5,
      name: 'Smart Watch Series 8 with Health Monitoring',
      price: 12999,
      image: 'https://readdy.ai/api/search-image?query=modern%20smartwatch%20with%20digital%20display%2C%20sleek%20design%2C%20fitness%20tracker%2C%20white%20background%2C%20professional%20tech%20photography&width=400&height=400&seq=wish5&orientation=squarish',
      category: 'Wearables',
      inStock: true
    },
    {
      id: 6,
      name: 'Portable Bluetooth Speaker Waterproof 360° Sound',
      price: 3499,
      image: 'https://readdy.ai/api/search-image?query=portable%20bluetooth%20speaker%2C%20cylindrical%20design%2C%20waterproof%20audio%20device%2C%20white%20background%2C%20modern%20tech%20product%20photography&width=400&height=400&seq=wish6&orientation=squarish',
      category: 'Audio',
      inStock: true
    }
  ]);

  const removeFromWishlist = (id: number) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };

  const handleAddToCart = (item: WishlistItem) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1
    });
    removeFromWishlist(item.id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">My Wishlist</h1>
            <p className="text-gray-600">
              {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved for later
            </p>
          </div>

          {wishlistItems.length === 0 ? (
            <Card className="p-12 text-center">
              <i className="ri-heart-line text-8xl text-gray-300 mb-6"></i>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Wishlist is Empty</h2>
              <p className="text-gray-600 mb-6">Start adding products you love to your wishlist</p>
              <Button 
                onClick={() => navigate('/accessories')}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
              >
                Browse Products
              </Button>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-64 object-cover object-top"
                    />
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-red-50 transition-colors cursor-pointer"
                    >
                      <i className="ri-close-line text-xl text-red-500"></i>
                    </button>
                    {!item.inStock && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Out of Stock
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
                      {item.name}
                    </h3>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-gray-900">
                        ₹{item.price.toLocaleString()}
                      </span>
                      <div className="flex items-center text-yellow-500">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-half-fill"></i>
                        <span className="text-gray-600 text-sm ml-1">(4.5)</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleAddToCart(item)}
                        disabled={!item.inStock}
                        className={`flex-1 whitespace-nowrap ${
                          item.inStock 
                            ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700' 
                            : 'bg-gray-300 cursor-not-allowed'
                        }`}
                      >
                        <i className="ri-shopping-cart-line mr-2"></i>
                        {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </Button>
                      <Button
                        onClick={() => navigate(`/product/${item.id}`)}
                        variant="outline"
                        className="whitespace-nowrap"
                      >
                        <i className="ri-eye-line"></i>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

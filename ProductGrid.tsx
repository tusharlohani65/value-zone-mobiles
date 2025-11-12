
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Card from '../../../components/base/Card';
import Button from '../../../components/base/Button';
import { useCartContext } from '../../../components/feature/CartProvider';

export default function ProductGrid() {
  const { addToCart } = useCartContext();
  const [adminProducts, setAdminProducts] = useState<any[]>([]);

  // Load admin products from localStorage
  useEffect(() => {
    const savedProducts = localStorage.getItem('admin_products');
    if (savedProducts) {
      try {
        setAdminProducts(JSON.parse(savedProducts));
      } catch (error) {
        console.error('Error loading admin products:', error);
      }
    }
  }, []);

  // Featured products with specific categories
  const featuredProducts = [
    // Digitek Products
    {
      id: 'digitek-tripod-001',
      name: 'Digitek Professional Camera Tripod DTR 550 LW',
      brand: 'Digitek',
      category: 'Camera Accessories',
      price: 2499,
      rating: 4.3,
      reviews: 1247,
      image: 'https://readdy.ai/api/search-image?query=Professional%20black%20aluminum%20camera%20tripod%20with%20adjustable%20height%20legs%20and%20smartphone%20mount%20holder%2C%20studio%20photography%20equipment%20with%20clean%20white%20background%2C%20high%20quality%20product%20photography%2C%20sharp%20focus%2C%20professional%20lighting&width=400&height=300&seq=digitek-tripod-clear&orientation=landscape'
    },
    {
      id: 'digitek-ringlight-001',
      name: 'Digitek 18 inch LED Ring Light with Tripod Stand',
      brand: 'Digitek',
      category: 'Lighting',
      price: 4999,
      rating: 4.5,
      reviews: 892,
      image: 'https://readdy.ai/api/search-image?query=Large%20LED%20ring%20light%20with%20adjustable%20tripod%20stand%2C%20professional%20photography%20lighting%20equipment%2C%20white%20circular%20light%20with%20phone%20holder%20on%20clean%20background&width=400&height=300&seq=digitek-ringlight-001&orientation=landscape'
    },
    // Noise Products
    {
      id: 'noise-smartwatch-001',
      name: 'Noise ColorFit Pro 4 Alpha Smartwatch',
      brand: 'Noise',
      category: 'Smart Wearables',
      price: 3999,
      rating: 4.2,
      reviews: 2156,
      image: 'https://readdy.ai/api/search-image?query=Modern%20smartwatch%20with%20colorful%20display%20screen%2C%20black%20silicone%20strap%2C%20fitness%20tracking%20device%20with%20sleek%20design%20on%20white%20background&width=400&height=300&seq=noise-smartwatch-001&orientation=landscape'
    },
    {
      id: 'noise-earbuds-001',
      name: 'Noise Buds VS201 True Wireless Earbuds',
      brand: 'Noise',
      category: 'Audio Accessories',
      price: 1999,
      rating: 4.1,
      reviews: 3421,
      image: 'https://readdy.ai/api/search-image?query=True%20wireless%20earbuds%20in%20charging%20case%2C%20black%20modern%20design%2C%20bluetooth%20audio%20accessories%20with%20compact%20portable%20case%20on%20clean%20white%20background&width=400&height=300&seq=noise-earbuds-001&orientation=landscape'
    },
    // JBL Products
    {
      id: 'jbl-speaker-001',
      name: 'JBL Go 3 Portable Bluetooth Speaker',
      brand: 'JBL',
      category: 'Audio Accessories',
      price: 2799,
      rating: 4.6,
      reviews: 1876,
      image: 'https://readdy.ai/api/search-image?query=Compact%20portable%20bluetooth%20speaker%20with%20fabric%20mesh%20design%2C%20colorful%20JBL%20branding%2C%20wireless%20audio%20device%20on%20clean%20white%20background&width=400&height=300&seq=jbl-speaker-001&orientation=landscape'
    },
    {
      id: 'jbl-headphones-001',
      name: 'JBL Tune 760NC Wireless Over-Ear Headphones',
      brand: 'JBL',
      category: 'Audio Accessories',
      price: 7999,
      rating: 4.4,
      reviews: 1234,
      image: 'https://readdy.ai/api/search-image?query=Over-ear%20wireless%20headphones%20with%20noise%20cancellation%2C%20black%20padded%20design%2C%20professional%20audio%20equipment%20on%20white%20background&width=400&height=300&seq=jbl-headphones-001&orientation=landscape'
    },
    // Portronics Products
    {
      id: 'portronics-charger-001',
      name: 'Portronics Adapto 20 USB Wall Charger',
      brand: 'Portronics',
      category: 'Charging Solutions',
      price: 899,
      rating: 4.3,
      reviews: 2341,
      image: 'https://readdy.ai/api/search-image?query=USB%20wall%20charger%20adapter%20with%20multiple%20ports%2C%20white%20compact%20design%2C%20phone%20charging%20accessory%20on%20clean%20background&width=400&height=300&seq=portronics-charger-001&orientation=landscape'
    },
    {
      id: 'portronics-powerbank-001',
      name: 'Portronics Indo 20K 20000mAh Power Bank',
      brand: 'Portronics',
      category: 'Charging Solutions',
      price: 1799,
      rating: 4.2,
      reviews: 1567,
      image: 'https://readdy.ai/api/search-image?query=High%20capacity%20power%20bank%20with%20digital%20display%2C%20black%20portable%20battery%20charger%20with%20multiple%20USB%20ports%20on%20white%20background&width=400&height=300&seq=portronics-powerbank-001&orientation=landscape'
    }
  ];

  // Combine admin products with featured products
  const allProducts = [...adminProducts.filter(p => p.inStock), ...featuredProducts];

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked selection of premium tech products from top brands
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {allProducts.slice(0, 12).map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {product.category}
                    </span>
                  </div>
                  {product.rating && (
                    <div className="absolute top-3 right-3">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                        <i className="ri-star-fill text-yellow-400 text-sm mr-1"></i>
                        <span className="text-sm font-medium">{product.rating}</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="mb-2">
                    <span className="text-sm text-gray-500 font-medium">{product.brand}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">₹{product.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                    {product.reviews && (
                      <div className="text-sm text-gray-500">
                        ({product.reviews} reviews)
                      </div>
                    )}
                  </div>
                  <Button 
                    className="w-full whitespace-nowrap"
                    onClick={(e) => handleAddToCart(e, product)}
                  >
                    <i className="ri-shopping-cart-line mr-2"></i>
                    Add to Cart
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/accessories">
            <Button size="lg" className="whitespace-nowrap">
              <i className="ri-arrow-right-line mr-2"></i>
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

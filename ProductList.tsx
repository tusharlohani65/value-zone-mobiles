
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../../components/base/Card';
import Button from '../../../components/base/Button';
import { smartphones } from '../../../mocks/smartphones';
import { useCartContext } from '../../../components/feature/CartProvider';

interface ProductListProps {
  filters: {
    brand: string[];
    priceRange: [number, number];
    storage: string[];
    color: string[];
    inStock: boolean;
  };
  sortBy: string;
}

export default function ProductList({ filters, sortBy }: ProductListProps) {
  const { addToCart } = useCartContext();
  const [adminProducts, setAdminProducts] = useState<any[]>([]);

  // Load admin products from localStorage
  useEffect(() => {
    const savedProducts = localStorage.getItem('admin_products');
    if (savedProducts) {
      try {
        const products = JSON.parse(savedProducts);
        // Filter only smartphone category products
        setAdminProducts(products.filter((p: any) => p.category === 'smartphones' && p.inStock));
      } catch (error) {
        console.error('Error loading admin products:', error);
      }
    }
  }, []);

  // Combine admin products with existing smartphones
  const allProducts = [...adminProducts, ...smartphones];

  const filteredProducts = allProducts.filter(product => {
    // Brand filter
    if (filters.brand.length > 0 && !filters.brand.includes(product.brand)) {
      return false;
    }

    // Price range filter
    if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
      return false;
    }

    // Storage filter
    if (filters.storage.length > 0 && product.storage && !filters.storage.includes(product.storage)) {
      return false;
    }

    // Color filter
    if (filters.color.length > 0 && product.color && !filters.color.includes(product.color)) {
      return false;
    }

    // Stock filter
    if (filters.inStock && !product.inStock) {
      return false;
    }

    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'newest':
        return new Date(b.id).getTime() - new Date(a.id).getTime();
      default:
        return 0;
    }
  });

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category || 'smartphones'
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sortedProducts.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`} className="group">
          <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
            <div className="relative">
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                  {product.category || 'Smartphone'}
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
              {product.originalPrice && product.originalPrice > product.price && (
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
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
                  {product.originalPrice && product.originalPrice > product.price && (
                    <span className="text-sm text-gray-500 line-through ml-2">₹{product.originalPrice.toLocaleString()}</span>
                  )}
                </div>
                {product.reviews && (
                  <div className="text-sm text-gray-500">
                    ({product.reviews} reviews)
                  </div>
                )}
              </div>
              {(product.storage || product.color) && (
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                  {product.storage && <span>{product.storage}</span>}
                  {product.storage && product.color && <span>•</span>}
                  {product.color && <span>{product.color}</span>}
                </div>
              )}
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
      
      {sortedProducts.length === 0 && (
        <div className="col-span-full text-center py-12">
          <i className="ri-smartphone-line text-4xl text-gray-400 mb-4"></i>
          <p className="text-gray-500">No products found matching your filters.</p>
        </div>
      )}
    </div>
  );
}

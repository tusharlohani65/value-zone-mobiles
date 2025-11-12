
import { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Card from '../../../components/base/Card';
import Button from '../../../components/base/Button';
import { useCartContext } from '../../../components/feature/CartProvider';
import { allAccessories } from '../../../mocks/accessories';

export default function AccessoriesGrid() {
  const { addToCart } = useCartContext();
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 24;

  // Handle URL search parameter
  useEffect(() => {
    const search = searchParams.get('search');
    if (search) {
      setSearchQuery(search);
    }
  }, [searchParams]);

  // Get unique categories and brands
  const categories = ['all', ...Array.from(new Set(allAccessories.map(p => p.category)))];
  const brands = ['all', ...Array.from(new Set(allAccessories.map(p => p.brand))).sort()];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = allAccessories;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description?.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by brand
    if (selectedBrand !== 'all') {
      filtered = filtered.filter(product => product.brand === selectedBrand);
    }

    // Filter by price range
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'under-1000':
          filtered = filtered.filter(product => product.price < 1000);
          break;
        case '1000-5000':
          filtered = filtered.filter(product => product.price >= 1000 && product.price < 5000);
          break;
        case '5000-15000':
          filtered = filtered.filter(product => product.price >= 5000 && product.price < 15000);
          break;
        case 'above-15000':
          filtered = filtered.filter(product => product.price >= 15000);
          break;
      }
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'reviews':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Featured - keep original order
        break;
    }

    return filtered;
  }, [selectedCategory, selectedBrand, priceRange, sortBy, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

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

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedBrand('all');
    setPriceRange('all');
    setSortBy('featured');
    setCurrentPage(1);
    setSearchQuery('');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Search Results Header */}
      {searchQuery && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Search Results for "{searchQuery}"
          </h2>
          <p className="text-gray-600">
            Found {filteredProducts.length} products matching your search
          </p>
        </div>
      )}

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Filter Products</h3>
          <button 
            onClick={resetFilters}
            className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
          >
            Clear All Filters
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {/* Search Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search products..."
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select 
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Brand Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
            <select 
              value={selectedBrand}
              onChange={(e) => {
                setSelectedBrand(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
            >
              {brands.map(brand => (
                <option key={brand} value={brand}>
                  {brand === 'all' ? 'All Brands' : brand}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
            <select 
              value={priceRange}
              onChange={(e) => {
                setPriceRange(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
            >
              <option value="all">All Prices</option>
              <option value="under-1000">Under ₹1,000</option>
              <option value="1000-5000">₹1,000 - ₹5,000</option>
              <option value="5000-15000">₹5,000 - ₹15,000</option>
              <option value="above-15000">Above ₹15,000</option>
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="reviews">Most Reviewed</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>

          {/* Results Count */}
          <div className="flex items-end">
            <div className="text-sm text-gray-600">
              <strong>{filteredProducts.length}</strong> products found
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {paginatedProducts.map((product) => (
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
                <div className="absolute top-3 right-3">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                    <i className="ri-star-fill text-yellow-400 text-sm mr-1"></i>
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                </div>
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
                    <span className="text-xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    ({product.reviews})
                  </div>
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

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <i className="ri-search-line text-6xl text-gray-300 mb-4"></i>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your search or filter criteria
          </p>
          <button 
            onClick={resetFilters}
            className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 cursor-pointer"
          >
            <i className="ri-arrow-left-line"></i>
          </button>
          
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const pageNum = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`px-4 py-2 border rounded-lg cursor-pointer ${
                  currentPage === pageNum
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                {pageNum}
              </button>
            );
          })}
          
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 cursor-pointer"
          >
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      )}
    </div>
  );
}

interface FilterSidebarProps {
  selectedBrand: string;
  setSelectedBrand: (brand: string) => void;
  priceRange: string;
  setPriceRange: (range: string) => void;
}

export default function FilterSidebar({ selectedBrand, setSelectedBrand, priceRange, setPriceRange }: FilterSidebarProps) {
  const brands = [
    { id: 'all', name: 'All Brands' },
    { id: 'samsung', name: 'Samsung' },
    { id: 'apple', name: 'Apple' },
    { id: 'oneplus', name: 'OnePlus' },
    { id: 'google', name: 'Google' },
    { id: 'xiaomi', name: 'Xiaomi' },
    { id: 'vivo', name: 'Vivo' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: 'under-30k', name: 'Under ₹30,000' },
    { id: '30k-60k', name: '₹30,000 - ₹60,000' },
    { id: '60k-100k', name: '₹60,000 - ₹1,00,000' },
    { id: 'above-100k', name: 'Above ₹1,00,000' }
  ];

  return (
    <aside className="lg:w-64 flex-shrink-0">
      <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-20">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Filters</h3>
        
        {/* Brand Filter */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Brand</h4>
          <div className="space-y-2">
            {brands.map((brand) => (
              <label key={brand.id} className="flex items-center cursor-pointer group">
                <input
                  type="radio"
                  name="brand"
                  value={brand.id}
                  checked={selectedBrand === brand.id}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-4 h-4 text-blue-600 cursor-pointer"
                />
                <span className="ml-2 text-gray-700 group-hover:text-blue-600">{brand.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Price Range</h4>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <label key={range.id} className="flex items-center cursor-pointer group">
                <input
                  type="radio"
                  name="price"
                  value={range.id}
                  checked={priceRange === range.id}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-4 h-4 text-blue-600 cursor-pointer"
                />
                <span className="ml-2 text-gray-700 group-hover:text-blue-600">{range.name}</span>
              </label>
            ))}
          </div>
        </div>

        <button 
          onClick={() => {
            setSelectedBrand('all');
            setPriceRange('all');
          }}
          className="w-full mt-6 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
        >
          Clear Filters
        </button>
      </div>
    </aside>
  );
}

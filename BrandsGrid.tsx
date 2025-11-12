
import { useNavigate } from 'react-router-dom';

const brands = [
  {
    name: "Apple",
    logo: "https://readdy.ai/api/search-image?query=Apple%20logo%20minimalist%20design%2C%20premium%20brand%20identity%2C%20clean%20white%20background%2C%20professional%20corporate%20photography%2C%20iconic%20technology%20company%20symbol&width=200&height=200&seq=apple&orientation=squarish",
    description: "Premium smartphones, tablets, and accessories with cutting-edge technology",
    productCount: 45,
    featured: true
  },
  {
    name: "Samsung",
    logo: "https://readdy.ai/api/search-image?query=Samsung%20logo%20corporate%20design%2C%20technology%20brand%20identity%2C%20clean%20white%20background%2C%20professional%20company%20photography%2C%20global%20electronics%20manufacturer%20symbol&width=200&height=200&seq=samsung&orientation=squarish",
    description: "Innovative Android devices and smart technology solutions",
    productCount: 38,
    featured: true
  },
  {
    name: "OnePlus",
    logo: "https://readdy.ai/api/search-image?query=OnePlus%20logo%20modern%20design%2C%20smartphone%20brand%20identity%2C%20clean%20white%20background%2C%20professional%20technology%20photography%2C%20premium%20mobile%20device%20company%20symbol&width=200&height=200&seq=oneplus&orientation=squarish",
    description: "Never Settle - Premium Android smartphones with flagship performance",
    productCount: 12,
    featured: false
  },
  {
    name: "Xiaomi",
    logo: "https://readdy.ai/api/search-image?query=Xiaomi%20logo%20corporate%20identity%2C%20technology%20brand%20design%2C%20clean%20white%20background%2C%20professional%20company%20photography%2C%20innovative%20electronics%20manufacturer%20symbol&width=200&height=200&seq=xiaomi&orientation=squarish",
    description: "Innovation for everyone - Affordable premium technology",
    productCount: 28,
    featured: true
  },
  {
    name: "Google",
    logo: "https://readdy.ai/api/search-image?query=Google%20logo%20colorful%20design%2C%20technology%20company%20identity%2C%20clean%20white%20background%2C%20professional%20corporate%20photography%2C%20search%20engine%20and%20technology%20giant%20symbol&width=200&height=200&seq=google&orientation=squarish",
    description: "Pure Android experience with AI-powered features",
    productCount: 8,
    featured: false
  },
  {
    name: "Nothing",
    logo: "https://readdy.ai/api/search-image?query=Nothing%20logo%20minimalist%20design%2C%20innovative%20brand%20identity%2C%20clean%20white%20background%2C%20professional%20technology%20photography%2C%20transparent%20smartphone%20company%20symbol&width=200&height=200&seq=nothing&orientation=squarish",
    description: "Transparent design meets innovative technology",
    productCount: 6,
    featured: false
  },
  {
    name: "Vivo",
    logo: "https://readdy.ai/api/search-image?query=Vivo%20logo%20corporate%20design%2C%20smartphone%20brand%20identity%2C%20clean%20white%20background%2C%20professional%20technology%20photography%2C%20camera-focused%20mobile%20device%20company%20symbol&width=200&height=200&seq=vivo&orientation=squarish",
    description: "Camera & Music - Perfect selfie smartphones",
    productCount: 22,
    featured: false
  },
  {
    name: "Realme",
    logo: "https://readdy.ai/api/search-image?query=Realme%20logo%20modern%20design%2C%20youth%20brand%20identity%2C%20clean%20white%20background%2C%20professional%20technology%20photography%2C%20performance%20smartphone%20company%20symbol&width=200&height=200&seq=realme&orientation=squarish",
    description: "Dare to Leap - Performance-focused smartphones for youth",
    productCount: 18,
    featured: false
  },
  {
    name: "Sony",
    logo: "https://readdy.ai/api/search-image?query=Sony%20logo%20corporate%20identity%2C%20premium%20brand%20design%2C%20clean%20white%20background%2C%20professional%20company%20photography%2C%20entertainment%20and%20electronics%20giant%20symbol&width=200&height=200&seq=sony&orientation=squarish",
    description: "Premium audio and entertainment technology",
    productCount: 15,
    featured: false
  },
  {
    name: "Portronics",
    logo: "https://readdy.ai/api/search-image?query=Portronics%20logo%20technology%20brand%2C%20accessories%20company%20identity%2C%20clean%20white%20background%2C%20professional%20corporate%20photography%2C%20mobile%20accessories%20manufacturer%20symbol&width=200&height=200&seq=portronics&orientation=squarish",
    description: "Innovative mobile accessories and charging solutions",
    productCount: 35,
    featured: false
  }
];

export default function BrandsGrid() {
  const navigate = useNavigate();

  const handleBrandClick = (brandName: string) => {
    navigate(`/brand/${brandName.toLowerCase()}`);
  };

  const featuredBrands = brands.filter(brand => brand.featured);
  const otherBrands = brands.filter(brand => !brand.featured);

  return (
    <div className="space-y-12">
      {/* Featured Brands */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Brands</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredBrands.map((brand) => (
            <div 
              key={brand.name} 
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center group cursor-pointer"
              onClick={() => handleBrandClick(brand.name)}
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{brand.name}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{brand.description}</p>
              <div className="flex items-center justify-center gap-2 text-sm text-blue-600">
                <i className="ri-smartphone-line"></i>
                <span>{brand.productCount} Products</span>
              </div>
              <div className="mt-4 inline-flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
                View Products
                <i className="ri-arrow-right-line ml-1 group-hover:translate-x-1 transition-transform duration-200"></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Brands */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">All Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {brands.map((brand) => (
            <div 
              key={brand.name} 
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 text-center group cursor-pointer"
              onClick={() => handleBrandClick(brand.name)}
            >
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gray-50 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{brand.name}</h3>
              <p className="text-xs text-gray-500">{brand.productCount} Products</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

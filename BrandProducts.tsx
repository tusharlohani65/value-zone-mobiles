
import { useState } from 'react';
import Card from '../../../components/base/Card';
import Button from '../../../components/base/Button';
import { useCartContext } from '../../../components/feature/CartProvider';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  features: string[];
}

interface BrandProductsProps {
  brandName: string;
}

export default function BrandProducts({ brandName }: BrandProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart } = useCartContext();

  const brandProducts: Record<string, Product[]> = {
    boat: [
      {
        id: 1,
        name: "boAt Airdopes 441 TWS Earbuds",
        category: "earbuds",
        price: 1999,
        originalPrice: 2999,
        image: "https://readdy.ai/api/search-image?query=Ultra%20sharp%20premium%20boAt%20Airdopes%20441%20true%20wireless%20earbuds%20with%20charging%20case%20on%20pristine%20white%20studio%20background%2C%20crystal%20clear%20popular%20TWS%20earphones%20with%20boAt%20signature%20sound%2C%20ultra%20HD%208K%20resolution%20professional%20product%20photography%20with%20perfect%20studio%20lighting%20and%20razor%20sharp%20details&width=400&height=400&seq=boat-airdopes-441-brand-ultra-hd-1&orientation=squarish",
        rating: 4.4,
        reviews: 3200,
        badge: "Popular",
        features: ['13mm Drivers', 'IPX7 Water Resistant', '150 Hours Playback']
      },
      {
        id: 2,
        name: "boAt Rockerz 450 Bluetooth Headphones",
        category: "headphones",
        price: 1999,
        originalPrice: 3990,
        image: "https://readdy.ai/api/search-image?query=Crystal%20clear%20premium%20boAt%20Rockerz%20450%20wireless%20bluetooth%20over-ear%20headphones%20in%20striking%20black%20and%20red%20color%20scheme%20on%20pristine%20white%20studio%20background%2C%20ultra%20sharp%20luxurious%20cushioned%20ear%20cups%20with%20premium%20finish%2C%20ultra%20HD%208K%20resolution%20professional%20product%20photography%20with%20perfect%20studio%20lighting%20and%20razor%20sharp%20details&width=400&height=400&seq=boat-rockerz-450-brand-ultra-hd-2&orientation=squarish",
        rating: 4.1,
        reviews: 8750,
        badge: "Trending",
        features: ['40mm Drivers', '15 Hours Playback', 'Bluetooth 4.2']
      },
      {
        id: 3,
        name: "boAt Watch Matrix Smartwatch",
        category: "smartwatch",
        price: 4999,
        originalPrice: 6999,
        image: "https://readdy.ai/api/search-image?query=Ultra%20sharp%20luxurious%20boAt%20Watch%20Matrix%20smartwatch%20with%20premium%20black%20metal%20strap%20and%20vibrant%20colorful%20AMOLED%20display%20on%20pristine%20white%20studio%20background%2C%20crystal%20clear%20modern%20fitness%20tracker%20with%20sleek%20design%20and%20crystal%20clear%20screen%2C%20ultra%20HD%208K%20resolution%20professional%20product%20photography%20with%20perfect%20studio%20lighting%20and%20razor%20sharp%20details&width=400&height=400&seq=boat-watch-matrix-brand-ultra-hd-3&orientation=squarish",
        rating: 4.5,
        reviews: 1450,
        badge: "Lifestyle",
        features: ['1.69" Display', 'SpO2 Monitor', '7 Days Battery']
      },
      {
        id: 4,
        name: "boAt Xtend Smartwatch",
        category: "smartwatch",
        price: 2999,
        originalPrice: 4499,
        image: "https://readdy.ai/api/search-image?query=Crystal%20clear%20boAt%20Xtend%20smartwatch%20with%20colorful%20display%20on%20pristine%20white%20studio%20background%2C%20ultra%20sharp%20trendy%20fitness%20tracker%20with%20multiple%20watch%20faces%20and%20health%20monitoring%2C%20ultra%20HD%208K%20resolution%20professional%20product%20photography%20with%20perfect%20studio%20lighting%20and%20razor%20sharp%20details&width=400&height=400&seq=boat-xtend-brand-ultra-hd-4&orientation=squarish",
        rating: 4.3,
        reviews: 1820,
        features: ['1.69" Display', 'Multiple Watch Faces', 'Health Monitoring']
      },
      {
        id: 5,
        name: "boAt Wave Call 2",
        category: "smartwatch",
        price: 2199,
        originalPrice: 3199,
        image: "https://readdy.ai/api/search-image?query=Ultra%20sharp%20boAt%20Wave%20Call%202%20smartwatch%20with%20calling%20feature%20on%20pristine%20white%20studio%20background%2C%20crystal%20clear%20budget%20smartwatch%20with%20Bluetooth%20calling%20and%20fitness%20tracking%2C%20ultra%20HD%208K%20resolution%20professional%20product%20photography%20with%20perfect%20studio%20lighting%20and%20razor%20sharp%20details&width=400&height=400&seq=boat-wave-call-brand-ultra-hd-5&orientation=squarish",
        rating: 4.2,
        reviews: 2100,
        features: ['Bluetooth Calling', 'Fitness Tracking', 'Long Battery Life']
      },
      {
        id: 6,
        name: "boAt Storm Pro Smartwatch",
        category: "smartwatch",
        price: 3799,
        originalPrice: 5299,
        image: "https://readdy.ai/api/search-image?query=Crystal%20clear%20boAt%20Storm%20Pro%20smartwatch%20with%20rugged%20design%20on%20pristine%20white%20studio%20background%2C%20ultra%20sharp%20sports%20smartwatch%20with%20water%20resistance%20and%20advanced%20fitness%20features%2C%20ultra%20HD%208K%20resolution%20professional%20product%20photography%20with%20perfect%20studio%20lighting%20and%20razor%20sharp%20details&width=400&height=400&seq=boat-storm-pro-brand-ultra-hd-6&orientation=squarish",
        rating: 4.6,
        reviews: 980,
        badge: "Sports",
        features: ['Rugged Design', 'Water Resistant', 'Advanced Fitness']
      }
    ],
    noise: [
      {
        id: 7,
        name: "Noise ColorFit Pro 4 Alpha Smartwatch",
        category: "smartwatch",
        price: 3999,
        originalPrice: 5999,
        image: "https://readdy.ai/api/search-image?query=Ultra%20sharp%20premium%20Noise%20ColorFit%20Pro%204%20Alpha%20smartwatch%20with%20stunning%20vibrant%20AMOLED%20display%20and%20comfortable%20silicone%20sport%20strap%20on%20pristine%20white%20studio%20background%2C%20crystal%20clear%20modern%20Indian%20fitness%20tracker%20with%20colorful%20interface%20and%20sleek%20design%2C%20ultra%20HD%208K%20resolution%20professional%20product%20photography%20with%20perfect%20studio%20lighting%20and%20razor%20sharp%20details&width=400&height=400&seq=noise-colorfit-pro4-brand-ultra-hd-7&orientation=squarish",
        rating: 4.6,
        reviews: 2850,
        badge: "Best Seller",
        features: ['1.78" AMOLED', 'Bluetooth Calling', '7 Days Battery']
      },
      {
        id: 8,
        name: "Noise ColorFit Pulse 2 Max",
        category: "smartwatch",
        price: 2499,
        originalPrice: 3499,
        image: "https://readdy.ai/api/search-image?query=Crystal%20clear%20Noise%20ColorFit%20Pulse%202%20Max%20smartwatch%20with%20large%20display%20on%20pristine%20white%20studio%20background%2C%20ultra%20sharp%20affordable%20fitness%20tracker%20with%20heart%20rate%20monitoring%2C%20ultra%20HD%208K%20resolution%20professional%20product%20photography%20with%20perfect%20studio%20lighting%20and%20razor%20sharp%20details&width=400&height=400&seq=noise-pulse-2-max-brand-ultra-hd-8&orientation=squarish",
        rating: 4.4,
        reviews: 1920,
        features: ['Large Display', 'Heart Rate Monitor', 'Multiple Sports Modes']
      },
      {
        id: 9,
        name: "Noise ColorFit Icon 2",
        category: "smartwatch",
        price: 1999,
        originalPrice: 2999,
        image: "https://readdy.ai/api/search-image?query=Ultra%20sharp%20Noise%20ColorFit%20Icon%202%20smartwatch%20with%20round%20display%20on%20pristine%20white%20studio%20background%2C%20crystal%20clear%20stylish%20fitness%20watch%20with%20multiple%20sports%20modes%2C%20ultra%20HD%208K%20resolution%20professional%20product%20photography%20with%20perfect%20studio%20lighting%20and%20razor%20sharp%20details&width=400&height=400&seq=noise-icon-2-brand-ultra-hd-9&orientation=squarish",
        rating: 4.3,
        reviews: 1650,
        features: ['Round Display', 'Stylish Design', 'Multiple Sports Modes']
      },
      {
        id: 10,
        name: "Noise Buds VS102 TWS Earbuds",
        category: "earbuds",
        price: 1499,
        originalPrice: 2199,
        image: "https://readdy.ai/api/search-image?query=Crystal%20clear%20Noise%20Buds%20VS102%20true%20wireless%20earbuds%20with%20charging%20case%20on%20pristine%20white%20studio%20background%2C%20ultra%20sharp%20Indian%20brand%20TWS%20with%20good%20sound%20quality%20and%20battery%20life%2C%20ultra%20HD%208K%20resolution%20professional%20product%20photography%20with%20perfect%20studio%20lighting%20and%20razor%20sharp%20details&width=400&height=400&seq=noise-buds-vs102-brand-ultra-hd-10&orientation=squarish",
        rating: 4.3,
        reviews: 1680,
        features: ['10mm Drivers', 'IPX5 Rating', '50 Hours Playback']
      },
      {
        id: 11,
        name: "Noise Air Buds Pro",
        category: "earbuds",
        price: 2499,
        originalPrice: 3499,
        image: "https://readdy.ai/api/search-image?query=Ultra%20sharp%20Noise%20Air%20Buds%20Pro%20wireless%20earbuds%20with%20ANC%20on%20pristine%20white%20studio%20background%2C%20crystal%20clear%20premium%20TWS%20earphones%20with%20active%20noise%20cancellation%2C%20ultra%20HD%208K%20resolution%20professional%20product%20photography%20with%20perfect%20studio%20lighting%20and%20razor%20sharp%20details&width=400&height=400&seq=noise-air-buds-pro-brand-ultra-hd-11&orientation=squarish",
        rating: 4.6,
        reviews: 1120,
        badge: "ANC",
        features: ['Active Noise Cancellation', 'Premium Sound', 'Long Battery Life']
      }
    ],
    digitek: [
      {
        id: 12,
        name: "Digitek DTR 550LW Professional Tripod",
        category: "tripod",
        price: 2799,
        originalPrice: 4500,
        image: "https://readdy.ai/api/search-image?query=Crystal%20clear%20professional%20Digitek%20DTR%20550LW%20camera%20tripod%20in%20premium%20black%20aluminum%20construction%20on%20pristine%20white%20studio%20background%2C%20ultra%20sharp%20lightweight%20professional%20photography%20equipment%20with%20adjustable%20telescopic%20legs%20and%20smooth%20pan%20head%2C%20ultra%20HD%208K%20resolution%20professional%20product%20photography%20with%20perfect%20studio%20lighting%20and%20razor%20sharp%20details&width=400&height=400&seq=digitek-dtr550lw-brand-ultra-hd-12&orientation=squarish",
        rating: 4.3,
        reviews: 2150,
        badge: "Professional",
        features: ['Aluminum Build', '1.5kg Weight', '55" Max Height']
      },
      {
        id: 13,
        name: "Digitek DMP 001 Mobile Phone Tripod",
        category: "tripod",
        price: 899,
        originalPrice: 1499,
        image: "https://readdy.ai/api/search-image?query=Ultra%20sharp%20compact%20Digitek%20DMP%20001%20mobile%20phone%20tripod%20stand%20in%20sleek%20black%20color%20on%20pristine%20white%20studio%20background%2C%20crystal%20clear%20foldable%20portable%20design%20with%20secure%20phone%20holder%20and%20adjustable%20ball%20head%2C%20ultra%20HD%208K%20resolution%20professional%20product%20photography%20with%20perfect%20studio%20lighting%20and%20razor%20sharp%20details&width=400&height=400&seq=digitek-dmp001-brand-ultra-hd-13&orientation=squarish",
        rating: 4.1,
        reviews: 4320,
        badge: "Compact",
        features: ['Foldable Design', 'Phone Holder', 'Lightweight']
      },
      {
        id: 14,
        name: "Digitek DTR 260GT Travel Tripod",
        category: "tripod",
        price: 1899,
        originalPrice: 2999,
        image: "https://readdy.ai/api/search-image?query=Crystal%20clear%20premium%20Digitek%20DTR%20260GT%20travel%20tripod%20in%20elegant%20silver%20and%20black%20finish%20on%20pristine%20white%20studio%20background%2C%20ultra%20sharp%20compact%20portable%20carbon%20fiber%20design%20for%20professional%20photography%20with%20quick%20release%20plate%2C%20ultra%20HD%208K%20resolution%20professional%20product%20photography%20with%20perfect%20studio%20lighting%20and%20razor%20sharp%20details&width=400&height=400&seq=digitek-dtr260gt-brand-ultra-hd-14&orientation=squarish",
        rating: 4.2,
        reviews: 1890,
        badge: "Travel Ready",
        features: ['Carbon Fiber', 'Ultra Light', 'Quick Setup']
      },
      {
        id: 15,
        name: "Digitek 18-inch LED Ring Light",
        category: "lighting",
        price: 3999,
        originalPrice: 6999,
        image: "https://readdy.ai/api/search-image?query=Ultra%20sharp%20professional%20Digitek%2018%20inch%20LED%20ring%20light%20with%20adjustable%20tripod%20stand%20on%20pristine%20white%20studio%20background%2C%20crystal%20clear%20dimmable%20photography%20lighting%20equipment%20with%20phone%20holder%20mount%20and%20wireless%20remote%20control%2C%20ultra%20HD%208K%20resolution%20professional%20product%20photography%20with%20perfect%20studio%20lighting%20and%20razor%20sharp%20details&width=400&height=400&seq=digitek-ring-light-brand-ultra-hd-15&orientation=squarish",
        rating: 4.5,
        reviews: 2340,
        badge: "Professional",
        features: ['Dimmable LED', 'Phone Holder', 'Remote Control']
      },
      {
        id: 16,
        name: "Digitek Camera Bag Professional",
        category: "accessories",
        price: 1299,
        originalPrice: 1999,
        image: "https://readdy.ai/api/search-image?query=Crystal%20clear%20Digitek%20professional%20camera%20bag%20in%20black%20color%20on%20pristine%20white%20studio%20background%2C%20ultra%20sharp%20padded%20camera%20case%20with%20multiple%20compartments%20and%20adjustable%20dividers%2C%20ultra%20HD%208K%20resolution%20professional%20product%20photography%20with%20perfect%20studio%20lighting%20and%20razor%20sharp%20details&width=400&height=400&seq=digitek-camera-bag-brand-ultra-hd-16&orientation=squarish",
        rating: 4.4,
        reviews: 1580,
        features: ['Padded Protection', 'Multiple Compartments', 'Adjustable Dividers']
      }
    ],
    portronics: [
      {
        id: 17,
        name: "Portronics Adapto 20W Fast Charger",
        category: "charger",
        price: 899,
        originalPrice: 1299,
        image: "https://readdy.ai/api/search-image?query=Ultra%20sharp%20premium%20Portronics%20Adapto%2020W%20fast%20charger%20adapter%20in%20pristine%20white%20color%20on%20white%20studio%20background%2C%20crystal%20clear%20compact%20modern%20USB-C%20power%20adapter%20with%20sleek%20minimalist%20design%20and%20premium%20finish%2C%20ultra%20HD%208K%20resolution%20professional%20product%20photography%20with%20perfect%20studio%20lighting%20and%20razor%20sharp%20details&width=400&height=400&seq=portronics-adapto20-brand-ultra-hd-17&orientation=squarish",
        rating: 4.4,
        reviews: 1850,
        features: ['20W Output', 'USB-C Port', 'Compact Design']
      },
      {
        id: 18,
        name: "Portronics Konnect L USB-C Cable",
        category: "cable",
        price: 399,
        originalPrice: 599,
        image: "https://readdy.ai/api/search-image?query=Crystal%20clear%20premium%20Portronics%20Konnect%20L%20USB-C%20charging%20cable%20in%20sleek%20black%20color%20on%20pristine%20white%20studio%20background%2C%20ultra%20sharp%20durable%20braided%20nylon%20design%20with%20premium%20metal%20connectors%20and%20reinforced%20joints%2C%20ultra%20HD%208K%20resolution%20professional%20product%20photography%20with%20perfect%20studio%20lighting%20and%20razor%20sharp%20details&width=400&height=400&seq=portronics-konnect-brand-ultra-hd-18&orientation=squarish",
        rating: 4.3,
        reviews: 2100,
        features: ['Braided Design', '3A Fast Charge', '1 Year Warranty']
      },
      {
        id: 19,
        name: "Portronics Power Wallet 10K Power Bank",
        category: "powerbank",
        price: 1499,
        originalPrice: 1999,
        image: "https://readdy.ai/api/search-image?query=Ultra%20sharp%20premium%20Portronics%20Power%20Wallet%2010000mAh%20power%20bank%20in%20sleek%20black%20premium%20design%20on%20pristine%20white%20studio%20background%2C%20crystal%20clear%20slim%20portable%20battery%20pack%20with%20LED%20digital%20display%20and%20dual%20charging%20ports%2C%20ultra%20HD%208K%20resolution%20professional%20product%20photography%20with%20perfect%20studio%20lighting%20and%20razor%20sharp%20details&width=400&height=400&seq=portronics-powerwallet-brand-ultra-hd-19&orientation=squarish",
        rating: 4.5,
        reviews: 1420,
        features: ['10000mAh', 'Dual Output', 'LED Display']
      },
      {
        id: 20,
        name: "Portronics Wireless Charging Pad",
        category: "charger",
        price: 1199,
        originalPrice: 1699,
        image: "https://readdy.ai/api/search-image?query=Crystal%20clear%20Portronics%20wireless%20charging%20pad%20on%20pristine%20white%20studio%20background%2C%20ultra%20sharp%20Qi%20wireless%20charger%20with%20LED%20indicator%20and%20fast%20charging%20support%2C%20ultra%20HD%208K%20resolution%20professional%20product%20photography%20with%20perfect%20studio%20lighting%20and%20razor%20sharp%20details&width=400&height=400&seq=portronics-wireless-brand-ultra-hd-20&orientation=squarish",
        rating: 4.2,
        reviews: 980,
        features: ['Qi Wireless', 'LED Indicator', 'Fast Charging']
      },
      {
        id: 21,
        name: "Portronics 65W GaN Charger",
        category: "charger",
        price: 2499,
        originalPrice: 3499,
        image: "https://readdy.ai/api/search-image?query=Ultra%20sharp%20Portronics%2065W%20GaN%20fast%20charger%20on%20pristine%20white%20studio%20background%2C%20crystal%20clear%20compact%20gallium%20nitride%20charger%20with%20multiple%20ports%20for%20laptops%20and%20phones%2C%20ultra%20HD%208K%20resolution%20professional%20product%20photography%20with%20perfect%20studio%20lighting%20and%20razor%20sharp%20details&width=400&height=400&seq=portronics-gan-brand-ultra-hd-21&orientation=squarish",
        rating: 4.7,
        reviews: 680,
        badge: "GaN Tech",
        features: ['65W Output', 'GaN Technology', 'Multiple Ports']
      },
      {
        id: 22,
        name: "Portronics 3-in-1 Charging Cable",
        category: "cable",
        price: 699,
        originalPrice: 999,
        image: "https://readdy.ai/api/search-image?query=Crystal%20clear%20Portronics%203-in-1%20charging%20cable%20with%20Lightning%20USB-C%20and%20Micro%20USB%20on%20pristine%20white%20studio%20background%2C%20ultra%20sharp%20universal%20charging%20cable%20for%20all%20devices%2C%20ultra%20HD%208K%20resolution%20professional%20product%20photography%20with%20perfect%20studio%20lighting%20and%20razor%20sharp%20details&width=400&height=400&seq=portronics-3in1-brand-ultra-hd-22&orientation=squarish",
        rating: 4.3,
        reviews: 1920,
        features: ['3-in-1 Design', 'Universal Compatibility', 'Durable Build']
      }
    ]
  };

  const currentProducts = brandProducts[brandName.toLowerCase()] || [];
  
  const categories = [
    { id: 'all', name: 'All Products' },
    ...Array.from(new Set(currentProducts.map(p => p.category))).map(cat => ({
      id: cat,
      name: cat.charAt(0).toUpperCase() + cat.slice(1)
    }))
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? currentProducts 
    : currentProducts.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    });
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-product-shop>
          {filteredProducts.map((product) => (
            <Card key={product.id} hover className="overflow-hidden">
              <div className="relative">
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium z-10">
                    {product.badge}
                  </span>
                )}
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-base mb-2 text-gray-900 line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i}
                        className={`ri-star-${i < Math.floor(product.rating) ? 'fill' : 'line'} text-yellow-400 text-xs`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600 ml-2">
                    ({product.reviews})
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-gray-900">
                      ₹{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <Button 
                  className="w-full" 
                  size="sm"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found for this brand.</p>
          </div>
        )}
      </div>
    </div>
  );
}


import { Link } from 'react-router-dom';
import Card from '../../../components/base/Card';

export default function CategorySection() {
  const categories = [
    {
      id: 1,
      name: 'Charging Solutions',
      description: 'Chargers, Cables, Power Banks',
      icon: 'ri-battery-charge-line',
      link: '/accessories?category=charging',
      image: 'https://readdy.ai/api/search-image?query=collection%20of%20colorful%20USB%20cables%2C%20wireless%20chargers%2C%20power%20banks%20and%20fast%20charging%20adapters%20arranged%20on%20white%20background%2C%20modern%20tech%20accessories%2C%20clean%20product%20photography&width=400&height=300&seq=cat-charging&orientation=landscape'
    },
    {
      id: 2,
      name: 'Audio Accessories',
      description: 'Earphones, Speakers, Headphones',
      icon: 'ri-headphone-line',
      link: '/accessories?category=audio',
      image: 'https://readdy.ai/api/search-image?query=premium%20wireless%20earphones%2C%20bluetooth%20speakers%2C%20gaming%20headphones%20and%20audio%20accessories%20displayed%20elegantly%2C%20modern%20tech%20products%2C%20professional%20lighting&width=400&height=300&seq=cat-audio&orientation=landscape'
    },
    {
      id: 3,
      name: 'Phone Protection',
      description: 'Cases, Covers, Screen Guards',
      icon: 'ri-shield-line',
      link: '/accessories?category=protection',
      image: 'https://readdy.ai/api/search-image?query=colorful%20phone%20cases%2C%20tempered%20glass%20screen%20protectors%2C%20protective%20covers%20and%20mobile%20accessories%20arranged%20neatly%2C%20vibrant%20colors%2C%20clean%20background&width=400&height=300&seq=cat-protection&orientation=landscape'
    },
    {
      id: 4,
      name: 'Gaming Gear',
      description: 'Controllers, Stands, Gaming Accessories',
      icon: 'ri-gamepad-line',
      link: '/accessories?category=gaming',
      image: 'https://readdy.ai/api/search-image?query=gaming%20accessories%20including%20wireless%20controllers%2C%20phone%20gaming%20triggers%2C%20cooling%20fans%2C%20gaming%20stands%20and%20RGB%20accessories%2C%20dark%20gaming%20setup&width=400&height=300&seq=cat-gaming&orientation=landscape'
    },
    {
      id: 5,
      name: 'Smart Wearables',
      description: 'Watch Bands, Fitness Trackers',
      icon: 'ri-time-line',
      link: '/accessories?category=wearables',
      image: 'https://readdy.ai/api/search-image?query=smart%20watch%20bands%20in%20different%20colors%2C%20fitness%20tracker%20accessories%2C%20wearable%20tech%20gadgets%20displayed%20on%20modern%20surface%2C%20clean%20product%20photography&width=400&height=300&seq=cat-wearables&orientation=landscape'
    },
    {
      id: 6,
      name: 'Storage & Memory',
      description: 'USB Drives, Memory Cards, Adapters',
      icon: 'ri-save-line',
      link: '/accessories?category=storage',
      image: 'https://readdy.ai/api/search-image?query=USB%20flash%20drives%2C%20micro%20SD%20cards%2C%20memory%20card%20adapters%20and%20storage%20devices%20arranged%20professionally%2C%20tech%20accessories%2C%20white%20background&width=400&height=300&seq=cat-storage&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our extensive collection of premium tech accessories across multiple categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.id} to={category.link} className="group">
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-2">
                      <i className={`${category.icon} text-2xl text-white`}></i>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span>Explore Collection</span>
                    <i className="ri-arrow-right-line ml-2 group-hover:translate-x-2 transition-transform"></i>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

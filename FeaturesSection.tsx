
const features = [
  {
    icon: "ri-camera-line",
    title: "Professional Equipment",
    description: "Stay ahead with the latest photography and vlogging gear featuring cutting-edge technology from top brands worldwide."
  },
  {
    icon: "ri-shield-check-line",
    title: "Official Warranty",
    description: "All our tech accessories come with official brand warranty and comprehensive after-sales support for complete peace of mind."
  },
  {
    icon: "ri-truck-line",
    title: "Fast & Free Delivery",
    description: "Get your equipment delivered to your doorstep within 24-48 hours with free shipping on orders above ₹999."
  },
  {
    icon: "ri-exchange-line",
    title: "Easy Returns & Exchange",
    description: "Not satisfied? Return or exchange your accessories within 7 days with our hassle-free return policy and full refund guarantee."
  },
  {
    icon: "ri-customer-service-2-line",
    title: "Expert Support",
    description: "Our tech experts are available 24/7 to help you choose the right equipment, setup, and resolve any technical issues."
  },
  {
    icon: "ri-price-tag-3-line",
    title: "Best Price Guarantee",
    description: "We offer the most competitive prices on all accessories with regular discounts, EMI options, and special offers."
  },
  {
    icon: "ri-tools-line",
    title: "Repair Services",
    description: "Professional repair and maintenance services with genuine parts and certified technicians for all brands."
  },
  {
    icon: "ri-gift-line",
    title: "Bundle Offers",
    description: "Get amazing deals on accessory bundles. Complete your content creation setup with our specially curated packages."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-600">Your trusted partner for all tech accessory needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-700 transition-colors duration-300">
                <i className={`${feature.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Mumbai, Maharashtra",
    rating: 5,
    comment: "Bought iPhone 15 Pro Max from MobileHub. Amazing service! Got the best price and genuine product with official warranty. Delivery was super fast and packaging was excellent.",
    avatar: "https://readdy.ai/api/search-image?query=Professional%20Indian%20male%20customer%20portrait%2C%20satisfied%20mobile%20phone%20buyer%2C%20happy%20technology%20customer%2C%20clean%20background%20portrait%20photography&width=100&height=100&seq=customer1&orientation=squarish",
    device: "iPhone 15 Pro Max"
  },
  {
    name: "Priya Patel",
    location: "Delhi, India",
    rating: 5,
    comment: "Excellent mobile store! Staff is very knowledgeable and helped me choose the perfect Samsung Galaxy S24. Great after-sales support and competitive pricing. Highly recommended!",
    avatar: "https://readdy.ai/api/search-image?query=Professional%20Indian%20female%20customer%20portrait%2C%20happy%20mobile%20phone%20buyer%2C%20satisfied%20technology%20customer%2C%20clean%20background%20portrait%20photography&width=100&height=100&seq=customer2&orientation=squarish",
    device: "Samsung Galaxy S24"
  },
  {
    name: "Arjun Singh",
    location: "Bangalore, Karnataka",
    rating: 5,
    comment: "Best mobile shopping experience! Ordered OnePlus 12 online and received it next day. Product was exactly as described with all accessories. Customer service is outstanding.",
    avatar: "https://readdy.ai/api/search-image?query=Professional%20Indian%20male%20customer%20portrait%2C%20young%20technology%20enthusiast%2C%20satisfied%20mobile%20buyer%2C%20clean%20background%20portrait%20photography&width=100&height=100&seq=customer3&orientation=squarish",
    device: "OnePlus 12"
  },
  {
    name: "Sneha Gupta",
    location: "Pune, Maharashtra",
    rating: 5,
    comment: "Amazing collection of mobile accessories! Found everything I needed for my new phone - case, screen protector, charger. Quality products at reasonable prices with fast delivery.",
    avatar: "https://readdy.ai/api/search-image?query=Professional%20Indian%20female%20customer%20portrait%2C%20happy%20mobile%20accessories%20buyer%2C%20satisfied%20young%20customer%2C%20clean%20background%20portrait%20photography&width=100&height=100&seq=customer4&orientation=squarish",
    device: "Mobile Accessories"
  },
  {
    name: "Vikash Kumar",
    location: "Chennai, Tamil Nadu",
    rating: 5,
    comment: "Traded in my old phone and got great value! The trade-in process was smooth and transparent. Upgraded to Xiaomi 14 Ultra with minimal additional cost. Excellent service!",
    avatar: "https://readdy.ai/api/search-image?query=Professional%20Indian%20male%20customer%20portrait%2C%20satisfied%20mobile%20trade-in%20customer%2C%20happy%20technology%20buyer%2C%20clean%20background%20portrait%20photography&width=100&height=100&seq=customer5&orientation=squarish",
    device: "Xiaomi 14 Ultra"
  },
  {
    name: "Kavya Reddy",
    location: "Hyderabad, Telangana",
    rating: 5,
    comment: "Fantastic mobile repair service! My phone screen was damaged and they fixed it perfectly with genuine parts. Quick turnaround time and reasonable pricing. Very professional team.",
    avatar: "https://readdy.ai/api/search-image?query=Professional%20Indian%20female%20customer%20portrait%2C%20satisfied%20mobile%20repair%20customer%2C%20happy%20service%20user%2C%20clean%20background%20portrait%20photography&width=100&height=100&seq=customer6&orientation=squarish",
    device: "Repair Service"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600">Trusted by thousands of mobile users across India</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 text-sm"></i>
                ))}
                <span className="ml-2 text-sm text-blue-600 font-medium">{testimonial.device}</span>
              </div>
              
              <p className="text-gray-700 text-sm leading-relaxed">{testimonial.comment}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">50,000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Mobile Models</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">Top Brands</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
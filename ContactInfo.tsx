
import Card from '../../../components/base/Card';

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: 'ri-map-pin-line',
      title: 'Visit Us',
      details: ['Nehru Place', 'Delhi, India', 'Owner: Chand Khan']
    },
    {
      icon: 'ri-phone-line',
      title: 'Call Us',
      details: ['Mobile: +91 7827962864', 'WhatsApp Available', 'Mon-Sat: 9 AM - 8 PM']
    },
    {
      icon: 'ri-whatsapp-line',
      title: 'WhatsApp Us',
      details: ['+91 7827962864', 'Quick responses', 'Available 24/7'],
      action: () => window.open('https://wa.me/917827962864?text=Hello, I need help with mobile phones', '_blank')
    },
    {
      icon: 'ri-mail-line',
      title: 'Email Us',
      details: ['support@valuezonemobile.com', 'sales@valuezonemobile.com', 'Response within 24 hours']
    },
    {
      icon: 'ri-time-line',
      title: 'Business Hours',
      details: ['Monday - Saturday: 9:00 AM - 8:00 PM', 'Sunday: 10:00 AM - 6:00 PM', 'Public Holidays: Closed']
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
      <p className="text-gray-600 mb-8">
        Reach out to us through any of these channels. Our team is always ready to assist you with your queries.
      </p>

      <div className="space-y-6">
        {contactMethods.map((method, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-start gap-4">
              <div className={`${method.icon === 'ri-whatsapp-line' ? 'bg-green-100' : 'bg-blue-100'} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                <i className={`${method.icon} text-2xl ${method.icon === 'ri-whatsapp-line' ? 'text-green-600' : 'text-blue-600'}`}></i>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2">{method.title}</h3>
                {method.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                ))}
                {method.action && (
                  <button
                    onClick={method.action}
                    className="mt-3 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Chat on WhatsApp
                  </button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Social Media */}
      <div className="mt-8">
        <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
        <div className="flex gap-4">
          {[
            { icon: 'ri-facebook-fill', color: 'hover:text-blue-600' },
            { icon: 'ri-twitter-fill', color: 'hover:text-blue-400' },
            { icon: 'ri-instagram-fill', color: 'hover:text-pink-600' },
            { icon: 'ri-linkedin-fill', color: 'hover:text-blue-700' },
            { icon: 'ri-youtube-fill', color: 'hover:text-red-600' }
          ].map((social, index) => (
            <button
              key={index}
              className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 ${social.color} transition-colors cursor-pointer`}
            >
              <i className={`${social.icon} text-xl`}></i>
            </button>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="mt-8">
        <h3 className="font-bold text-gray-900 mb-4">Our Location</h3>
        <div className="rounded-lg overflow-hidden border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8267739788894!2d77.24973731455065!3d28.549042982451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e564c2e4c7%3A0x5b5c5b5c5b5c5b5c!2sNehru%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

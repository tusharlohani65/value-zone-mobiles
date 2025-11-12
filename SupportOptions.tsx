
import Card from '../../../components/base/Card';
import Button from '../../../components/base/Button';

export default function SupportOptions() {
  const supportOptions = [
    {
      icon: 'ri-whatsapp-line',
      title: 'WhatsApp Support',
      description: 'Get instant help via WhatsApp. Quick responses for urgent queries.',
      action: 'Chat Now',
      color: 'bg-green-100 text-green-600',
      buttonColor: 'bg-green-600 hover:bg-green-700',
      onClick: () => window.open('https://wa.me/917827962864?text=Hello, I need support with my mobile phone', '_blank')
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Live Chat',
      description: 'Chat with our AI assistant for instant answers to common questions.',
      action: 'Start Chat',
      color: 'bg-blue-100 text-blue-600',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      onClick: () => {
        const widget = document.querySelector('#vapi-widget-floating-button') as HTMLElement;
        if (widget) widget.click();
      }
    },
    {
      icon: 'ri-phone-line',
      title: 'Phone Support',
      description: 'Call us directly for personalized assistance with your mobile needs.',
      action: 'Call Now',
      color: 'bg-purple-100 text-purple-600',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
      onClick: () => window.open('tel:+917827962864', '_self')
    },
    {
      icon: 'ri-mail-line',
      title: 'Email Support',
      description: 'Send us detailed queries and get comprehensive solutions via email.',
      action: 'Send Email',
      color: 'bg-orange-100 text-orange-600',
      buttonColor: 'bg-orange-600 hover:bg-orange-700',
      onClick: () => window.open('mailto:support@valuezonemobile.com', '_self')
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Visit Store',
      description: 'Visit our physical store in Nehru Place, Delhi for hands-on assistance.',
      action: 'Get Directions',
      color: 'bg-teal-100 text-teal-600',
      buttonColor: 'bg-teal-600 hover:bg-teal-700',
      onClick: () => window.open('https://maps.google.com/?q=Nehru+Place+Delhi', '_blank')
    },
    {
      icon: 'ri-book-open-line',
      title: 'Knowledge Base',
      description: 'Browse our comprehensive guides and tutorials for self-service support.',
      action: 'Browse Articles',
      color: 'bg-indigo-100 text-indigo-600',
      buttonColor: 'bg-indigo-600 hover:bg-indigo-700',
      onClick: () => {}
    }
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">How Can We Help You?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose the support option that works best for you. Our team is available through multiple channels 
          to ensure you get the help you need quickly and efficiently.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {supportOptions.map((option, index) => (
          <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className={`w-16 h-16 ${option.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
              <i className={`${option.icon} text-2xl`}></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h3>
            <p className="text-gray-600 mb-6">{option.description}</p>
            <Button 
              onClick={option.onClick}
              className={`w-full ${option.buttonColor} text-white`}
            >
              {option.action}
            </Button>
          </Card>
        ))}
      </div>

      {/* Quick Contact Info */}
      <div className="mt-12 bg-gray-50 rounded-lg p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Quick Contact Information</h3>
          <p className="text-gray-600">Reach us directly through these channels</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="ri-whatsapp-line text-xl text-green-600"></i>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
            <p className="text-gray-600 text-sm mb-2">+91 7827962864</p>
            <button
              onClick={() => window.open('https://wa.me/917827962864?text=Hello, I need support', '_blank')}
              className="text-green-600 hover:text-green-700 text-sm font-medium cursor-pointer"
            >
              Message Now →
            </button>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="ri-phone-line text-xl text-blue-600"></i>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
            <p className="text-gray-600 text-sm mb-2">+91 7827962864</p>
            <button
              onClick={() => window.open('tel:+917827962864', '_self')}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium cursor-pointer"
            >
              Call Now →
            </button>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="ri-map-pin-line text-xl text-purple-600"></i>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Visit Us</h4>
            <p className="text-gray-600 text-sm mb-2">Nehru Place, Delhi</p>
            <button
              onClick={() => window.open('https://maps.google.com/?q=Nehru+Place+Delhi', '_blank')}
              className="text-purple-600 hover:text-purple-700 text-sm font-medium cursor-pointer"
            >
              Get Directions →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

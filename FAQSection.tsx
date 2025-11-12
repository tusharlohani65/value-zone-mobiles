import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "What is your return and exchange policy?",
      answer: "We offer a 7-day return and exchange policy for all products. Items must be in original condition with all accessories and packaging. Please contact our support team to initiate a return."
    },
    {
      question: "Do you provide warranty on smartphones?",
      answer: "Yes, all smartphones come with manufacturer's warranty ranging from 1 to 2 years depending on the brand. We also offer extended warranty options at the time of purchase."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI, net banking, and EMI options. Cash on delivery is available for select locations."
    },
    {
      question: "How long does delivery take?",
      answer: "Standard delivery takes 3-5 business days. Express delivery (1-2 days) is available in major cities. You'll receive tracking information once your order is shipped."
    },
    {
      question: "Can I track my order?",
      answer: "Yes, you can track your order using the tracking number sent to your email and SMS. You can also check order status in your account dashboard."
    },
    {
      question: "Do you offer EMI options?",
      answer: "Yes, we offer EMI options starting from 3 months to 24 months on select credit cards and through partner banks. No-cost EMI is available on many products."
    },
    {
      question: "What if I receive a damaged product?",
      answer: "If you receive a damaged product, please contact us immediately with photos. We'll arrange for a replacement or full refund within 24-48 hours."
    },
    {
      question: "Do you have physical stores?",
      answer: "Yes, we have authorized service centers and retail partners across major cities. Use our store locator to find the nearest location."
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Find quick answers to common questions</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <i className={`ri-arrow-${openIndex === index ? 'up' : 'down'}-s-line text-xl text-gray-500 flex-shrink-0`}></i>
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-blue-50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-4">Our support team is ready to help you</p>
          <button 
            onClick={() => {
              const widget = document.querySelector('#vapi-widget-floating-button') as HTMLElement;
              if (widget) widget.click();
            }}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer font-medium"
          >
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}

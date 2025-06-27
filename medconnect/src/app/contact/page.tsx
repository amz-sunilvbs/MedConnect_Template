import ChatBot from '@/components/ChatBot';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Get in touch with our team or use our AI Health Assistant for immediate help with 
            appointments, prescriptions, billing, and general questions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* AI Chat Assistant */}
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">🤖 AI Health Assistant</h2>
                <p className="text-gray-600">
                  Get instant help with scheduling, prescriptions, billing, and general questions. 
                  Our AI assistant is available 24/7 to provide immediate assistance.
                </p>
              </div>
              <ChatBot />
              
              {/* Quick Actions */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">📅</div>
                  <h3 className="font-semibold text-gray-900 text-sm">Schedule Appointment</h3>
                  <p className="text-xs text-gray-600 mt-1">Book with any provider</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">💊</div>
                  <h3 className="font-semibold text-gray-900 text-sm">Prescription Refills</h3>
                  <p className="text-xs text-gray-600 mt-1">Request medication refills</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">💳</div>
                  <h3 className="font-semibold text-gray-900 text-sm">Billing Support</h3>
                  <p className="text-xs text-gray-600 mt-1">Payment and insurance help</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">🔬</div>
                  <h3 className="font-semibold text-gray-900 text-sm">Lab Results</h3>
                  <p className="text-xs text-gray-600 mt-1">Check test result status</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">📞 Contact Information</h2>
              
              <div className="space-y-6">
                {/* Office Location */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">📍</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Office Location</h3>
                      <p className="text-gray-700">123 Healthway</p>
                      <p className="text-gray-700">Medical City, CA 90210</p>
                      <a 
                        href="https://maps.google.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm mt-2 inline-block"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">📞</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Phone Numbers</h3>
                      <div className="space-y-1">
                        <p className="text-gray-700">
                          <span className="font-medium">Main Office:</span> (555) 123-4567
                        </p>
                        <p className="text-gray-700">
                          <span className="font-medium">Appointments:</span> (555) 123-4568
                        </p>
                        <p className="text-gray-700">
                          <span className="font-medium">Billing:</span> (555) 123-4569
                        </p>
                        <p className="text-gray-700">
                          <span className="font-medium">Emergency:</span> Call 911
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">⏰</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
                      <div className="space-y-1">
                        <p className="text-gray-700">
                          <span className="font-medium">Monday - Friday:</span> 9:00 AM - 5:00 PM
                        </p>
                        <p className="text-gray-700">
                          <span className="font-medium">Saturday:</span> 9:00 AM - 1:00 PM
                        </p>
                        <p className="text-gray-700">
                          <span className="font-medium">Sunday:</span> Closed
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                          After-hours urgent care available through our partner clinic
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">📧</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-700">
                        <span className="font-medium">General Inquiries:</span> info@medconnect.com
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">Billing Questions:</span> billing@medconnect.com
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        We respond to emails within 24 hours during business days
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Information */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-red-50 border-l-4 border-red-500">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start space-x-4">
            <div className="text-3xl">🚨</div>
            <div>
              <h2 className="text-xl font-bold text-red-800 mb-2">Emergency Information</h2>
              <p className="text-red-700 mb-4">
                If you are experiencing a medical emergency, please call 911 immediately or go to your nearest emergency room.
              </p>
              <div className="space-y-2">
                <p className="text-red-700">
                  <span className="font-medium">For urgent but non-emergency concerns after hours:</span>
                </p>
                <p className="text-red-700">Call our after-hours line: (555) 123-4570</p>
                <p className="text-red-700">Or visit: City Urgent Care Center, 456 Medical Blvd</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Additional Ways to Connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-4">🖥️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Patient Portal</h3>
              <p className="text-gray-600 text-sm mb-4">
                Access your medical records, send secure messages, and manage appointments online.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                Portal Login
              </button>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="font-semibold text-gray-900 mb-2">Mobile App</h3>
              <p className="text-gray-600 text-sm mb-4">
                Download our mobile app for convenient access to healthcare services on the go.
              </p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                Download App
              </button>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="font-semibold text-gray-900 mb-2">Secure Messaging</h3>
              <p className="text-gray-600 text-sm mb-4">
                Send non-urgent messages directly to your healthcare provider through our secure system.
              </p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Your Health, <span className="text-blue-600">Connected</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Welcome to MedConnect - your gateway to seamless healthcare. Experience comprehensive medical care 
            with AI-powered assistance, secure patient portals, and dedicated provider access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Schedule Appointment
            </Link>
            <Link
              href="/services"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose MedConnect?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the future of healthcare with our innovative platform designed for patients, providers, and staff.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Assistance</h3>
              <p className="text-gray-600">
                Get instant help with appointments, prescriptions, and billing through our intelligent AI assistant.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Portals</h3>
              <p className="text-gray-600">
                Access your medical records, test results, and communicate securely with your healthcare team.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-amber-50 hover:bg-amber-100 transition-colors">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Care</h3>
              <p className="text-gray-600">
                From family medicine to pediatrics, we provide complete healthcare services for all ages.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile Ready</h3>
              <p className="text-gray-600">
                Access your healthcare information anytime, anywhere with our responsive design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Access</h2>
            <p className="text-gray-600">
              Get started with MedConnect today
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="text-5xl mb-4">👥</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">New Patients</h3>
                <p className="text-gray-600 mb-6">
                  Join our family of patients and experience quality healthcare with personalized attention.
                </p>
                <Link
                  href="/register"
                  className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors"
                >
                  Register Now
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="text-5xl mb-4">📋</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Current Patients</h3>
                <p className="text-gray-600 mb-6">
                  Access your patient portal to view records, schedule appointments, and communicate with providers.
                </p>
                <button className="bg-green-600 text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition-colors">
                  Patient Login
                </button>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="text-5xl mb-4">🩺</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Healthcare Providers</h3>
                <p className="text-gray-600 mb-6">
                  Access provider tools, patient charts, and manage your practice efficiently.
                </p>
                <button className="bg-purple-600 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-700 transition-colors">
                  Provider Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">📍 Location</h3>
              <p>123 Healthway<br />Medical City, CA 90210</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">⏰ Hours</h3>
              <p>Monday - Friday<br />9:00 AM - 5:00 PM</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">📞 Contact</h3>
              <p>(555) 123-4567<br />info@medconnect.com</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
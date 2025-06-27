export default function Services() {
  const services = [
    {
      title: "Family Medicine",
      icon: "👨‍👩‍👧‍👦",
      description: "Comprehensive primary care for patients of all ages, from routine check-ups to chronic disease management.",
      features: [
        "Annual physical examinations",
        "Chronic disease management",
        "Preventive care and screenings",
        "Vaccinations and immunizations",
        "Minor illness and injury treatment"
      ]
    },
    {
      title: "Pediatric Care",
      icon: "👶",
      description: "Specialized healthcare services for infants, children, and adolescents with compassionate, child-friendly care.",
      features: [
        "Well-child visits and development tracking",
        "Childhood vaccinations",
        "Treatment of common childhood illnesses",
        "Growth and development assessments",
        "Behavioral and developmental counseling"
      ]
    },
    {
      title: "Preventive Health Screenings",
      icon: "🔍",
      description: "Early detection and prevention services to help maintain optimal health and prevent disease.",
      features: [
        "Cancer screenings (mammograms, colonoscopies)",
        "Cardiovascular health assessments",
        "Diabetes and blood pressure monitoring",
        "Cholesterol and lipid panels",
        "Bone density screenings"
      ]
    },
    {
      title: "Minor Surgical Procedures",
      icon: "🏥",
      description: "Safe, in-office procedures performed by our experienced medical team in a comfortable setting.",
      features: [
        "Skin lesion and mole removal",
        "Wound care and suturing",
        "Joint injections",
        "Cyst removal and drainage",
        "Ingrown toenail treatment"
      ]
    },
    {
      title: "Chronic Disease Management",
      icon: "📊",
      description: "Comprehensive care for long-term health conditions with personalized treatment plans.",
      features: [
        "Diabetes management and education",
        "Hypertension monitoring and treatment",
        "Asthma and COPD care",
        "Arthritis and joint health",
        "Heart disease prevention and management"
      ]
    },
    {
      title: "Women's Health",
      icon: "👩‍⚕️",
      description: "Specialized healthcare services addressing the unique needs of women throughout their lives.",
      features: [
        "Annual gynecological exams",
        "Prenatal and postnatal care",
        "Contraception counseling",
        "Menopause management",
        "Breast health screenings"
      ]
    },
    {
      title: "Mental Health Support",
      icon: "🧠",
      description: "Comprehensive mental health services to support emotional well-being and mental wellness.",
      features: [
        "Depression and anxiety screening",
        "Stress management counseling",
        "Behavioral health assessments",
        "Referrals to specialized mental health providers",
        "Crisis intervention and support"
      ]
    },
    {
      title: "Laboratory Services",
      icon: "🧪",
      description: "On-site laboratory testing for quick and accurate diagnostic results.",
      features: [
        "Blood work and complete blood counts",
        "Urine analysis and testing",
        "Cholesterol and lipid panels",
        "Glucose and diabetes testing",
        "Infectious disease testing"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Comprehensive healthcare services designed to meet the diverse needs of our community. 
            From preventive care to specialized treatments, we're here for you every step of the way.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Services Include:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Schedule Your Appointment?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our experienced healthcare team is here to provide you with personalized, compassionate care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Now
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Insurance Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Insurance & Payment</h2>
          <p className="text-gray-600 mb-8">
            We accept most major insurance plans and offer flexible payment options to make healthcare accessible to everyone.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="font-semibold text-gray-900 mb-2">Most Insurance Accepted</h3>
              <p className="text-gray-600 text-sm">We work with major insurance providers to ensure you get the care you need.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-3">💳</div>
              <h3 className="font-semibold text-gray-900 mb-2">Flexible Payment</h3>
              <p className="text-gray-600 text-sm">Multiple payment options including payment plans for those who qualify.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600 text-sm">Clear, upfront pricing with no hidden fees or surprise charges.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
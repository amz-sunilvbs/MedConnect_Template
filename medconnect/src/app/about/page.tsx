export default function About() {
  const teamMembers = [
    {
      name: "Jennifer Martinez",
      role: "Practice Manager",
      image: "👩‍💼",
      description: "Jennifer oversees daily operations and ensures our practice runs smoothly. With 12 years of healthcare administration experience, she's dedicated to making your visit as seamless as possible."
    },
    {
      name: "Robert Kim",
      role: "Head Nurse",
      image: "👨‍⚕️",
      description: "Robert leads our nursing team with compassion and expertise. His 15 years of clinical experience ensure that every patient receives the highest quality of care during their visit."
    },
    {
      name: "Maria Santos",
      role: "Patient Coordinator",
      image: "👩‍💻",
      description: "Maria is often the first friendly face you'll meet. She handles scheduling, insurance verification, and patient communications with warmth and efficiency."
    },
    {
      name: "Dr. James Wilson",
      role: "Medical Director",
      image: "👨‍⚕️",
      description: "Dr. Wilson provides clinical leadership and ensures our practice maintains the highest standards of medical care and patient safety."
    }
  ];

  const values = [
    {
      title: "Compassionate Care",
      icon: "❤️",
      description: "We treat every patient with kindness, empathy, and respect, understanding that healthcare is deeply personal."
    },
    {
      title: "Clinical Excellence",
      icon: "⭐",
      description: "We maintain the highest standards of medical practice, continuously updating our knowledge and skills."
    },
    {
      title: "Patient Empowerment",
      icon: "💪",
      description: "We educate and involve patients in their healthcare decisions, promoting active participation in their wellness journey."
    },
    {
      title: "Innovation",
      icon: "💡",
      description: "We embrace technology and innovative approaches to improve patient care and enhance the healthcare experience."
    },
    {
      title: "Accessibility",
      icon: "🌐",
      description: "We strive to make quality healthcare accessible to all members of our community, regardless of background."
    },
    {
      title: "Integrity",
      icon: "🤝",
      description: "We operate with honesty, transparency, and ethical principles in all our interactions and decisions."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About MedConnect</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Dedicated to providing exceptional healthcare with compassion, innovation, and a 
            commitment to improving the health and well-being of our community.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To provide comprehensive, patient-centered healthcare that combines clinical excellence 
                with compassionate care. We are committed to building lasting relationships with our 
                patients and supporting them in achieving their optimal health and wellness.
              </p>
              <p className="text-gray-600">
                Every decision we make is guided by our commitment to putting patients first and 
                delivering care that exceeds expectations.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To be the leading healthcare provider in our community, recognized for our innovative 
                approach to medicine, exceptional patient experience, and commitment to improving 
                health outcomes for all.
              </p>
              <p className="text-gray-600">
                We envision a future where quality healthcare is accessible, technology enhances 
                human connection, and every patient feels valued and cared for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
          <div className="text-left space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded in 2015, MedConnect began with a simple but powerful vision: to create a 
              healthcare practice that truly puts patients first. Our founders, a group of 
              experienced healthcare professionals, recognized the need for a more personal, 
              technology-enhanced approach to medical care.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              What started as a small family practice has grown into a comprehensive healthcare 
              center serving over 5,000 patients. Despite our growth, we've maintained our core 
              commitment to personalized care, ensuring that every patient receives the individual 
              attention they deserve.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, MedConnect is proud to be at the forefront of healthcare innovation, combining 
              cutting-edge technology like AI-powered assistance with the human touch that makes 
              all the difference in healthcare. We continue to evolve and improve, always with our 
              patients' well-being as our north star.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we interact with our patients, 
              each other, and our community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Support Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Behind every great healthcare experience is an exceptional team. Meet the dedicated 
              professionals who support our providers and ensure your care is seamless.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="text-5xl mb-4">{member.image}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Recognition */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Achievements & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">5,000+</div>
              <p className="text-gray-600">Patients Served</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <p className="text-gray-600">Patient Satisfaction</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
              <p className="text-gray-600">Healthcare Providers</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">9</div>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Community Involvement</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            We believe in giving back to the community that has supported us. Through health 
            screenings, educational programs, and partnerships with local organizations, we're 
            committed to improving health outcomes for everyone.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-3">🏫</div>
              <h3 className="font-semibold mb-2">School Health Programs</h3>
              <p className="text-sm opacity-90">Providing health education and screenings in local schools</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🎗️</div>
              <h3 className="font-semibold mb-2">Health Awareness</h3>
              <p className="text-sm opacity-90">Organizing community health fairs and awareness campaigns</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-semibold mb-2">Local Partnerships</h3>
              <p className="text-sm opacity-90">Collaborating with community organizations for better health</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Healthcare Family</h2>
          <p className="text-lg text-gray-600 mb-8">
            Experience the MedConnect difference. Schedule your appointment today and discover 
            what personalized, compassionate healthcare feels like.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Schedule Appointment
            </a>
            <a
              href="/providers"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Meet Our Providers
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
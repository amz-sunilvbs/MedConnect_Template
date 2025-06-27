export default function Providers() {
  const providers = [
    {
      name: "Dr. Emily Chen, MD",
      title: "Lead General Practitioner",
      image: "👩‍⚕️",
      specialties: ["Family Medicine", "Preventive Care", "Chronic Disease Management"],
      experience: "15+ years",
      education: [
        "MD - Stanford University School of Medicine",
        "Residency - University of California, San Francisco",
        "Board Certified in Family Medicine"
      ],
      languages: ["English", "Mandarin", "Spanish"],
      bio: "Dr. Chen brings a holistic approach to patient care, focusing on the whole person rather than just treating symptoms. She believes in building long-term relationships with her patients and empowering them to take an active role in their health. Her expertise in chronic disease management has helped countless patients achieve better health outcomes.",
      availability: "Monday - Friday",
      specialInterests: ["Diabetes Management", "Women's Health", "Preventive Medicine"]
    },
    {
      name: "Dr. David Lee, MD",
      title: "Board-Certified Pediatrician",
      image: "👨‍⚕️",
      specialties: ["Pediatrics", "Adolescent Medicine", "Child Development"],
      experience: "12+ years",
      education: [
        "MD - Harvard Medical School",
        "Pediatric Residency - Boston Children's Hospital",
        "Board Certified in Pediatrics"
      ],
      languages: ["English", "Korean"],
      bio: "Dr. Lee is passionate about providing compassionate care for children and adolescents. He creates a welcoming environment where both children and parents feel comfortable discussing health concerns. His gentle approach and expertise in child development make him a favorite among families.",
      availability: "Tuesday - Saturday",
      specialInterests: ["Behavioral Health", "ADHD Management", "Childhood Obesity Prevention"]
    },
    {
      name: "Dr. Sarah Rodriguez, MD",
      title: "Internal Medicine Specialist",
      image: "👩‍⚕️",
      specialties: ["Internal Medicine", "Cardiology", "Geriatric Care"],
      experience: "18+ years",
      education: [
        "MD - Johns Hopkins University School of Medicine",
        "Internal Medicine Residency - Mayo Clinic",
        "Cardiology Fellowship - Cleveland Clinic"
      ],
      languages: ["English", "Spanish", "Portuguese"],
      bio: "Dr. Rodriguez specializes in complex medical conditions and cardiovascular health. Her extensive training in internal medicine and cardiology allows her to provide comprehensive care for adults of all ages. She is particularly skilled in managing multiple chronic conditions and coordinating care with specialists.",
      availability: "Monday - Thursday",
      specialInterests: ["Heart Disease Prevention", "Hypertension Management", "Senior Care"]
    },
    {
      name: "Dr. Michael Thompson, DO",
      title: "Sports Medicine & Orthopedics",
      image: "👨‍⚕️",
      specialties: ["Sports Medicine", "Orthopedics", "Physical Rehabilitation"],
      experience: "10+ years",
      education: [
        "DO - Michigan State University College of Osteopathic Medicine",
        "Sports Medicine Fellowship - University of Pittsburgh",
        "Board Certified in Sports Medicine"
      ],
      languages: ["English"],
      bio: "Dr. Thompson combines his passion for sports with his medical expertise to help patients recover from injuries and improve their physical performance. Whether treating weekend warriors or professional athletes, he focuses on getting patients back to their active lifestyles safely and effectively.",
      availability: "Monday, Wednesday, Friday",
      specialInterests: ["Injury Prevention", "Joint Health", "Athletic Performance"]
    },
    {
      name: "Dr. Lisa Patel, MD",
      title: "Women's Health Specialist",
      image: "👩‍⚕️",
      specialties: ["Obstetrics & Gynecology", "Women's Health", "Reproductive Medicine"],
      experience: "14+ years",
      education: [
        "MD - University of California, Los Angeles",
        "OB/GYN Residency - Cedars-Sinai Medical Center",
        "Board Certified in Obstetrics & Gynecology"
      ],
      languages: ["English", "Hindi", "Gujarati"],
      bio: "Dr. Patel is dedicated to providing comprehensive women's healthcare throughout all stages of life. From adolescence through menopause, she offers personalized care that addresses both physical and emotional well-being. Her patients appreciate her compassionate approach and thorough explanations.",
      availability: "Tuesday - Friday",
      specialInterests: ["Reproductive Health", "Menopause Management", "Minimally Invasive Surgery"]
    },
    {
      name: "Dr. James Wilson, MD",
      title: "Mental Health & Psychiatry",
      image: "👨‍⚕️",
      specialties: ["Psychiatry", "Mental Health", "Addiction Medicine"],
      experience: "16+ years",
      education: [
        "MD - Yale University School of Medicine",
        "Psychiatry Residency - Johns Hopkins Hospital",
        "Board Certified in Psychiatry"
      ],
      languages: ["English", "French"],
      bio: "Dr. Wilson brings a comprehensive approach to mental health care, combining therapy, medication management, and lifestyle interventions. He believes in reducing the stigma around mental health and creating a safe, non-judgmental environment for all patients seeking help.",
      availability: "Monday - Thursday",
      specialInterests: ["Anxiety & Depression", "Substance Abuse Treatment", "Trauma Therapy"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Meet Our Providers</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Our experienced team of healthcare professionals is dedicated to providing you with 
            personalized, compassionate care. Get to know the doctors and specialists who will be 
            taking care of you and your family.
          </p>
        </div>
      </section>

      {/* Providers Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {providers.map((provider, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="p-8">
                  {/* Provider Header */}
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="text-6xl">{provider.image}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{provider.name}</h3>
                      <p className="text-lg text-blue-600 font-semibold mb-2">{provider.title}</p>
                      <p className="text-gray-600">
                        <span className="font-medium">{provider.experience}</span> of experience
                      </p>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {provider.specialties.map((specialty, specIndex) => (
                        <span 
                          key={specIndex}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">About</h4>
                    <p className="text-gray-700 leading-relaxed">{provider.bio}</p>
                  </div>

                  {/* Education */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Education & Credentials</h4>
                    <ul className="space-y-1">
                      {provider.education.map((edu, eduIndex) => (
                        <li key={eduIndex} className="text-gray-700 text-sm flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Additional Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Languages</h5>
                      <p className="text-gray-600 text-sm">{provider.languages.join(", ")}</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Availability</h5>
                      <p className="text-gray-600 text-sm">{provider.availability}</p>
                    </div>
                  </div>

                  {/* Special Interests */}
                  <div className="mt-4">
                    <h5 className="font-medium text-gray-900 mb-2">Special Interests</h5>
                    <p className="text-gray-600 text-sm">{provider.specialInterests.join(" • ")}</p>
                  </div>

                  {/* Action Button */}
                  <div className="mt-6">
                    <a
                      href="/contact"
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                    >
                      Schedule with {provider.name.split(" ")[1]}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Meet Your New Healthcare Team?</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule an appointment with one of our experienced providers today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-green-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Appointment
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Care Philosophy</h2>
          <p className="text-lg text-gray-600 mb-8">
            At MedConnect, we believe in personalized, patient-centered care. Our providers take the time 
            to listen, understand your concerns, and work with you to develop treatment plans that fit your 
            lifestyle and health goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-semibold text-gray-900 mb-2">Patient-Centered</h3>
              <p className="text-gray-600 text-sm">Your needs and preferences guide every decision we make about your care.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Evidence-Based</h3>
              <p className="text-gray-600 text-sm">We use the latest medical research and proven treatments to ensure the best outcomes.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Compassionate</h3>
              <p className="text-gray-600 text-sm">We treat every patient with kindness, respect, and understanding.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
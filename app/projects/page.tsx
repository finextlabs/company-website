export default function Projects() {
  const projects = [
    {
      title: "FinTech Banking Platform",
      category: "Financial Services",
      description: "A comprehensive digital banking solution serving over 500,000 active users with real-time transactions, advanced security, and seamless mobile experience.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      color: "blue",
      impact: ["500K+ Active Users", "99.9% Uptime", "2M+ Transactions/month"]
    },
    {
      title: "Healthcare Patient Portal",
      category: "Healthcare",
      description: "HIPAA-compliant patient management system enabling secure communication, appointment scheduling, and medical records access for 50+ clinics.",
      technologies: ["Next.js", "Python", "MongoDB", "Azure"],
      color: "purple",
      impact: ["50+ Clinics", "100K+ Patients", "HIPAA Certified"]
    },
    {
      title: "E-Commerce Marketplace",
      category: "Retail",
      description: "Multi-vendor marketplace platform with AI-powered recommendations, real-time inventory management, and integrated payment processing.",
      technologies: ["React Native", "Node.js", "Redis", "Stripe"],
      color: "green",
      impact: ["$10M+ GMV", "15K+ Products", "98% Customer Satisfaction"]
    },
    {
      title: "Smart IoT Dashboard",
      category: "IoT & Analytics",
      description: "Real-time monitoring and analytics dashboard for industrial IoT devices, processing millions of data points with predictive maintenance alerts.",
      technologies: ["React", "Python", "TimescaleDB", "Kubernetes"],
      color: "indigo",
      impact: ["1M+ Data Points/day", "40% Cost Reduction", "Real-time Analytics"]
    },
    {
      title: "AI Content Platform",
      category: "Media & Entertainment",
      description: "Content management platform with AI-powered recommendations, automated tagging, and multi-channel distribution for content creators.",
      technologies: ["Next.js", "TensorFlow", "PostgreSQL", "GCP"],
      color: "pink",
      impact: ["10M+ Content Views", "AI-Powered Search", "5+ Platforms"]
    },
    {
      title: "Logistics Tracking System",
      category: "Logistics",
      description: "End-to-end supply chain visibility platform with GPS tracking, route optimization, and automated delivery notifications.",
      technologies: ["React", "Node.js", "MongoDB", "Google Maps"],
      color: "orange",
      impact: ["5K+ Deliveries/day", "30% Faster Routing", "Real-time Tracking"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; hover: string }> = {
      blue: { bg: "from-blue-500 to-blue-600", text: "text-blue-600", hover: "hover:border-blue-600" },
      purple: { bg: "from-purple-500 to-purple-600", text: "text-purple-600", hover: "hover:border-purple-600" },
      green: { bg: "from-green-500 to-green-600", text: "text-green-600", hover: "hover:border-green-600" },
      indigo: { bg: "from-indigo-500 to-indigo-600", text: "text-indigo-600", hover: "hover:border-indigo-600" },
      pink: { bg: "from-pink-500 to-pink-600", text: "text-pink-600", hover: "hover:border-pink-600" },
      orange: { bg: "from-orange-500 to-orange-600", text: "text-orange-600", hover: "hover:border-orange-600" }
    };
    return colors[color] || colors.blue;
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into reality. Explore our portfolio of successful projects across various industries.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">150+</div>
              <div className="text-gray-600 mt-2">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">20+</div>
              <div className="text-gray-600 mt-2">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">98%</div>
              <div className="text-gray-600 mt-2">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">5M+</div>
              <div className="text-gray-600 mt-2">End Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const colors = getColorClasses(project.color);
              return (
                <div key={index} className={`group border-2 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 ${colors.hover}`}>
                  <div className="flex items-start justify-between mb-4">
                    <span className={`px-4 py-1 rounded-full text-sm font-semibold ${colors.text} bg-${project.color}-50`}>
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <div className="text-sm font-semibold text-gray-700 mb-3">Technologies Used:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <div className="text-sm font-semibold text-gray-700 mb-3">Key Achievements:</div>
                    <div className="grid grid-cols-3 gap-3">
                      {project.impact.map((stat, statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className={`text-sm font-bold ${colors.text}`}>{stat}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "FinextLabs delivered our banking platform ahead of schedule. Their attention to security and scalability was outstanding."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  JS
                </div>
                <div>
                  <div className="font-semibold">John Smith</div>
                  <div className="text-sm text-gray-500">CTO, FinTech Corp</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "The patient portal transformed how we interact with patients. Highly professional team with deep healthcare domain knowledge."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  SK
                </div>
                <div>
                  <div className="font-semibold">Sarah Kim</div>
                  <div className="text-sm text-gray-500">Director, MedCare</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "Our marketplace revenue grew 300% after launch. FinextLabs built a platform that scales beautifully."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  MP
                </div>
                <div>
                  <div className="font-semibold">Michael Park</div>
                  <div className="text-sm text-gray-500">CEO, ShopHub</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Let's discuss how we can help bring your project to life
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </main>
  );
}

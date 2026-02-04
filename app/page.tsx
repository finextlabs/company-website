import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
            🚀 Building the Future of Software
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Innovative Software
            <br />
            Solutions for Your Business
          </h1>
          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We transform ideas into powerful digital experiences. From web applications to mobile solutions, 
            we deliver cutting-edge technology that drives growth.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 border-2 border-gray-700 rounded-lg font-semibold text-gray-300 hover:border-blue-600 hover:text-blue-400 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-blue-400">150+</div>
              <div className="text-gray-500 mt-2">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400">98%</div>
              <div className="text-gray-500 mt-2">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400">50+</div>
              <div className="text-gray-500 mt-2">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Expertise</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive software development services tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-950 to-blue-900 border border-blue-800/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white text-2xl mb-6">
                💻
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Web Development</h3>
              <p className="text-gray-400 leading-relaxed">
                Custom web applications built with modern frameworks like React, Next.js, and Node.js
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-950 to-purple-900 border border-purple-800/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center text-white text-2xl mb-6">
                📱
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Mobile Apps</h3>
              <p className="text-gray-400 leading-relaxed">
                Native and cross-platform mobile applications for iOS and Android
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-950 to-indigo-900 border border-indigo-800/50 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl mb-6">
                ☁️
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Cloud Solutions</h3>
              <p className="text-gray-400 leading-relaxed">
                Scalable cloud infrastructure and deployment on AWS, Azure, and Google Cloud
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-950 to-pink-900 border border-pink-800/50 hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-pink-600 rounded-xl flex items-center justify-center text-white text-2xl mb-6">
                🎨
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">UI/UX Design</h3>
              <p className="text-gray-400 leading-relaxed">
                Beautiful, intuitive interfaces that delight users and drive engagement
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-green-950 to-green-900 border border-green-800/50 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center text-white text-2xl mb-6">
                🤖
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">AI & ML</h3>
              <p className="text-gray-400 leading-relaxed">
                Intelligent solutions powered by machine learning and artificial intelligence
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-950 to-orange-900 border border-orange-800/50 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center text-white text-2xl mb-6">
                🔒
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Security</h3>
              <p className="text-gray-400 leading-relaxed">
                Enterprise-grade security solutions to protect your data and users
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Why Choose FinextLabs?
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                We're not just developers - we're your technology partners committed to your success.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Expert Team</h3>
                    <p className="text-gray-400">
                      Experienced developers, designers, and project managers with proven track records
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Agile Process</h3>
                    <p className="text-gray-400">
                      Flexible development methodology ensuring quick iterations and timely delivery
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">24/7 Support</h3>
                    <p className="text-gray-400">
                      Round-the-clock support and maintenance to keep your systems running smoothly
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white border border-blue-500/30 shadow-xl shadow-blue-500/20">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  To empower businesses through innovative technology solutions that drive digital transformation 
                  and create lasting value.
                </p>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                  <div className="text-sm text-blue-100 mb-2">Trusted by leading companies</div>
                  <div className="flex gap-4 items-center">
                    <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                    <div className="text-sm">4.9/5 Rating</div>
                  </div>
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
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Let's discuss how we can help transform your ideas into reality
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}

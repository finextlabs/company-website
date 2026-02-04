import Link from "next/link";

export default function Services() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive software development services designed to accelerate your digital transformation 
            and drive business growth
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="group border-2 rounded-2xl p-8 hover:border-blue-600 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform">
                💻
              </div>
              <h2 className="text-2xl font-bold mb-4">Custom Software Development</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Tailored software solutions built from the ground up to match your unique business requirements. 
                We create scalable, maintainable applications using cutting-edge technologies.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Enterprise web applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Backend services & RESTful APIs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Database design & optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Microservices architecture</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="group border-2 rounded-2xl p-8 hover:border-purple-600 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform">
                📱
              </div>
              <h2 className="text-2xl font-bold mb-4">Mobile Application Development</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android. 
                Fast, responsive, and feature-rich applications.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>iOS & Android native apps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>React Native cross-platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>Progressive Web Apps (PWA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>App Store optimization & deployment</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="group border-2 rounded-2xl p-8 hover:border-indigo-600 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform">
                ☁️
              </div>
              <h2 className="text-2xl font-bold mb-4">Cloud Solutions & DevOps</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Modern cloud infrastructure and DevOps practices that ensure your applications are scalable, 
                reliable, and cost-effective across AWS, Azure, and Google Cloud.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">✓</span>
                  <span>Cloud architecture & migration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">✓</span>
                  <span>CI/CD pipeline automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">✓</span>
                  <span>Container orchestration (Kubernetes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">✓</span>
                  <span>Infrastructure as Code (Terraform)</span>
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="group border-2 rounded-2xl p-8 hover:border-pink-600 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform">
                🎨
              </div>
              <h2 className="text-2xl font-bold mb-4">UI/UX Design</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Beautiful, intuitive interfaces that prioritize user experience. We create designs that not only 
                look stunning but also drive engagement and conversions.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">✓</span>
                  <span>User research & persona development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">✓</span>
                  <span>Wireframing & prototyping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">✓</span>
                  <span>Visual design & branding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">✓</span>
                  <span>Usability testing & optimization</span>
                </li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="group border-2 rounded-2xl p-8 hover:border-green-600 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform">
                🤖
              </div>
              <h2 className="text-2xl font-bold mb-4">AI & Machine Learning</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Intelligent solutions powered by artificial intelligence and machine learning. From chatbots to 
                predictive analytics, we help you leverage AI for competitive advantage.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Natural Language Processing (NLP)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Computer Vision solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Predictive analytics & ML models</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>AI chatbots & virtual assistants</span>
                </li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="group border-2 rounded-2xl p-8 hover:border-orange-600 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform">
                🔧
              </div>
              <h2 className="text-2xl font-bold mb-4">Maintenance & Support</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Ongoing support and maintenance services to keep your applications running smoothly. We're here 
                to help you evolve and scale as your business grows.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>24/7 monitoring & support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Bug fixes & security patches</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Performance optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Feature enhancements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Technology Stack</h2>
            <p className="text-xl text-gray-600">We work with cutting-edge technologies and frameworks</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-2">⚛️</div>
              <div className="font-semibold">React / Next.js</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-2">📗</div>
              <div className="font-semibold">Node.js</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-2">🐍</div>
              <div className="font-semibold">Python</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-2">☁️</div>
              <div className="font-semibold">AWS / Azure</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-2">🗄️</div>
              <div className="font-semibold">PostgreSQL</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-2">🔥</div>
              <div className="font-semibold">MongoDB</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-2">🐳</div>
              <div className="font-semibold">Docker</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-2">☸️</div>
              <div className="font-semibold">Kubernetes</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Ready to transform your ideas into reality? Get in touch with our team today.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}

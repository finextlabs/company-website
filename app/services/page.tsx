export default function Services() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold">Services</h1>

      <p className="mt-6 text-lg text-gray-600 max-w-3xl">
        We help businesses design, build, and scale reliable software.
        From early ideas to production-ready systems, we focus on clarity,
        quality, and long-term maintainability.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {/* Service 1 */}
        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold">Custom Software Development</h2>
          <p className="mt-4 text-gray-600">
            Design and development of tailored software solutions that solve
            real business problems. We focus on clean architecture, performance,
            and security from day one.
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-600">
            <li>Web applications</li>
            <li>Backend services & APIs</li>
            <li>System integrations</li>
          </ul>
        </div>

        {/* Service 2 */}
        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold">API & Integration Solutions</h2>
          <p className="mt-4 text-gray-600">
            Secure, scalable APIs and integrations that connect systems,
            partners, and platforms reliably.
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-600">
            <li>REST & event-driven APIs</li>
            <li>Third-party integrations</li>
            <li>Authentication & authorization</li>
          </ul>
        </div>

        {/* Service 3 */}
        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold">Cloud & Platform Engineering</h2>
          <p className="mt-4 text-gray-600">
            Build and deploy systems that scale confidently using modern cloud
            platforms and best practices.
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-600">
            <li>Cloud-native architecture</li>
            <li>CI/CD pipelines</li>
            <li>Performance and reliability improvements</li>
          </ul>
        </div>

        {/* Service 4 */}
        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold">Consulting & Technical Advisory</h2>
          <p className="mt-4 text-gray-600">
            Practical guidance to help teams make better technical decisions,
            reduce risk, and move faster with confidence.
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-600">
            <li>Architecture reviews</li>
            <li>Code quality & best practices</li>
            <li>Security and compliance guidance</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

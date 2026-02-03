export default function Projects() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold">Projects</h1>

      <p className="mt-6 text-lg text-gray-600 max-w-3xl">
        A selection of projects where we helped teams deliver reliable,
        scalable software. Each engagement focused on solving real problems,
        improving system quality, and supporting long-term growth.
      </p>

      <div className="mt-12 space-y-10">
        {/* Project 1 */}
        <div className="border rounded-xl p-8">
          <h2 className="text-2xl font-semibold">
            Open Banking Platform Enhancements
          </h2>

          <p className="mt-4 text-gray-600 max-w-4xl">
            Contributed to the design and implementation of critical components
            in an open banking platform used by financial institutions. The work
            focused on performance, extensibility, and regulatory compliance.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="font-semibold">Problem</h3>
              <p className="text-gray-600 mt-2">
                Growing transaction volume and evolving regulatory requirements
                required the platform to be more extensible and performant.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Solution</h3>
              <p className="text-gray-600 mt-2">
                Designed modular extension points, optimized data access paths,
                and introduced clearer API contracts to support future growth.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Impact</h3>
              <p className="text-gray-600 mt-2">
                Improved response times, reduced integration friction, and
                enabled faster onboarding of new partners.
              </p>
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            Tech: Java, REST APIs, OAuth2, Open Banking standards
          </div>
        </div>

        {/* Project 2 */}
        <div className="border rounded-xl p-8">
          <h2 className="text-2xl font-semibold">
            Consent Management & Security Services
          </h2>

          <p className="mt-4 text-gray-600 max-w-4xl">
            Built and enhanced consent management services to securely handle
            user authorizations and access control across distributed systems.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="font-semibold">Problem</h3>
              <p className="text-gray-600 mt-2">
                Complex authorization flows and external integrations made
                consent handling difficult to maintain and extend.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Solution</h3>
              <p className="text-gray-600 mt-2">
                Introduced clear domain models, reusable validation logic, and
                well-defined integration boundaries.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Impact</h3>
              <p className="text-gray-600 mt-2">
                Increased system reliability, improved auditability, and
                simplified future feature development.
              </p>
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            Tech: Java, OAuth2, JWT, Microservices
          </div>
        </div>

        {/* Project 3 */}
        <div className="border rounded-xl p-8">
          <h2 className="text-2xl font-semibold">
            Internal Tools & Platform Automation
          </h2>

          <p className="mt-4 text-gray-600 max-w-4xl">
            Designed internal tools and automation pipelines to improve
            developer productivity and reduce operational overhead.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="font-semibold">Problem</h3>
              <p className="text-gray-600 mt-2">
                Manual processes and fragmented tooling slowed down development
                and increased the risk of errors.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Solution</h3>
              <p className="text-gray-600 mt-2">
                Automated workflows, standardized configurations, and improved
                visibility into system behavior.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Impact</h3>
              <p className="text-gray-600 mt-2">
                Faster release cycles, fewer operational issues, and improved
                developer experience.
              </p>
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            Tech: CI/CD, Cloud platforms, Automation tooling
          </div>
        </div>
      </div>
    </main>
  );
}

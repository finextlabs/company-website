export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          FinextLabs
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          We build modern, reliable software solutions for growing businesses.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/projects"
            className="px-6 py-3 bg-black text-white rounded-lg"
          >
            View Projects
          </a>

          <a
            href="/contact"
            className="px-6 py-3 border rounded-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}

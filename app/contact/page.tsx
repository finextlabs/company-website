export default function Contact() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold">Contact</h1>

      <p className="mt-6 text-lg text-gray-600 max-w-2xl">
        Have a project in mind or need help with an existing system?
        Reach out and let’s discuss how we can help.
      </p>

      <div className="mt-12 space-y-6">
        <div>
          <h2 className="text-lg font-semibold">Email</h2>
          <p className="text-gray-600">
            <a
              href="mailto:contact@finextlabs.com"
              className="underline"
            >
              contact@finextlabs.com
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">LinkedIn</h2>
          <p className="text-gray-600">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              LinkedIn Profile
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Working Hours</h2>
          <p className="text-gray-600">
            Monday – Friday, 9:00 AM – 6:00 PM (IST)
          </p>
        </div>
      </div>
    </main>
  );
}

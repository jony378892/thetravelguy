export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto p-6 my-20">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
        <p className="text-gray-600 mt-2">
          Have questions, suggestions, or just want to say hello? I’d love to
          hear from you.
        </p>
      </div>

      {/* Contact Form */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          />
        </div>

        <div className="md:col-span-2 flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
            Subject
          </label>
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>

        <div className="md:col-span-2 flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            placeholder="Write your message..."
            rows={6}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          ></textarea>
        </div>

        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            className="bg-secondary hover:bg-secondary/70 text-white px-6 py-2 rounded shadow font-semibold"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}

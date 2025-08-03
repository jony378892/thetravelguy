import CommonTitile from "@/components/CommonTitle";

export default function About() {
  return (
    <section className="custom-width mx-auto my-20">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <CommonTitile title="About Me" />
        <p className="text-lg text-gray-600 mt-5">
          Welcome to my corner of the internet — where stories come alive, one
          country at a time.
        </p>
      </div>

      {/* Who I Am Section */}
      <div className="max-w-4xl mx-auto mb-16 space-y-6">
        <h2 className="text-2xl font-semibold">Who I Am</h2>
        <p>
          Hey, I'm Jony — a travel enthusiast, adventure seeker, and storyteller
          with a passion for exploring the unknown. What started as a short
          backpacking trip years ago turned into a lifelong obsession with
          discovering cultures, capturing moments, and connecting with people
          across the globe.
        </p>
        <p>
          I've journeyed through dense jungles, hiked remote mountains, and
          wandered ancient cities — each step teaching me something new about
          the world and myself.
        </p>
      </div>

      {/* Life Before Travel Section */}
      <div className="max-w-4xl mx-auto mb-16 space-y-6">
        <h2 className="text-2xl font-semibold">Life Before Travel</h2>
        <p>
          Before all the flights, border crossings, and sunrise hikes, I lived a
          fairly ordinary life. I studied computer science and worked a
          traditional office job, spending hours in front of a screen. While I
          was grateful for the stability, I often found myself dreaming of
          distant lands and freedom.
        </p>
        <p>
          In 2019, I finally booked a one-way ticket and never looked back. That
          moment changed everything.
        </p>
      </div>

      {/* What This Blog Is About Section */}
      <div className="max-w-4xl mx-auto mb-16 space-y-6">
        <h2 className="text-2xl font-semibold">What This Blog Is About</h2>
        <p>
          This blog isn't just about travel photos or lists of “top 10 places.”
          It's about the deeper journey — the experiences that shape us, the
          people we meet, and the hidden gems that most tourists miss.
        </p>
        <p>
          You'll find practical guides, honest stories, and personal insights
          from my adventures. Whether you're planning your first trip or you're
          a seasoned traveler, my goal is to help you explore smarter, deeper,
          and with more meaning.
        </p>
      </div>

      {/* Favorite Moments Section */}
      <div className="max-w-4xl mx-auto mb-16 space-y-6">
        <h2 className="text-2xl font-semibold">A Few Favorite Moments</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Hiking through the Andes to reach Machu Picchu at sunrise</li>
          <li>Camping under the stars in the Wadi Rum desert in Jordan</li>
          <li>Learning to cook pho with a local family in Vietnam</li>
          <li>Watching the northern lights dance in Iceland</li>
          <li>Riding scooters through rice terraces in Bali</li>
        </ul>
      </div>

      {/* Final Message Section */}
      <div className="max-w-4xl mx-auto mb-10 space-y-6">
        <h2 className="text-2xl font-semibold">Let's Stay Connected</h2>
        <p>
          Thank you for being here. Whether you're dreaming about your next trip
          or just love to explore from your screen, I'm honored to share this
          journey with you.
        </p>
        <p>
          If you'd like to reach out, collaborate, or just say hello, feel free
          to{" "}
          <a
            href="/contact"
            className="text-blue-600 underline hover:text-blue-800"
          >
            contact me
          </a>
          .
        </p>
      </div>

      {/* Footer Quote */}
      <div className="text-center text-gray-500 text-sm italic">
        “Travel isn't always pretty. It isn't always comfortable. But it opens
        your mind, it opens your heart, and it changes you forever.”
      </div>
    </section>
  );
}

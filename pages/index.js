export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">The Gain Maker</h1>
          <nav className="space-x-4">
            <a href="/" className="text-gray-700 hover:text-indigo-600 font-medium">
              Home
            </a>
            <a href="/summaries" className="text-gray-700 hover:text-indigo-600 font-medium">
              Summaries
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Book Wisdom, Distilled for Growth
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6 text-lg">
          Get practical, powerful insights from the world’s best books — in minutes, not hours.
        </p>
        <a
          href="/summaries"
          className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-xl text-lg font-medium hover:bg-indigo-700 transition"
        >
          Browse Summaries
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} The Gain Maker. All rights reserved.
      </footer>
    </div>
  );
}

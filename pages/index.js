export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">TheGainMaker</h1>
          <nav className="space-x-4">
            <a href="/" className="text-gray-700 hover:text-indigo-600 font-medium">
              Home
            </a>
            <a href="/summaries" className="text-gray-700 hover:text-indigo-600 font-medium">
              Summaries
            </a>
            <a href="/wellness" className="text-gray-700 hover:text-indigo-600 font-medium">
              Health & Wellness
            </a>
            <a href="/investing" className="text-gray-700 hover:text-indigo-600 font-medium">
              Investing
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Unlock Your Potential with TheGainMaker
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6 text-lg">
          A curated collection of insights to help you grow stronger, smarter, and wealthier — all in one place.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
          <a
            href="/summaries"
            className="bg-indigo-600 text-white py-2 px-6 rounded-xl font-medium hover:bg-indigo-700 transition"
          >
            Book Summaries
          </a>
          <a
            href="/wellness"
            className="bg-green-600 text-white py-2 px-6 rounded-xl font-medium hover:bg-green-700 transition"
          >
            Health & Wellness
          </a>
          <a
            href="/investing"
            className="bg-yellow-600 text-white py-2 px-6 rounded-xl font-medium hover:bg-yellow-700 transition"
          >
            Investment Strategies
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} TheGainMaker. All rights reserved.
      </footer>
    </div>
  );
}

export default function Summaries() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">TheGainMaker</h1>
          <nav className="space-x-4">
            <a href="/" className="text-gray-700 hover:text-indigo-600 font-medium">Home</a>
            <a href="/summaries" className="text-indigo-600 font-bold">Summaries</a>
            <a href="/wellness" className="text-gray-700 hover:text-indigo-600 font-medium">Health & Wellness</a>
            <a href="/investing" className="text-gray-700 hover:text-indigo-600 font-medium">Investing</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Book Summaries</h2>
        <p className="text-gray-600 mb-10 max-w-2xl">
          Discover key takeaways from powerful books that help you grow in mindset, habits, leadership, finance, and more.
        </p>

        {/* Sample Summaries List */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-2xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Atomic Habits</h3>
            <p className="text-gray-600 mb-4">
              A practical guide to building good habits and breaking bad ones by James Clear.
            </p>
            <a href="#" className="text-indigo-500 hover:underline font-medium">Read Summary →</a>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 rounded-2xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">The Psychology of Money</h3>
            <p className="text-gray-600 mb-4">
              Timeless lessons on wealth, greed, and happiness by Morgan Housel.
            </p>
            <a href="#" className="text-indigo-500 hover:underline font-medium">Read Summary →</a>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 rounded-2xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Deep Work</h3>
            <p className="text-gray-600 mb-4">
              Learn how to focus without distraction in a world of noise, by Cal Newport.
            </p>
            <a href="#" className="text-indigo-500 hover:underline font-medium">Read Summary →</a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} TheGainMaker. All rights reserved.
      </footer>
    </div>
  );
}

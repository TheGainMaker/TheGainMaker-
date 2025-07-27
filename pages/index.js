export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-indigo-700 tracking-tight">TheGainMaker</h1>
          <nav className="space-x-4 text-sm font-medium">
            <a href="#" className="text-gray-600 hover:text-indigo-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">Summaries</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">About</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-20 px-4 bg-gradient-to-b from-indigo-50 to-white">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Smarter Reading. Stronger Living.
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Clear, concise book summaries to help you gain insight, build habits, and fuel your life.
        </p>
        <a
          href="#"
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
        >
          Browse Summaries
        </a>
      </section>

      {/* Featured Summary */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-xl font-semibold text-indigo-600 mb-4">🔥 Featured Summary</h3>
        <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition">
          <h4 className="text-2xl font-bold mb-2">Atomic Habits by James Clear</h4>
          <p className="text-gray-700 mb-4">
            Learn how small, consistent changes lead to big results. This summary gives you tools to build lasting habits that stick.
          </p>
          <a href="#" className="text-indigo-600 font-medium hover:underline">Read the Summary →</a>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-semibold text-indigo-600 mb-6">🆕 Latest Summaries</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-5 rounded-lg border hover:shadow-md transition">
                <h4 className="text-lg font-semibold mb-1">Book Title #{i}</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Key takeaways and insights from Book #{i}.
                </p>
                <a href="#" className="text-indigo-500 text-sm font-medium hover:underline">Read Summary →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-10 border-t mt-12">
        © {new Date().getFullYear()} TheGainMaker. Built for clarity and action.
      </footer>
    </div>
  );
}

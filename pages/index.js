export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-indigo-600">TheGainMaker</h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Summaries</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">About</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h2 className="text-5xl font-extrabold text-indigo-700 mb-4">Upgrade Your Mind</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Actionable book summaries that help you live smarter, stronger, and with more energy.
        </p>
      </section>

      {/* Featured Summary */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h3 className="text-2xl font-semibold text-indigo-600 mb-6">📌 Featured Summary</h3>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h4 className="text-xl font-bold mb-2">Atomic Habits by James Clear</h4>
          <p className="text-gray-600 mb-4">
            Tiny changes, remarkable results. Build better habits and ditch the bad ones.
          </p>
          <a href="#" className="text-indigo-600 font-medium hover:underline">Read more →</a>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h3 className="text-2xl font-semibold text-indigo-600 mb-6">📚 Latest Summaries</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
              <h4 className="text-lg font-semibold">Book Title #{i}</h4>
              <p className="text-gray-600 mt-2">Quick summary and key insights from Book #{i}.</p>
              <a href="#" className="text-indigo-500 mt-3 inline-block hover:underline">Read Summary →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-8 border-t mt-16">
        © {new Date().getFullYear()} TheGainMaker. Read better. Live better.
      </footer>
    </div>
  );
}

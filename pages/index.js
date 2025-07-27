export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-indigo-600">TheGainMaker</h1>
          <nav>
            <a href="#" className="text-gray-700 hover:text-indigo-600 mx-2">Home</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 mx-2">Summaries</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 mx-2">About</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Level Up Your Mind & Life</h2>
          <p className="text-lg text-gray-600">
            Simple, actionable book summaries on personal growth, health, and performance.
          </p>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-indigo-600">📌 Featured Summary</h3>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-bold mb-2">Atomic Habits by James Clear</h4>
            <p className="text-gray-600 mb-4">
              A practical guide to building better habits and breaking bad ones, using the science of behavior change.
            </p>
            <a href="#" className="text-indigo-600 font-medium hover:underline">Read more →</a>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-6 text-indigo-600">📚 Latest Summaries</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
                <h4 className="text-lg font-semibold">Book Title #{i}</h4>
                <p className="text-gray-600 mt-2">
                  A short, powerful summary of Book #{i} with practical takeaways.
                </p>
                <a href="#" className="text-indigo-500 mt-3 inline-block hover:underline">Read Summary →</a>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="text-center text-gray-500 py-6 border-t mt-12">
        © {new Date().getFullYear()} TheGainMaker. Built for growth.
      </footer>
    </div>
  );
}

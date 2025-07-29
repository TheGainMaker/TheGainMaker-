export default function Summaries() {
  const summaries = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      slug: "atomic-habits",
      description:
        "Learn how tiny changes make a big impact. Master the habit loop, identity-based habits, and systems that work.",
    },
    {
      title: "The Power of Now",
      author: "Eckhart Tolle",
      slug: "the-power-of-now",
      description:
        "A guide to living fully in the present moment. Break free from overthinking and find peace in stillness.",
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      slug: "deep-work",
      description:
        "Train your focus and eliminate distractions. Discover how to do meaningful work in a distracted world.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-indigo-700">Book Summaries</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {summaries.map((summary) => (
          <div
            key={summary.slug}
            className="bg-white border p-5 rounded-xl hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">{summary.title}</h2>
            <p className="text-gray-500 text-sm mb-2">by {summary.author}</p>
            <p className="text-gray-700 text-sm mb-3">{summary.description}</p>
            <a
              href={`/summaries/${summary.slug}`}
              className="text-indigo-600 text-sm font-medium hover:underline"
            >
              Read Summary →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

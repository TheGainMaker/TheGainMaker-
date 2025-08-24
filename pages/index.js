import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-transparent">
      <section className="text-center py-16">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Unlock Your Potential with <span className="text-indigo-600">TheGainMaker</span>
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Insights to help you grow stronger, smarter, and wealthier — all in one place.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/summaries"
            className="px-6 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Book Summaries
          </Link>
          <Link
            href="/health-and-wellness"
            className="px-6 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700"
          >
            Health &amp; Wellness
          </Link>
          <Link
            href="/investing"
            className="px-6 py-2 rounded-xl bg-yellow-600 text-white hover:bg-yellow-700"
          >
            Investing
          </Link>
        </div>
      </section>
    </div>
  );
}

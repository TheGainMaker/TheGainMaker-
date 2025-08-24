import Link from "next/link";

export default function SummariesIndex() {
  return (
    <div className="bg-transparent">
      <h1 className="text-3xl font-bold text-orange-700 mb-6">Book Summaries</h1>
      <p className="text-gray-700 mb-6">
        Condensed, actionable lessons from impactful books.
      </p>

      <ul className="space-y-3">
        <li>
          <Link href="/summaries/atomic-habits" className="text-indigo-600 hover:underline">
            Atomic Habits — James Clear
          </Link>
        </li>
        {/* Add more links here */}
      </ul>
    </div>
  );
}

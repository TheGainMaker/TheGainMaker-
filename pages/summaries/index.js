import Link from "next/link";

export default function SummariesIndex() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Book Summaries</h1>

      <ul className="list-disc list-inside space-y-4">
        <li>
          <Link href="/summaries/atomic-habits">Atomic Habits</Link>
          <Link href="/summaries/atomic-habits">Atomic Habits</Link>
          <li><Link href="/summaries/deep-work">Deep Work by Cal Newport</Link></li>
        </li>
        {/* You can add more summaries here later */}
      </ul>
    </div>
  );
}

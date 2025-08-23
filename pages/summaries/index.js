/ pages/investing/index.js
import NavBar from "../../components/NavBar";


export default function Summaries() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-orange-700 mb-6">Book Summaries</h1>
        <p className="text-lg text-gray-700 mb-4">
          Condensed lessons from impactful books on habits, health, and personal growth.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li><strong>Atomic Habits</strong> – How small changes compound into massive results</li>
          <li><strong>The Daily Stoic</strong> – Timeless wisdom for modern resilience</li>
          <li><strong>Outlive</strong> – Peter Attia’s strategies for healthspan and longevity</li>
        </ul>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function HealthWellnessIndex() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Health & Wellness</h1>
      <ul className="list-disc list-inside space-y-4">
        <li>
          <Link href="/health-and-wellness/benefits-of-resistance-training" className="text-blue-600 hover:underline">
            The Benefits of Resistance Training
          </Link>
        </li>
        {/* Add more health & wellness articles here */}
      </ul>
    </div>
  );
}

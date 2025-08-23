import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Welcome to The Gain Maker
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Explore articles on health, wellness, investing, and book summaries.
      </p>
      <nav className="flex space-x-6">
        <Link href="/health-and-wellness" className="text-blue-600 hover:underline">
          Health & Wellness
        </Link>
        <Link href="/investing" className="text-blue-600 hover:underline">
          Investing
        </Link>
        <Link href="/summaries" className="text-blue-600 hover:underline">
          Summaries
        </Link>
      </nav>
    </div>
  );
}

// components/NavBar.js
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <nav className="max-w-5xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-extrabold text-indigo-600">
            TheGainMaker
          </Link>

          <ul className="flex items-center gap-6 text-sm">
            <li>
              <Link href="/" className="text-gray-700 hover:text-indigo-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/summaries" className="text-gray-700 hover:text-indigo-600">
                Summaries
              </Link>
            </li>
            <li>
              <Link href="/health-and-wellness" className="text-gray-700 hover:text-indigo-600">
                Health &amp; Wellness
              </Link>
            </li>
            <li>
              <Link href="/investing" className="text-gray-700 hover:text-indigo-600">
                Investing
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

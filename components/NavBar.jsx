// components/NavBar.jsx
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Site Name */}
        <Link href="/" className="text-white text-xl font-bold tracking-wide">
          TheGainMaker
        </Link>

        {/* Links Wrapper */}
        <div className="navbar-links flex items-center space-x-6 md:space-x-10 text-white font-medium">
          <Link href="/" className="hover:text-gray-200 transition">
            Home
          </Link>
          <Link href="/summaries" className="hover:text-gray-200 transition">
            Summaries
          </Link>
          <Link href="/health-and-wellness" className="hover:text-gray-200 transition">
            Health &amp; Wellness
          </Link>
          <Link href="/investing" className="hover:text-gray-200 transition">
            Investing
          </Link>
        </div>
      </div>
    </nav>
  );
}

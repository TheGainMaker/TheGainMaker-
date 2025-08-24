"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Brand */}
          <Link href="/" className="text-2xl font-extrabold text-indigo-600">
            TheGainMaker
          </Link>

          {/* Links */}
          <div className="flex items-center space-x-6 md:space-x-10 text-gray-700 font-medium">
            <Link className="px-2 py-1 hover:text-indigo-600" href="/">Home</Link>
            <Link className="px-2 py-1 hover:text-indigo-600" href="/summaries">Summaries</Link>
            <Link className="px-2 py-1 hover:text-indigo-600" href="/health-and-wellness">
              Health &amp; Wellness
            </Link>
            <Link className="px-2 py-1 hover:text-indigo-600" href="/investing">
              Investing
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

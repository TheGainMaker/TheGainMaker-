"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          TheGainMaker
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/summaries">Summaries</Link>
          <Link href="/health-wellness">Health & Wellness</Link>
          <Link href="/investment-strategy">Investing</Link>
        </div>
      </div>
    </nav>
  );
}

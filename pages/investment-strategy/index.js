// pages/investing/index.js
import NavBar from "../../components/NavBar";

export default function Investing() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <NavBar />

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-700 mb-6">Investing</h1>
        <p className="text-lg text-gray-700 mb-4">
          Explore strategies to grow wealth, manage risk, and understand how markets work.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">Core Principles</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Diversification reduces risk.</li>
          <li>Compounding requires patience and consistency.</li>
          <li>Asset allocation should match goals and risk tolerance.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">Starter Topics</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Index funds vs. active funds</li>
          <li>Dollar-cost averaging</li>
          <li>Rebalancing and tax efficiency</li>
        </ul>
      </div>
    </div>
  );
}

// pages/investing/index.js
import NavBar from "../../components/NavBar";

export default function Investing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-purple-700 mb-6">Investing</h1>
        <p className="text-lg text-gray-700 mb-4">
          Explore strategies to grow wealth, manage risk, and understand how markets work.
        </p>
      </main>
    </div>
  );
}

import NavBar from "../../components/NavBar";

export default function InvestmentStrategy() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <NavBar />

      <h1>Investment Strategy</h1>
      <p>
        Smart investing balances risk, reward, and time horizon. 
        This section covers principles for building wealth sustainably.
      </p>

      <h2>Core Principles</h2>
      <ul>
        <li>Diversification reduces risk.</li>
        <li>Compounding requires patience and consistency.</li>
        <li>Asset allocation should reflect your goals and risk tolerance.</li>
      </ul>
    </div>
  );
}

// components/NavBar.js

export default function NavBar() {
  return (
    <nav style={{
      padding: "1rem",
      background: "#f4f4f4",
      borderBottom: "1px solid #ddd",
      marginBottom: "2rem"
    }}>
      <a href="/" style={{ marginRight: "1rem" }}>Home</a>
      <a href="/summaries/atomic-habits" style={{ marginRight: "1rem" }}>Book Summaries</a>
      <a href="/health-and-wellness/resistance-training" style={{ marginRight: "1rem" }}>Health & Wellness</a>
      <a href="/investment-strategy">Investment Strategy</a>
    </nav>
  );
}

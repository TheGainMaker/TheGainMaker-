import NavBar from "../../components/NavBar";

export default function AtomicHabitsSummary() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <NavBar />

      <h1>Atomic Habits – Summary</h1>
      <p>
        <strong>Atomic Habits</strong> by James Clear explores how small, 
        consistent actions compound into massive life changes. 
      </p>

      <h2>Key Ideas</h2>
      <ul>
        <li>Habits are the compound interest of self-improvement.</li>
        <li>Focus on systems, not just goals.</li>
        <li>Identity-based habits create lasting change.</li>
      </ul>
    </div>
  );
}

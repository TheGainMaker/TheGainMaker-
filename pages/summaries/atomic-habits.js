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




export default function AtomicHabitsSummary() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Atomic Habits by James Clear</h1>

      <p className="mb-4">
        <em>Atomic Habits</em> by James Clear explores the power of small, consistent habits and how they can compound over time to deliver extraordinary results. The book breaks down the science of habit formation and offers a clear framework for building good habits and breaking bad ones.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Key Concepts</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Atomic Habits:</strong> Tiny changes that are easy to make but deliver huge results when compounded over time.</li>
        <li><strong>The Compound Effect:</strong> Habits are the interest earned on your behavior—small improvements accumulate into meaningful change.</li>
        <li><strong>Focus on Systems:</strong> Goals are useful, but systems (the processes behind your habits) are what truly drive progress.</li>
        <li><strong>Identity-Based Habits:</strong> The most effective way to change behavior is to focus on who you want to become, not what you want to achieve.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">The Four Laws of Behavior Change</h2>
      <p className="mb-4">Clear's framework for creating good habits and breaking bad ones is structured around four laws:</p>

      <ol className="list-decimal list-inside space-y-4">
        <li>
          <strong>Make It Obvious:</strong>
          <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
            <li>Use habit stacking: pair a new habit with a current habit.</li>
            <li>Design your environment to make cues for good habits visible.</li>
            <li>Use implementation intentions: "I will [behavior] at [time] in [location]."</li>
          </ul>
        </li>

        <li>
          <strong>Make It Attractive:</strong>
          <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
            <li>Use temptation bundling: pair an action you want to do with one you need to do.</li>
            <li>Join groups where the desired behavior is the norm.</li>
          </ul>
        </li>

        <li>
          <strong>Make It Easy:</strong>
          <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
            <li>Reduce friction: decrease the number of steps between you and the good behavior.</li>
            <li>Use the two-minute rule: scale down your habits to a version that takes two minutes to start.</li>
            <li>Automate good habits when possible (e.g., auto-saving money).</li>
          </ul>
        </li>

        <li>
          <strong>Make It Satisfying:</strong>
          <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
            <li>Use reinforcement: reward yourself immediately after completing a habit.</li>
            <li>Track your habits visually to build momentum.</li>
            <li>Don’t break the chain: aim for consistency, not perfection.</li>
          </ul>
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-3">How to Break a Bad Habit</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Make it Invisible:</strong> Remove cues that trigger the habit.</li>
        <li><strong>Make it Unattractive:</strong> Reframe your mindset around the habit and focus on the negative outcomes.</li>
        <li><strong>Make it Difficult:</strong> Increase friction between you and the bad behavior.</li>
        <li><strong>Make it Unsatisfying:</strong> Create consequences or accountability for falling into the bad habit.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Other Notable Insights</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Environment is stronger than motivation:</strong> Shape your environment to naturally support good habits.</li>
        <li><strong>Tracking matters:</strong> Visual cues of progress are motivating (e.g., checklists, streaks).</li>
        <li><strong>Habit contracts:</strong> Public commitments and accountability can strengthen commitment.</li>
        <li><strong>Plateau of latent potential:</strong> Results are often delayed; persistence is key.</li>
        <li><strong>The Goldilocks Rule:</strong> Stay in the sweet spot—habits should be challenging but not overwhelming.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Actionable Tips</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Write down identity-based goals: e.g., "I’m the kind of person who never misses workouts."</li>
        <li>Redesign your space so that it naturally nudges you toward good habits.</li>
        <li>Start with ridiculously small actions and let momentum build over time.</li>
        <li>Use habit tracking tools or apps to visually reinforce your progress.</li>
        <li>Reframe failure as feedback, not a personal flaw.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Final Takeaway</h2>
      <p className="mb-8">
        Tiny changes, when applied consistently and strategically, lead to massive transformations. <em>Atomic Habits</em> empowers readers to take control of their habits by focusing on identity, environment, and systems—rather than relying on willpower or motivation alone.
      </p>
    </div>
  );
}

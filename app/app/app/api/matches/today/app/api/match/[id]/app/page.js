async function getTodayMatches() {
  const res = await fetch("/api/matches/today", { cache: "no-store" });
  if (!res.ok) return [];
  const data = await res.json();
  return Array.isArray(data) ? data : data.data || data.matches || [];
}

export default async function Home() {
  const matches = await getTodayMatches();

  return (
    <main style={{ padding: 24, color: "#fff", background: "#0f1711", minHeight: "100vh", fontFamily: "system-ui, sans-serif" }}>
      <h1>MatchDesk</h1>
      <p>Live football scores, stats, and match analysis.</p>

      <h2 style={{ marginTop: 32 }}>Today’s matches</h2>
      <ul>
        {matches.length ? (
          matches.map((match, index) => (
            <li key={match.id || index}>
              {match.home_team?.name || match.home_team || "Home"} vs {match.away_team?.name || match.away_team || "Away"}
            </li>
          ))
        ) : (
          <li>No matches found.</li>
        )}
      </ul>
    </main>
  );
}

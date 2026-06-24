export const metadata = {
  title: "MatchDesk",
  description: "Live football scores, stats, and match analysis.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#0f1711", color: "#fff", fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}

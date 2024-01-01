export const metadata = {
  title: "Next.js",
  description: "Parallel Routes",
};

export default function RootLayout({
  children,analytics, team
}: {
  children: React.ReactNode;
  analytics: React.ReactNode
  team: React.ReactNode
}) {
  return (
    <html lang="en" style={{ backgroundColor: "green", color: "white" }}>
      <body>
        {children}<br/>
        {analytics}<br/>
        {team}
        </body>
    </html>
  );
}

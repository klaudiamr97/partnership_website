import '../styles/globals.css';

export const metadata = {
  title: 'Digivate <> Artichoke',
  description: 'A partnership offer from Digivate to Artichoke',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

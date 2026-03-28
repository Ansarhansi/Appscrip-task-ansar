import "./globals.css";

export const metadata = {
  title: "Appscrip Store",
  description: "Discover our premium products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
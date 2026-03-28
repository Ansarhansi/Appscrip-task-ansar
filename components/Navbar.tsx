import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <h1 className="logo">Appscrip</h1>

      <nav>
        <Link href="/">Home</Link>
        <Link href="/">Products</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}

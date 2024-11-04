import Link from 'next/link';

const Header = () => (
  <header className="bg-blue-600 text-white p-4">
    <nav className="flex justify-between">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <ul className="flex space-x-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;


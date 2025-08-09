import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-center space-x-6">
      <Link href="/" className="text-gray-700 hover:text-blue-500">
        Home
      </Link>
      <Link href="/blog" className="text-gray-700 hover:text-blue-500">
        Blog
      </Link>
      <Link href="/about" className="text-gray-700 hover:text-blue-500">
        About
      </Link>
    </nav>
  );
}

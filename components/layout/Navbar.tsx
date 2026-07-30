export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          Accredian
        </div>

        {/* Navigation */}
        <ul className="hidden gap-8 font-medium text-gray-700 md:flex">
          <li className="cursor-pointer hover:text-blue-600">Home</li>
          <li className="cursor-pointer hover:text-blue-600">Programs</li>
          <li className="cursor-pointer hover:text-blue-600">Refer & Earn</li>
          <li className="cursor-pointer hover:text-blue-600">Resources</li>
          <li className="cursor-pointer hover:text-blue-600">About</li>
        </ul>

        {/* CTA */}
        <button className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700">
          Login
        </button>
      </nav>
    </header>
  );
}
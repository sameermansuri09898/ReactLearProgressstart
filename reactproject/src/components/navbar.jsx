import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="text-xl font-bold text-blue-600">
            MyApp
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">
              Contact
            </a>
          </div>

          {/* Button */}
          <Link to="/login">
          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Login
            </button>
          </div>
          </Link>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button className="text-gray-700 focus:outline-none">
              ☰
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
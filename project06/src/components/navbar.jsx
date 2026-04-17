import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const menuItems = ["Home", "About", "Cars", "Contact"];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
            CarRental
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setActive(item)}
                className={`transition cursor-pointer ${
                  active === item
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700"
                } hover:text-blue-600`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Button */}
          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <span className="text-2xl">☰</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3 shadow">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => {
                setActive(item);
                setIsOpen(false);
              }}
              className={`block ${
                active === item
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700"
              }`}
            >
              {item}
            </a>
          ))}

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
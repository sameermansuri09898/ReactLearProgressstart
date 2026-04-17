export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">

        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold text-white">CarRental</h2>
          <p className="mt-3 text-sm">
            Premium car rental service with affordable pricing and easy booking.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Cars</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <p className="mt-3 text-sm">Email: support@carrental.com</p>
          <p className="text-sm">Phone: +91 9876543210</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © 2026 CarRental. All rights reserved.
      </div>
    </footer>
  );
}
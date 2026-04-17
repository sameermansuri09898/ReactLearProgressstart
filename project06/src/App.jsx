import Navbar from "./components/navbar";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />

      {/* HERO */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
          
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Rent Your Dream Car <br />
              <span className="text-blue-600">Anytime, Anywhere</span>
            </h1>

            <p className="mt-4 text-gray-600">
              Premium cars at affordable prices with easy booking.
            </p>

            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg">
              Explore Cars
            </button>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
              className="rounded-xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* CARS */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold">Popular Cars</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10 px-4 max-w-7xl mx-auto">
          {["BMW", "Audi", "Mercedes"].map((car, i) => (
            <div key={i} className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1549924231-f129b911e442"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{car}</h3>
                <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES COMPONENT */}
      <Features />

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">Ready to Ride?</h2>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg">
          Get Started
        </button>
      </section>

      {/* FOOTER COMPONENT */}
      <Footer />
    </div>
  );
}
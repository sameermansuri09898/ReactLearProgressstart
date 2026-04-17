export default function Features() {
  const features = [
    {
      title: "Affordable Prices",
      desc: "Best prices in the market with no hidden charges.",
    },
    {
      title: "24/7 Support",
      desc: "Our team is always ready to assist you anytime.",
    },
    {
      title: "Easy Booking",
      desc: "Book your car in just a few clicks.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        <h2 className="text-3xl font-bold text-gray-800">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {features.map((item, i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-500 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
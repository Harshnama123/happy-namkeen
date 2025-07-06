import { FaStar } from "react-icons/fa";

const sweets = [
  { name: "Standard Barfi", price: 340 },
  { name: "Coconut Barfi", price: 300 },
  { name: "Milkcake", price: 340 },
  { name: "Mava Roll Small", price: 380 },
  { name: "Mava Roll Big", price: 380},
  { name: "Brown Peda", price: 340 },
  { name: "White Peda", price: 300 },
  { name: "Gulab Jamun", price: 200 },
  { name: "Mithi Nukti", price: 140 },
];

export default function Sweets() {
  return (
    <section className="py-16 px-4 bg-pink-50/60 rounded-3xl shadow-xl max-w-6xl mx-auto animate-fade-in" id="sweets">
      <h2 className="text-4xl font-extrabold text-pink-700 mb-2 text-center tracking-tight flex items-center justify-center gap-2">
        Sweets <FaStar className="text-yellow-400" />
      </h2>
      <p className="mb-8 text-gray-700 text-center animate-fade-in delay-100">Indulge in our delicious, fresh sweets made with love!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {sweets.map((item) => (
          <div key={item.name} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-pink-100 hover:scale-105 hover:shadow-2xl transition-transform group animate-fade-in">
            <div className="w-20 h-20 bg-pink-100 border-2 border-dashed border-pink-300 rounded-full mb-2 flex items-center justify-center relative">
              <FaStar className="text-yellow-400 text-2xl" />

            </div>
            <div className="text-lg font-semibold text-pink-800 group-hover:text-pink-600 transition-colors">{item.name}</div>
            <div className="text-sm text-gray-600">₹{item.price}/kg</div>
          </div>
        ))}
      </div>
    </section>
  );
}

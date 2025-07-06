import { FaFireAlt, FaLeaf } from "react-icons/fa";

const namkeen = [
  { name: "Long Sev", price: 220, spiciness: "Spicy" },
  { name: "Papdi Mixture", price: 220, spiciness: "Medium Spicy" },
  { name: "Cornflakes Mixture", price: 220, spiciness: "Very Spicy", extraSpicy: true },
 
  { name: "Light Masala Mixture", price: 220 , spiciness: "less spicy"},
  { name: "Khatta Meetha Mixture", price: 220 },
  { name: "Papdi Normal", price: 220 },
  { name: "Papdi Spicy", price: 220, spiciness: "Spicy" },
  { name: "Special Kadke Sev", price: 220, spiciness: "Spicy" },
  { name: "Barik Sev", price: 220 , spiciness: "Less Spicy" },
  { name: "Ratlami Sev", price: 220, spiciness: "Medium Spicy" },
  { name: "Lahsun Sev", price: 220, spiciness: "Spicy" },
  { name: "Hing Mixture", price: 240, spiciness: "Spicy" },
    { name: "Barki Sev + spicy nukti", price: 240, spiciness: " less Spicy" },
    { name: "spicy nukti", price: 240, spiciness: "Spicy" },
    { name: "rayta nukti", price: 240, spiciness: "phiki nukti" },
];


const snacks = [
  { name: "Kachori", price: 10 },
  { name: "Samosa", price: 10 },
];

export default function Products() {
  return (
    <section className="py-16 px-4 bg-yellow-50/60" id="products">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-orange-700 mb-2 text-center tracking-tight animate-fade-in">Our Namkeen & Snacks</h2>
        <p className="mb-8 text-gray-700 text-center animate-fade-in delay-100">Explore our wide range of Namkeen and Hot Snacks!</p>
        <section className="py-16 px-4 bg-yellow-50/60 rounded-3xl shadow-xl w-full animate-fade-in mb-12" id="namkeen">
          <h2 className="text-4xl font-extrabold text-orange-700 mb-2 text-center tracking-tight flex items-center justify-center gap-2">
            Namkeen <FaLeaf className="text-green-500" />
          </h2>
          <p className="mb-8 text-gray-700 text-center animate-fade-in delay-100">Crispy, spicy, and savory delights for every mood! <span className='text-sm text-gray-500'>(₹220/kg unless mentioned)</span></p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {namkeen.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-yellow-100 hover:scale-105 hover:shadow-2xl transition-transform group animate-fade-in">
                <div className="w-20 h-20 bg-yellow-100 border-2 border-dashed border-orange-300 rounded-full mb-2 flex items-center justify-center relative">
                  {item.spiciness && <FaFireAlt className="absolute -top-2 -right-2 text-red-500 text-xl animate-pulse" title="Spicy" />}
                  {item.extraSpicy && <FaFireAlt className="absolute -top-2 -left-2 text-red-500 text-xl animate-pulse" title="Extra Spicy" />}
                </div>
                <div className="text-lg font-semibold text-orange-800 group-hover:text-orange-600 transition-colors">{item.name}</div>
                <div className="text-sm text-gray-600">₹{item.price}/kg</div>
                {item.spiciness && (
                  <div className="text-xs text-red-500 mt-1 font-bold">{item.spiciness}</div>
                )}
              </div>
            ))}
          </div>
        </section>
        {/* Hot Snacks */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-2">Hot Snacks <FaFireAlt className="text-red-500" /></h3>
          <div className="flex flex-wrap gap-6 justify-center">
            {snacks.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center w-40 border border-yellow-100 hover:scale-105 hover:shadow-2xl transition-transform animate-fade-in">
                <div className="w-16 h-16 bg-yellow-100 border-2 border-dashed border-orange-300 rounded-full mb-2 flex items-center justify-center">
                  <FaFireAlt className="text-red-500 text-xl" />
                </div>
                <div className="text-lg font-semibold text-orange-800">{item.name}</div>
                <div className="text-sm text-gray-600">₹{item.price} each</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

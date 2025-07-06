
export default function About() {
  return (
    <section className="py-16 px-4 bg-white" id="about">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Image placeholder */}
        <div className="w-40 h-40 md:w-56 md:h-56 bg-yellow-100 border-4 border-dashed border-orange-300 rounded-full flex items-center justify-center mb-6 md:mb-0">
          {/* Future: Shop image here */}
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold text-orange-700 mb-4">About Us</h2>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">Happy Namkeen and Sweets</span> is a family-run business in Mahaveer Nagar Ext., Near Shree Ram Circle, Kota. Since 1998, we have been known for our unmatched taste and freshness, serving the community with love and tradition.
          </p>
          <p className="text-base text-gray-600">
            Visit us for a wide variety of namkeen, sweets, and snacks made fresh every day!
          </p>
        </div>
      </div>
    </section>
  );
}

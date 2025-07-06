
export default function Contact() {
  return (
    <section className="py-16 px-4 bg-white" id="contact">
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        <div>
          <h2 className="text-3xl font-extrabold text-orange-700 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-2">Have questions or want to place an order? Reach out to us!</p>
        </div>
        <div className="bg-yellow-50 rounded-lg shadow p-6 flex flex-col gap-4">
          <div>
            <div className="font-semibold text-orange-800">Address:</div>
            <div className="text-gray-700">Mahaveer Nagar Ext., Near Shree Ram Circle, Kota</div>
          </div>
          <div>
            <div className="font-semibold text-orange-800">Phone:</div>
            <div className="text-gray-700">+91 8824646810</div>
          </div>
          <div className="flex gap-4 mt-2">
            <a
              href="tel:+918824646810"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded shadow transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Call
            </a>
            <a
              href="https://wa.me/918824646810"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
        {/* Google Map placeholder */}
        <div className="w-full h-56 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm">
          {/* Future: Google Map embed here */}
          Google Map Location
        </div>
      </div>
    </section>
  );
}

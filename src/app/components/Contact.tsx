import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaMap } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-16 px-4 bg-transparent" id="contact">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/90 rounded-3xl shadow-2xl p-8 border border-yellow-200 animate-fade-in flex flex-col gap-8">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-orange-700 mb-2 tracking-tight flex items-center gap-2"><FaMapMarkerAlt className="text-orange-500" /> Contact Us</h2>
            <p className="text-gray-700 mb-2">Have questions or want to place an order? Reach out to us!</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-yellow-100 border-l-4 border-orange-400 text-orange-800 rounded-lg px-4 py-2 mb-2 text-sm font-semibold shadow animate-fade-in">
              <span className="font-bold">Self Service:</span> Please visit our shop to buy. Online orders or services not available yet.
            </div>
            <div className="flex items-center gap-3 text-lg text-orange-800 font-semibold">
              <FaMapMarkerAlt className="text-orange-500" />
              1k29 Mahaveer Nagar Ext., Shree Ram Circle, Kota
            </div>
            <div className="flex items-center gap-3 text-lg text-orange-800 font-semibold">
              <FaPhoneAlt className="text-orange-500" />
              +91 8824646810
            </div>
            <div className="flex gap-4 mt-2">
              <a
                href="tel:+918824646810"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded shadow transition flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPhoneAlt /> Call
              </a>
              <a
                href="https://wa.me/918824646810"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow transition flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>
          {/* Google Map embed */}
          <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.883391887597!2d75.8300546751615!3d25.13963287774809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f84eaf341aebf%3A0x132a183c413e9abb!2sHappy%20Namkeen%20And%20Sweets!5e0!3m2!1sen!2sin!4v1751833980958!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Happy Namkeen and Sweets Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

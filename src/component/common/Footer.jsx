import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0d2b52] text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-bold text-orange-500">REPAIR</span>
            <span className="text-2xl font-bold">BAZAR</span>
          </div>
          <p className="text-sm leading-6 text-gray-200">
            Repair Bazar is our commitment to bring professionalism,
            good service and trust to the home repair service and
            maintenance business.
          </p>
        </div>

        {/* Middle */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm mb-2">
            <span className="font-semibold">Email:</span>{" "}
            info@repairbazar.com
          </p>
          <p className="text-sm">
            <span className="font-semibold">Address:</span>{" "}
            Noida, India
          </p>
        </div>

        {/* Right */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/"><FaFacebookF /></a>
            <a href="https://www.facebook.com/"><FaTwitter /></a>
            <a href="https://www.facebook.com/"><FaInstagram /></a>
            <a href="https://www.facebook.com/"><FaLinkedinIn /></a>
            <a href="https://www.facebook.com/"><FaPinterestP /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20"></div>

      
      {/* Bottom Bar */}
      <div className="bg-orange-600 text-center py-4 text-sm font-medium">
        Copyrights © 2024 FLYBIZZ SERVICES INDIA PRIVATE LIMITED.
        All Rights Reserved
      </div>
    </footer>
  );
}

function SocialIcon({ children }) {
  return (
    <a
      href="#"
      className="bg-gray-600 hover:bg-orange-500 transition p-2 rounded"
    >
      {children}
    </a>
  );
}

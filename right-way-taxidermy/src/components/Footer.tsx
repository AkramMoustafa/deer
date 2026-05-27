import { Link } from "react-router-dom"
import { Phone, MapPin, Clock, Instagram, Facebook, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        {/* Main grid */}
        <div className="grid md:grid-cols-5 gap-12 pb-16 border-b border-white/8">

          {/* Brand — spans 2 cols */}
          <div className="md:col-span-2">
            <Link to="/">
              <h2 className="text-4xl font-black tracking-[6px] mb-1">RIGHT WAY</h2>
              <p className="tracking-[8px] text-gray-500 text-xs mb-6">TAXIDERMY</p>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-8">
              Michigan's premier taxidermy studio. For over 20 years we have preserved
              the most important moments of the hunt with museum-level precision and care
              built to last generations.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Instagram size={16} />, label: "Instagram" },
                { icon: <Facebook size={16} />, label: "Facebook" },
                { icon: <Youtube size={16} />, label: "YouTube" },
              ].map(({ icon, label }) => (
                <a key={label} href="#" aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-gray-500 hover:border-white hover:text-white hover:bg-white/5 transition duration-300">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="uppercase tracking-[4px] text-gray-600 text-xs mb-7">Services</p>
            <ul className="space-y-3.5 text-sm">
              {["Whitetail Mounts", "Waterfowl & Birds", "Elk & Big Game", "Fish Mounts", "European Mounts", "Custom Habitats"].map(s => (
                <li key={s}>
                  <Link to="/services" className="text-gray-400 hover:text-white transition">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <p className="uppercase tracking-[4px] text-gray-600 text-xs mb-7">Navigation</p>
            <ul className="space-y-3.5 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/gallery", label: "Gallery" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-gray-400 hover:text-white transition">{label}</Link>
                </li>
              ))}
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="uppercase tracking-[4px] text-gray-600 text-xs mb-7">Contact</p>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={14} className="shrink-0 mt-0.5 text-gray-600" />
                <a href="tel:+12318182707" className="text-gray-400 hover:text-white transition">(231) 818-2707</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="shrink-0 mt-0.5 text-gray-600" />
                <span className="text-gray-400">890 W Surrey Rd<br />Farwell, MI 48622</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={14} className="shrink-0 mt-0.5 text-gray-600" />
                <span className="text-gray-400">Mon – Sat<br />9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-700 text-xs">
          <p>© 2025 Right Way Taxidermy. All rights reserved.</p>
          <div className="flex gap-8 uppercase tracking-widest text-[10px]">
            <a href="#" className="hover:text-gray-400 transition">Terms</a>
            <a href="#" className="hover:text-gray-400 transition">Privacy</a>
            <a href="#" className="hover:text-gray-400 transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

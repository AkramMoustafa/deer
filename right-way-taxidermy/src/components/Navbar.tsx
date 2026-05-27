import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Phone, MapPin, Clock, Menu, X } from "lucide-react"

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-black/92 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : ""
      }`}
    >
      {/* Announcement bar */}
      <AnimatePresence initial={false}>
        {!scrolled && (
          <motion.div
            key="announcement"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <div className="bg-white/8 backdrop-blur-sm border-b border-white/10">
              <div className="max-w-7xl mx-auto px-6 py-2.5 flex flex-col md:flex-row justify-between items-center gap-1 text-white">
                <div className="flex flex-wrap items-center gap-5 text-[10px] tracking-[4px] uppercase text-gray-400">
                  <span className="flex items-center gap-1.5"><Phone size={10} /> (231) 818-2707</span>
                  <span className="hidden md:block w-px h-3 bg-white/15" />
                  <span className="flex items-center gap-1.5"><MapPin size={10} /> Farwell, MI — Serving All of Michigan</span>
                  <span className="hidden md:block w-px h-3 bg-white/15" />
                  <span className="flex items-center gap-1.5"><Clock size={10} /> Mon – Sat &nbsp;·&nbsp; 9AM – 6PM</span>
                </div>
                <p className="text-[10px] tracking-[4px] uppercase text-gray-500 hidden md:block">
                  Over 20 Years of Museum-Quality Craftsmanship
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white h-[68px]">
        <Link to="/" className="shrink-0 group">
          <p className="text-xl font-black tracking-[6px] group-hover:text-gray-200 transition">RIGHT WAY</p>
          <p className="text-[9px] tracking-[8px] text-gray-500 -mt-0.5">TAXIDERMY</p>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-xs uppercase tracking-[4px] transition-all duration-300 pb-0.5 ${
                pathname === to
                  ? "text-white border-b border-white"
                  : "text-gray-400 hover:text-white border-b border-transparent hover:border-white/30"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden md:flex items-center gap-2 border border-white/25 text-white text-[10px] uppercase tracking-[4px] px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            Get A Quote <ArrowRight size={11} />
          </Link>

          <button
            onClick={() => setMobileOpen(v => !v)}
            className="md:hidden text-white p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Tagline sub-bar — desktop, not scrolled */}
      <AnimatePresence initial={false}>
        {!scrolled && (
          <motion.div
            key="tagline"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden hidden md:block"
          >
            <div className="border-t border-white/10">
              <div className="max-w-7xl mx-auto px-6 py-2.5 flex justify-between items-center">
                <span className="text-[9px] tracking-[3px] uppercase text-white/30">
                  Premium Trophy Taxidermy · Whitetail · Waterfowl · Big Game · Fish
                </span>
                <span className="text-[9px] tracking-[3px] uppercase text-white/30">
                  Lifetime Craftsmanship Guarantee
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black/97 backdrop-blur-2xl border-t border-white/10 px-6 py-10"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`text-2xl font-light tracking-widest uppercase transition ${
                    pathname === to ? "text-white" : "text-gray-500 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 inline-flex items-center gap-2 border border-white/30 text-white text-xs uppercase tracking-[4px] px-7 py-3.5 rounded-full hover:bg-white hover:text-black transition self-start"
              >
                Get A Quote <ArrowRight size={12} />
              </Link>
              <div className="pt-6 border-t border-white/10 space-y-3 text-xs text-gray-500 tracking-widest uppercase">
                <p className="flex items-center gap-2"><Phone size={11} /> (231) 818-2707</p>
                <p className="flex items-center gap-2"><MapPin size={11} /> Farwell, MI</p>
                <p className="flex items-center gap-2"><Clock size={11} /> Mon – Sat · 9AM–6PM</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

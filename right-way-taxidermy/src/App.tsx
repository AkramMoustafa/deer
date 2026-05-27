import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  Menu,
  X,
} from "lucide-react"
import { FaFacebookF, FaXTwitter } from "react-icons/fa6"

export default function Home() {
  const [cookiesAccepted, setCookiesAccepted] =
    useState<boolean | null>(null)

  const [scrolled, setScrolled] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("rw-cookies")

    if (stored) {
      setCookiesAccepted(stored === "accepted")
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("rw-cookies", "accepted")
    setCookiesAccepted(true)
  }

  const declineCookies = () => {
    localStorage.setItem("rw-cookies", "declined")
    setCookiesAccepted(false)
  }

  return (
    <div className="bg-white text-black overflow-hidden">

      {/* COOKIES */}
      <AnimatePresence>
        {cookiesAccepted === null && (
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 120, opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[999] w-[94vw] max-w-xl"
          >
            <div className="bg-[#0f0f0f] text-white rounded-2xl px-5 py-5 md:px-7 md:py-6 shadow-2xl border border-white/10 flex flex-col gap-5">
              <div>
                <p className="font-semibold text-sm md:text-base mb-2 tracking-wide">
                  We Use Cookies
                </p>

                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  We use cookies to improve your experience,
                  analyze traffic, and personalize content.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={declineCookies}
                  className="flex-1 px-4 py-3 rounded-full border border-white/20 text-sm text-gray-400"
                >
                  Decline
                </button>

                <button
                  onClick={acceptCookies}
                  className="flex-1 px-4 py-3 rounded-full bg-white text-black text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <CheckCircle size={15} />
                  Accept
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section
        className="relative min-h-[100svh] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/pexels.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />

        {/* TOP BAR */}
        <div className="absolute top-0 left-0 w-full z-40 bg-black border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-2.5 flex items-center justify-between text-white">

            <div className="flex items-center gap-4 text-[10px] tracking-[2px] uppercase text-gray-300">
              <span className="flex items-center gap-2">
                <Phone size={11} />
                (231) 818-2707
              </span>

              <span className="hidden sm:flex items-center gap-2">
                <MapPin size={11} />
                Farwell, MI
              </span>
            </div>

            <p className="hidden md:block text-xs tracking-[4px] uppercase text-gray-400">
              Over 20 Years of Craftsmanship
            </p>
          </div>
        </div>

        {/* NAVBAR */}
        <nav
          className={`fixed left-0 w-full z-50 transition-all duration-500 ${
            scrolled
              ? "top-0 bg-white/95 backdrop-blur-md shadow-lg py-4"
              : "top-[41px] bg-transparent py-5"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">

            {/* LOGO */}
            <div>
              <h1
                className={`text-xl md:text-2xl font-bold tracking-[4px] md:tracking-[6px] transition-colors duration-300 ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                RIGHT WAY
              </h1>

              <p
                className={`text-[10px] md:text-xs tracking-[4px] md:tracking-[8px] transition-colors duration-300 ${
                  scrolled ? "text-gray-500" : "text-gray-300"
                }`}
              >
                TAXIDERMY
              </p>
            </div>

            {/* DESKTOP LINKS */}
            <div
              className={`hidden md:flex gap-10 uppercase text-sm tracking-widest transition-colors duration-300 ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Gallery</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
            </div>

            {/* DESKTOP BUTTON */}
            <button
              className={`hidden md:flex items-center gap-2 text-xs uppercase tracking-[4px] px-5 py-2.5 rounded-full transition duration-300 border ${
                scrolled
                  ? "border-black text-black hover:bg-black hover:text-white"
                  : "border-white/40 text-white hover:bg-white hover:text-black"
              }`}
            >
              Get A Quote <ArrowRight size={12} />
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className={`md:hidden ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              {mobileMenu ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {mobileMenu && (
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="md:hidden bg-white border-t border-black/10"
              >
                <div className="flex flex-col px-6 py-6 gap-5 uppercase tracking-[3px] text-sm">
                  <a href="#">Home</a>
                  <a href="#">About</a>
                  <a href="#">Gallery</a>
                  <a href="#">Services</a>
                  <a href="#">Contact</a>

                  <button className="mt-3 bg-black text-white py-3 rounded-full text-xs tracking-[3px]">
                    Get A Quote
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* HERO CONTENT */}
        <div className="relative z-10 min-h-[100svh] flex items-end md:items-center pb-20 md:pb-0">
          <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-4xl"
            >
              <p className="uppercase tracking-[3px] md:tracking-[8px] text-gray-300 text-xs md:text-sm mb-5 md:mb-6">
                Professional Craftsmanship
              </p>

              <h1 className="text-white text-4xl sm:text-5xl md:text-8xl font-black leading-[0.95] mb-6 md:mb-8">
                PRESERVING
                <br />
                THE HUNT
              </h1>

              <p className="text-gray-300 text-base md:text-xl max-w-2xl leading-relaxed mb-8 md:mb-10">
                Premium taxidermy designed to preserve every detail
                with realism, artistry, and craftsmanship built to
                last generations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">

                <button className="bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold flex items-center justify-center gap-3">
                  View Gallery
                  <ArrowRight size={18} />
                </button>

                <button className="border border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold">
                  Get A Quote
                </button>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6">

          <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
            <p className="uppercase tracking-[4px] md:tracking-[6px] text-gray-400 text-[10px] mb-5">
              Our Specialties
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-[0.95] mb-6">
              Every Trophy
              <br />
              Tells A Story
            </h2>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
              Built with exceptional craftsmanship and realism.
            </p>
          </div>

          {/* ROW */}
          {[
            {
              img: "/images/deer1.jpg",
              title: "Deer Mounts",
              label: "Whitetail Collection",
              heading: "Precision In Every Detail",
              body:
                "Every form, eye set, and habitat detail is crafted to recreate the exact moment from the field.",
            },
            {
              img: "/images/duck.jpg",
              title: "Dynamic Displays",
              label: "Waterfowl",
              heading: "Motion Frozen In Time",
              body:
                "Every feather alignment and wing position creates movement and realism.",
            },
            {
              img: "/images/elk.jpg",
              title: "Built To Last",
              label: "Big Game",
              heading: "Crafted To Command",
              body:
                "Large-scale mounts combine anatomy, artistry, and craftsmanship.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-10 md:gap-14 items-center ${
                index !== 2 ? "mb-20 md:mb-28" : ""
              }`}
            >

              <div
                className={`relative ${
                  index === 1 ? "md:order-2" : ""
                }`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-[320px] sm:h-[420px] md:h-[520px] object-cover"
                />

                <div className="absolute bottom-5 left-5">
                  <p className="text-white uppercase tracking-[4px] text-[10px] mb-2">
                    {item.label}
                  </p>

                  <h3 className="text-white text-2xl md:text-4xl font-black">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div
                className={`max-w-md ${
                  index === 1 ? "md:order-1" : ""
                }`}
              >
                <p className="uppercase tracking-[4px] text-gray-400 text-[10px] mb-4">
                  Signature Work
                </p>

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black leading-none mb-6">
                  {item.heading}
                </h3>

                <p className="text-gray-500 text-base leading-relaxed mb-8">
                  {item.body}
                </p>

                <button className="border border-black px-5 py-3 uppercase tracking-[3px] text-xs hover:bg-black hover:text-white transition">
                  Explore Collection
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 md:py-32 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">

            <div>
              <p className="uppercase tracking-[4px] md:tracking-[6px] text-gray-400 mb-5">
                About Right Way
              </p>

              <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6 md:mb-8">
                Preserving Memories
                For Generations
              </h2>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                Right Way Taxidermy combines realism and premium craftsmanship
                to create mounts that truly honor the hunt.
              </p>

              <button className="bg-black text-white px-6 py-3 md:px-8 md:py-4 rounded-full">
                Learn More
              </button>
            </div>

            <div>
              <img
                src="/images/about.jpg"
                className="rounded-[24px] md:rounded-[40px] shadow-2xl"
                loading="lazy"
                alt="About Right Way Taxidermy"
              />
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">

          <div className="mb-14 md:mb-16 text-center max-w-2xl mx-auto">
            <p className="uppercase tracking-[4px] md:tracking-[6px] text-gray-500 text-[10px] mb-4">
              The Process
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[0.95] mb-5">
              Crafted With
              <br />
              Precision
            </h2>

            <p className="text-gray-400 text-base leading-relaxed">
              Every mount moves through a handcrafted process focused on realism.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-10">

            {[
              {
                number: "01",
                title: "Preparation",
                body:
                  "Every specimen is carefully preserved and evaluated.",
              },
              {
                number: "02",
                title: "Sculpting",
                body:
                  "Custom shaping and positioning create realistic movement.",
              },
              {
                number: "03",
                title: "Finishing",
                body:
                  "Final detailing creates mounts built for generations.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="border border-white/10 p-6 md:p-8"
              >
                <p className="text-gray-600 text-xs tracking-[4px] uppercase mb-6">
                  {step.number}
                </p>

                <h3 className="text-2xl md:text-3xl font-black mb-5">
                  {step.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm">
                  {step.body}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-40 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/elk.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center">

          <p className="uppercase tracking-[4px] md:tracking-[6px] text-gray-400 mb-6">
            Start Your Project
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6 md:mb-8">
            Ready To Preserve
            Your Trophy?
          </h2>

          <p className="text-gray-300 text-base md:text-xl leading-relaxed mb-10 md:mb-12 max-w-3xl mx-auto">
            Contact us today to begin creating a mount that will last a lifetime.
          </p>

          <button className="bg-white text-black px-7 py-4 rounded-full text-base md:text-lg font-semibold">
            Contact Us
          </button>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-black/10 text-black py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 pb-14 border-b border-black/10">

            <div>
              <h2 className="text-2xl md:text-3xl font-black tracking-[4px] mb-1">
                RIGHT WAY
              </h2>

              <p className="tracking-[4px] md:tracking-[6px] text-gray-500 text-sm mb-5">
                TAXIDERMY
              </p>

              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Michigan's premier taxidermy studio.
              </p>

              <div className="flex gap-4 mt-6">

                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition"
                >
                  <FaFacebookF size={15} />
                </a>

                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition"
                >
                  <FaXTwitter size={15} />
                </a>

              </div>
            </div>

            <div>
              <p className="uppercase tracking-[4px] text-gray-500 text-xs mb-6">
                Services
              </p>

              <ul className="space-y-3 text-gray-500 text-sm">
                <li>Whitetail Deer Mounts</li>
                <li>Waterfowl & Birds</li>
                <li>Big Game & Elk</li>
                <li>Fish Mounts</li>
              </ul>
            </div>

            <div>
              <p className="uppercase tracking-[4px] text-gray-500 text-xs mb-6">
                Navigation
              </p>

              <ul className="space-y-3 text-gray-500 text-sm">
                <li>Home</li>
                <li>About</li>
                <li>Gallery</li>
                <li>Pricing</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <p className="uppercase tracking-[4px] text-gray-500 text-xs mb-6">
                Contact
              </p>

              <ul className="space-y-4 text-gray-500 text-sm">

                <li className="flex items-start gap-3">
                  <Phone size={15} className="mt-0.5" />
                  <span>(231) 818-2707</span>
                </li>

                <li className="flex items-start gap-3">
                  <MapPin size={15} className="mt-0.5" />
                  <span>
                    890 W Surrey Rd
                    <br />
                    Farwell, MI 48622
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <Clock size={15} className="mt-0.5" />
                  <span>
                    Mon – Sat
                    <br />
                    9:00 AM – 6:00 PM
                  </span>
                </li>

              </ul>
            </div>

          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
            <p>&copy; 2025 Right Way Taxidermy. All rights reserved.</p>

            <div className="flex gap-6">
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
              <a href="#">Cookies</a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}
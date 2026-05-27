import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react"
import { FaFacebookF, FaXTwitter } from "react-icons/fa6"

const cards = [
  {
    img: "/images/deer1.jpg",
    alt: "Whitetail Deer Mount",
    badge: "Signature Mount",
    category: "Premium Mounts",
    title1: "Whitetail",
    title2: "Deer",
    body:
      "Our whitetail shoulder mounts are our most-requested work. Hand-picked glass eyes, premium foam forms, and species-accurate habitat bases recreate the animal exactly as you remember it in the field — alert, powerful, and alive.",
    bullets: [
      "Custom habitat & base options",
      "Museum-grade tanning & finishing",
      "8–12 week turnaround",
    ],
    delay: 0,
  },
  {
    img: "/images/duck.jpg",
    alt: "Duck Taxidermy",
    badge: "Waterfowl Art",
    category: "Waterfowl",
    title1: "Dynamic",
    title2: "Displays",
    body:
      "Every feather, every iridescent color preserved with care. Our cinematic, motion-focused compositions place birds mid-flight, landing, or in full display — creating wall art that stops people in their tracks.",
    bullets: [
      "Individual feather alignment & pinning",
      "Flight, landing & resting poses",
      "Driftwood & natural base styling",
    ],
    delay: 0.15,
  },
  {
    img: "/images/elk.jpg",
    alt: "Elk Trophy Mount",
    badge: "Hand Built",
    category: "Big Game",
    title1: "Built",
    title2: "By Hand",
    body:
      "From elk and bear to exotic game, large-scale mounts are where our craftsmanship truly shines. Hand-sculpted anatomy, custom armature, and museum-standard finishing mean your trophy commands the room for generations.",
    bullets: [
      "Full body, pedestal & shoulder options",
      "Hand-sculpted muscle & bone detail",
      "Lifetime craftsmanship guarantee",
    ],
    delay: 0.3,
  },
]

export default function Home() {
  const [cookiesAccepted, setCookiesAccepted] =
    useState<boolean | null>(null)

  const [scrolled, setScrolled] = useState(false)

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

      {/* COOKIES POPUP */}
      <AnimatePresence>
        {cookiesAccepted === null && (
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 120, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[999] w-[94vw] max-w-2xl"
          >
            <div className="bg-[#0f0f0f] text-white rounded-2xl px-8 py-6 shadow-2xl border border-white/10 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <p className="font-semibold text-base mb-1 tracking-wide">
                  We Use Cookies
                </p>

                <p className="text-gray-400 text-sm leading-relaxed">
                  We use cookies to enhance your browsing experience,
                  analyze site traffic, and personalize content.
                  By continuing, you agree to our{" "}
                  <a
                    href="#"
                    className="underline text-gray-300 hover:text-white transition"
                  >
                    Privacy Policy
                  </a>.
                </p>
              </div>

              <div className="flex gap-3 shrink-0">
                <button
                  onClick={declineCookies}
                  className="px-5 py-2.5 rounded-full border border-white/20 text-sm text-gray-400 hover:text-white hover:border-white/50 transition"
                >
                  Decline
                </button>

                <button
                  onClick={acceptCookies}
                  className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition flex items-center gap-2"
                >
                  <CheckCircle size={15} />
                  Accept All
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section
        className="relative h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/pexels.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />

        {/* TOP INFO BAR */}
        <div className="absolute top-0 left-0 w-full z-40 bg-black border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-2.5 flex flex-col md:flex-row justify-between items-center gap-2 text-white">
            <div className="flex flex-wrap items-center gap-6 text-[10px] tracking-[2px] uppercase text-gray-300">
              <span className="flex items-center gap-2">
                <Phone size={11} className="text-gray-400" />
                (231) 818-2707
              </span>

              <span className="hidden md:block w-px h-3 bg-white/20" />

              <span className="flex items-center gap-2">
                <MapPin size={11} className="text-gray-400" />
                Farwell, MI — Serving All of Michigan
              </span>

              <span className="hidden md:block w-px h-3 bg-white/20" />

              <span className="flex items-center gap-2">
                <Clock size={11} className="text-gray-400" />
                Mon – Sat | 9AM – 6PM
              </span>
            </div>

            <p className="text-xs tracking-[4px] uppercase text-gray-400 hidden md:block">
              Over 20 Years of Museum-Quality Craftsmanship
            </p>
          </div>
        </div>

        {/* NAVBAR */}
        <nav
className={`fixed left-0 w-full z-50 transition-all duration-500 ${
  scrolled
    ? "top-0 bg-white/95 backdrop-blur-md shadow-lg py-4"
    : "top-[41px] bg-transparent py-6"
}`}
        >
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

            {/* LOGO */}
            <div>
              <h1
                className={`text-2xl font-bold tracking-[6px] transition-colors duration-300 ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                RIGHT WAY
              </h1>

              <p
                className={`text-xs tracking-[8px] transition-colors duration-300 ${
                  scrolled ? "text-gray-500" : "text-gray-300"
                }`}
              >
                TAXIDERMY
              </p>
            </div>

            {/* LINKS */}
            <div
              className={`hidden md:flex gap-10 uppercase text-sm tracking-widest transition-colors duration-300 ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              <a href="#" className="hover:opacity-70 transition">
                Home
              </a>

              <a href="#" className="hover:opacity-70 transition">
                About
              </a>

              <a href="#" className="hover:opacity-70 transition">
                Gallery
              </a>

              <a href="#" className="hover:opacity-70 transition">
                Services
              </a>

              <a href="#" className="hover:opacity-70 transition">
                Contact
              </a>
            </div>

            {/* BUTTON */}
            <button
              className={`hidden md:flex items-center gap-2 text-xs uppercase tracking-[4px] px-5 py-2.5 rounded-full transition duration-300 border ${
                scrolled
                  ? "border-black text-black hover:bg-black hover:text-white"
                  : "border-white/40 text-white hover:bg-white hover:text-black"
              }`}
            >
              Get A Quote <ArrowRight size={12} />
            </button>
          </div>
        </nav>

        {/* HERO CONTENT */}
        <div className="relative z-10 h-full flex items-end pb-10">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-4xl"
            >
              <p className="uppercase tracking-[8px] text-gray-300 mb-6">
                Museum Quality Craftsmanship
              </p>

              <h1 className="text-white text-6xl md:text-8xl font-black leading-none mb-8">
                PRESERVING
                <br />
                THE HUNT
              </h1>

              <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
                Premium taxidermy designed to preserve every detail
                with realism, artistry, and craftsmanship built to
                last generations.
              </p>

              <div className="flex flex-wrap gap-6">
                <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition duration-300 flex items-center gap-3">
                  View Gallery <ArrowRight size={18} />
                </button>

                <button className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300">
                  Get A Quote
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FEATURE SECTION */}
{/* FEATURE SECTION */}
<section className="py-28 bg-white overflow-hidden">
  <div className="max-w-6xl mx-auto px-6">

    {/* HEADING */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-24 max-w-3xl mx-auto"
    >
      <p className="uppercase tracking-[6px] text-gray-400 text-xs mb-5">
        Our Specialties
      </p>

      <h2 className="text-4xl md:text-6xl font-black leading-[0.95] mb-6">
        Every Trophy
        <br />
        Tells A Story
      </h2>

      <p className="text-gray-500 text-base md:text-lg leading-relaxed">
        Built with museum-level craftsmanship, realism,
        and detail designed to preserve the hunt forever.
      </p>
    </motion.div>

    {/* ROW 1 */}
    <div className="grid md:grid-cols-2 gap-14 items-center mb-28">

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <img
          src="/images/deer1.jpg"
          alt="Whitetail Deer"
          className="w-full h-[520px] object-cover"
        />

        <div className="absolute bottom-6 left-6">
          <p className="text-white uppercase tracking-[5px] text-[10px] mb-2">
            Whitetail Collection
          </p>

          <h3 className="text-white text-3xl md:text-4xl font-black">
            Deer Mounts
          </h3>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-md"
      >
        <p className="uppercase tracking-[5px] text-gray-400 text-[10px] mb-4">
          Signature Work
        </p>

        <h3 className="text-4xl md:text-5xl font-black leading-none mb-6">
          Precision
          <br />
          In Every Detail
        </h3>

        <p className="text-gray-500 text-base leading-relaxed mb-8">
          Every form, eye set, muscle contour,
          and habitat detail is crafted to recreate
          the exact moment from the field.
        </p>

        <div className="space-y-3 mb-10">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-black" />
            <p className="text-gray-600 text-sm">
              Museum-grade finishing
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-black" />
            <p className="text-gray-600 text-sm">
              Custom habitat options
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-black" />
            <p className="text-gray-600 text-sm">
              Hand-sculpted realism
            </p>
          </div>
        </div>

        <button className="border border-black px-6 py-3 uppercase tracking-[3px] text-xs hover:bg-black hover:text-white transition duration-300">
          Explore Collection
        </button>
      </motion.div>
    </div>

    {/* ROW 2 */}
    <div className="grid md:grid-cols-2 gap-14 items-center mb-28">

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-md md:order-1 order-2"
      >
        <p className="uppercase tracking-[5px] text-gray-400 text-[10px] mb-4">
          Waterfowl Artistry
        </p>

        <h3 className="text-4xl md:text-5xl font-black leading-none mb-6">
          Motion
          <br />
          Frozen In Time
        </h3>

        <p className="text-gray-500 text-base leading-relaxed mb-8">
          Every feather alignment and wing position
          is designed to create movement, realism,
          and cinematic presentation.
        </p>

        <button className="border border-black px-6 py-3 uppercase tracking-[3px] text-xs hover:bg-black hover:text-white transition duration-300">
          View Waterfowl
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative md:order-2 order-1"
      >
        <img
          src="/images/duck.jpg"
          alt="Waterfowl"
          className="w-full h-[520px] object-cover"
        />

        <div className="absolute bottom-6 left-6">
          <p className="text-white uppercase tracking-[5px] text-[10px] mb-2">
            Waterfowl
          </p>

          <h3 className="text-white text-3xl md:text-4xl font-black">
            Dynamic Displays
          </h3>
        </div>
      </motion.div>
    </div>

    {/* ROW 3 */}
    <div className="grid md:grid-cols-2 gap-14 items-center">

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <img
          src="/images/elk.jpg"
          alt="Big Game"
          className="w-full h-[520px] object-cover"
        />

        <div className="absolute bottom-6 left-6">
          <p className="text-white uppercase tracking-[5px] text-[10px] mb-2">
            Big Game
          </p>

          <h3 className="text-white text-3xl md:text-4xl font-black">
            Built To Last
          </h3>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-md"
      >
        <p className="uppercase tracking-[5px] text-gray-400 text-[10px] mb-4">
          Big Game Collection
        </p>

        <h3 className="text-4xl md:text-5xl font-black leading-none mb-6">
          Crafted
          <br />
          To Command
        </h3>

        <p className="text-gray-500 text-base leading-relaxed mb-8">
          Large-scale mounts combine anatomy,
          artistry, and craftsmanship into statement
          pieces designed for generations.
        </p>

        <button className="border border-black px-6 py-3 uppercase tracking-[3px] text-xs hover:bg-black hover:text-white transition duration-300">
          Explore Big Game
        </button>
      </motion.div>
    </div>

  </div>
</section>
      {/* ABOUT */}
      <section className="py-32 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <p className="uppercase tracking-[6px] text-gray-400 mb-6">About Right Way</p>
              <h2 className="text-6xl font-black leading-tight mb-8">
                Preserving Memories
                For Generations
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Right Way Taxidermy combines artistic precision, realism, and premium craftsmanship
                to create mounts that truly honor the hunt.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                From shoulder mounts to custom habitats, every piece is designed to showcase natural
                beauty with museum-level detail.
              </p>
              <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition">
                Learn More
              </button>
            </div>
            <div>
              <img
                src="/images/about.jpg"
                className="rounded-[40px] shadow-2xl"
                alt="About Right Way Taxidermy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
 {/* PROCESS SECTION */}
{/* PROCESS SECTION */}
<section className="py-20 bg-black text-white">
  <div className="max-w-6xl mx-auto px-6">

    {/* HEADING */}
    <div className="mb-16 text-center max-w-2xl mx-auto">
      <p className="uppercase tracking-[6px] text-gray-500 text-[10px] mb-4">
        The Process
      </p>

      <h2 className="text-4xl md:text-5xl font-black leading-[0.95] mb-5">
        Crafted With
        <br />
        Precision
      </h2>

      <p className="text-gray-400 text-base leading-relaxed">
        Every mount moves through a handcrafted process
        focused on realism, preservation, and detail.
      </p>
    </div>

    {/* STEPS */}
    <div className="grid md:grid-cols-3 gap-10">

      {/* STEP 1 */}
      <div className="border border-white/10 p-8">
        <p className="text-gray-600 text-xs tracking-[4px] uppercase mb-6">
          01
        </p>

        <h3 className="text-3xl font-black mb-5">
          Preparation
        </h3>

        <p className="text-gray-400 leading-relaxed text-sm">
          Every specimen is carefully preserved
          and evaluated for long-term anatomical accuracy.
        </p>
      </div>

      {/* STEP 2 */}
      <div className="border border-white/10 p-8">
        <p className="text-gray-600 text-xs tracking-[4px] uppercase mb-6">
          02
        </p>

        <h3 className="text-3xl font-black mb-5">
          Sculpting
        </h3>

        <p className="text-gray-400 leading-relaxed text-sm">
          Custom shaping and positioning create
          realistic movement and presentation.
        </p>
      </div>

      {/* STEP 3 */}
      <div className="border border-white/10 p-8">
        <p className="text-gray-600 text-xs tracking-[4px] uppercase mb-6">
          03
        </p>

        <h3 className="text-3xl font-black mb-5">
          Finishing
        </h3>

        <p className="text-gray-400 leading-relaxed text-sm">
          Final detailing and finishing touches
          create mounts built for generations.
        </p>
      </div>

    </div>

  </div>
</section>

      {/* CTA */}
      <section className="relative py-40 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/elk.jpg" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[6px] text-gray-400 mb-6">Start Your Project</p>
          <h2 className="text-6xl md:text-7xl font-black leading-tight mb-8">
            Ready To Preserve
            Your Trophy?
          </h2>
          <p className="text-gray-300 text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
            Contact us today to begin creating a mount that will last a lifetime.
          </p>
          <button className="bg-white text-black px-10 py-5 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
            Contact Us
          </button>
        </div>
      </section>

      {/* FOOTER */}
     <footer className="bg-white border-t border-black/10 text-black py-14">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-white/10">

            <div className="md:col-span-1">
              <h2 className="text-3xl font-black tracking-[5px] mb-1">RIGHT WAY</h2>
              <p className="tracking-[6px] text-gray-500 text-sm mb-5">TAXIDERMY</p>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Michigan's premier taxidermy studio — where the hunt lives forever.
              </p>
              <div className="flex gap-4 mt-6">
    
                <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition">
                  <FaFacebookF size={15} />
                </a>
                <a href="#" aria-label="X" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition">
                  <FaXTwitter size={15} />
                </a>
              </div>
            </div>

            <div>
              <p className="uppercase tracking-[4px] text-gray-500 text-xs mb-6">Services</p>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Whitetail Deer Mounts</a></li>
                <li><a href="#" className="hover:text-white transition">Waterfowl &amp; Birds</a></li>
                <li><a href="#" className="hover:text-white transition">Big Game &amp; Elk</a></li>
                <li><a href="#" className="hover:text-white transition">Fish Mounts</a></li>
                <li><a href="#" className="hover:text-white transition">Custom Habitats</a></li>
                <li><a href="#" className="hover:text-white transition">Skull Cleaning</a></li>
              </ul>
            </div>

            <div>
              <p className="uppercase tracking-[4px] text-gray-500 text-xs mb-6">Navigation</p>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Home</a></li>
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Gallery</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <p className="uppercase tracking-[4px] text-gray-500 text-xs mb-6">Contact</p>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-start gap-3">
                  <Phone size={15} className="shrink-0 mt-0.5 text-gray-500" />
                  <span>(231) 818-2707</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={15} className="shrink-0 mt-0.5 text-gray-500" />
                  <span>
                    890 W Surrey Rd
                    <br />
                    Farwell, MI 48622
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={15} className="shrink-0 mt-0.5 text-gray-500" />
                  <span>
                    Mon – Sat
                    <br />
                    9:00 AM – 6:00 PM
                  </span>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-xs">
            <p>&copy; 2025 Right Way Taxidermy. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-400 transition">Terms of Use</a>
              <a href="#" className="hover:text-gray-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-gray-400 transition">Cookie Policy</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  )
}
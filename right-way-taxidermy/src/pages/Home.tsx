import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay },
})

export default function Home() {
  return (
    <div className="bg-white text-black overflow-hidden">

      {/* HERO */}
      <section
        className="relative min-h-screen w-full bg-cover bg-center bg-gray-900"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full pt-48 pb-24">
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <motion.p
                initial={{ opacity: 0, letterSpacing: "0.3em" }}
                animate={{ opacity: 1, letterSpacing: "0.5em" }}
                transition={{ duration: 1.4, delay: 0.3 }}
                className="uppercase text-gray-400 text-xs mb-8 tracking-[8px]"
              >
                Museum Quality Craftsmanship
              </motion.p>

              <h1 className="font-display text-white text-7xl md:text-[9rem] font-bold leading-[0.9] mb-10">
                PRESERVING
                <br />
                <span className="italic font-normal text-gray-300">the Hunt</span>
              </h1>

              <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed mb-12">
                Premium taxidermy designed to preserve every detail
                with realism, artistry, and craftsmanship built to
                last generations.
              </p>

              <div className="flex flex-wrap gap-5">
                <Link to="/gallery" className="bg-white text-black px-9 py-4 rounded-full font-semibold hover:bg-gray-100 transition duration-300 flex items-center gap-3 text-sm tracking-widest uppercase">
                  View Gallery <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="border border-white/40 text-white px-9 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300 text-sm tracking-widest uppercase">
                  Get A Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] text-white/40 uppercase tracking-[5px]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* FEATURE SECTION */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-24">
            <p className="uppercase tracking-[8px] text-gray-400 text-xs mb-5">Our Specialties</p>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
              Every Mount,
              <br />
              <em className="not-italic text-gray-400">A Masterpiece</em>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Decades of experience poured into every piece — from wild game to waterfowl,
              each creation is a tribute to the hunt and a legacy built to endure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                img: "/images/deer1.jpg",
                badge: "Signature Mount",
                tag: "Premium Mounts",
                title: "Whitetail\nDeer",
                body: "Our whitetail shoulder mounts are our most celebrated work. Hand-picked glass eyes, premium foam forms, and species-accurate detail recreate the animal exactly as you remember it — alert, powerful, and alive.",
                details: ["Custom habitat & base options", "Museum-grade tanning & finishing", "8–12 week turnaround"],
                delay: 0,
                offset: "",
              },
              {
                img: "/images/duck.jpg",
                badge: "Waterfowl Art",
                tag: "Waterfowl",
                title: "Dynamic\nDisplays",
                body: "Every feather, every iridescent color preserved with cinematic precision. Our motion-focused compositions place birds mid-flight, landing, or in full display — wall art that stops people cold.",
                details: ["Individual feather alignment & pinning", "Flight, landing & resting poses", "Driftwood & natural base styling"],
                delay: 0.15,
                offset: "mt-16",
              },
              {
                img: "/images/elk.jpg",
                badge: "Hand Built",
                tag: "Big Game",
                title: "Built\nBy Hand",
                body: "From elk and bear to exotic game, large-scale mounts are where our craftsmanship truly shines. Hand-sculpted anatomy and museum-standard finishing mean your trophy commands every room.",
                details: ["Full body, pedestal & shoulder options", "Hand-sculpted muscle & bone detail", "Lifetime craftsmanship guarantee"],
                delay: 0.3,
                offset: "",
              },
            ].map(({ img, badge, tag, title, body, details, delay, offset }) => (
              <motion.div key={tag} {...fadeUp(delay)} whileHover={{ y: -12 }} className={`group ${offset}`}>
                <div className="relative overflow-hidden rounded-[28px] mb-8 bg-gray-900">
                  <img src={img} alt={title.replace("\n", " ")} className="w-full h-[520px] object-cover group-hover:scale-110 transition duration-700 opacity-90 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-5 left-5 text-white text-[9px] uppercase tracking-[5px]">{badge}</span>
                </div>
                <p className="uppercase tracking-[5px] text-gray-400 text-[10px] mb-3">{tag}</p>
                <h3 className="font-display text-4xl font-bold mb-4 leading-tight whitespace-pre-line">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{body}</p>
                <ul className="space-y-2 text-xs text-gray-500 mb-6">
                  {details.map(d => (
                    <li key={d} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-black rounded-full shrink-0" />{d}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[4px] group/link hover:gap-4 transition-all">
                  Learn More <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="py-40 bg-[#f7f6f4]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeUp()}>
              <p className="uppercase tracking-[6px] text-gray-400 text-xs mb-6">About Right Way</p>
              <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-8">
                Preserving Memories
                <br />
                <em className="not-italic text-gray-400">For Generations</em>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Right Way Taxidermy combines artistic precision, realism, and premium craftsmanship
                to create mounts that truly honor the hunt. Founded on a passion for the outdoors
                and a reverence for wildlife, every piece we produce is built to outlast lifetimes.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-10">
                From shoulder mounts to custom habitats, every piece is designed to showcase
                natural beauty with museum-level detail.
              </p>
              <Link to="/about" className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-xs uppercase tracking-[4px] hover:bg-gray-800 transition">
                Our Story <ArrowRight size={14} />
              </Link>
            </motion.div>
            <motion.div {...fadeUp(0.2)} className="relative">
              <div className="rounded-[40px] overflow-hidden shadow-2xl bg-gray-900 aspect-[4/5]">
                <img src="/images/about.jpg" alt="About Right Way Taxidermy" className="w-full h-full object-cover opacity-90" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-black text-white rounded-2xl px-8 py-6 hidden md:block">
                <p className="text-3xl font-black">20+</p>
                <p className="text-xs uppercase tracking-[4px] text-gray-400 mt-1">Years Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-28 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { num: "20+", label: "Years Experience" },
              { num: "500+", label: "Mounts Completed" },
              { num: "100%", label: "Handcrafted" },
            ].map(({ num, label }) => (
              <motion.div key={label} {...fadeUp()} className="py-8 md:py-0">
                <p className="font-display text-7xl md:text-8xl font-bold mb-4">{num}</p>
                <p className="uppercase tracking-[6px] text-gray-500 text-xs">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-44 bg-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-cover bg-center bg-gray-900"
          style={{ backgroundImage: "url('/images/elk.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp()}>
            <p className="uppercase tracking-[8px] text-gray-500 text-xs mb-8">Start Your Project</p>
            <h2 className="font-display text-6xl md:text-7xl font-bold leading-tight mb-8">
              Ready To Preserve
              <br />
              <em className="not-italic text-gray-400">Your Trophy?</em>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-14 max-w-2xl mx-auto">
              Contact us today to begin creating a mount that will last a lifetime.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-black px-12 py-5 rounded-full text-sm font-semibold uppercase tracking-[4px] hover:bg-gray-100 transition">
              Contact Us <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

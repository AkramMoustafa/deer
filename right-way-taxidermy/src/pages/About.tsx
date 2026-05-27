import { motion } from "framer-motion"
import { ArrowRight, Award, Eye, Heart, Hammer, Leaf, Shield } from "lucide-react"
import { Link } from "react-router-dom"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay },
})

const steps = [
  {
    num: "01",
    title: "Initial Consultation",
    body: "Every mount begins with a conversation. We learn about your animal, your trophy, the conditions of the hunt, and — most importantly — the memory you want to preserve. This session shapes every decision we make.",
  },
  {
    num: "02",
    title: "Skinning & Preparation",
    body: "We treat every hide with the care it deserves. Using museum-grade tanning processes, we prepare the skin to maintain its color, texture, and integrity for generations — not just years.",
  },
  {
    num: "03",
    title: "Sculpting & Forming",
    body: "Our anatomical forms are hand-built or custom-selected to match the exact proportions of your animal. We sculpt muscle definition, neck position, and facial expression to capture the moment precisely as you remember it.",
  },
  {
    num: "04",
    title: "Mounting & Assembly",
    body: "Piece by piece, the animal comes back to life. We hand-set premium glass eyes, align every hair pattern, and secure the hide with surgical precision — no shortcuts, no compromises.",
  },
  {
    num: "05",
    title: "Finishing & Detail",
    body: "Airbrushing, habitat construction, base work, final texture detailing — this is where craftsmanship becomes art. We match nose color, eye moisture, and muscle tone to perfect the final illusion of life.",
  },
  {
    num: "06",
    title: "Delivery & Hanging",
    body: "Your trophy arrives ready to display. We guide you on proper hanging, placement, and long-term care so the piece remains pristine for the rest of its life — and yours.",
  },
]

const values = [
  { icon: <Eye size={22} />, title: "Precision", body: "Every stitch, every hair, every glass eye placed with a surgeon's care and an artist's vision. We do not cut corners." },
  { icon: <Shield size={22} />, title: "Legacy", body: "Our mounts are designed to outlast lifetimes and be passed down through generations. Premium materials, built to endure." },
  { icon: <Heart size={22} />, title: "Authenticity", body: "True to the animal, true to your memory. We preserve not just an animal, but the emotion and story behind the moment." },
  { icon: <Award size={22} />, title: "Excellence", body: "Decades of refinement mean every technique we use has been tested, improved, and perfected in our Michigan studio." },
  { icon: <Hammer size={22} />, title: "Handcrafted", body: "No mass production. No assembly lines. Every mount is hand-built by the same craftsmen from start to finish." },
  { icon: <Leaf size={22} />, title: "Respect", body: "We approach every animal with reverence — for the creature, the hunt, and the hunter who trusted us with their memory." },
]

export default function About() {
  return (
    <div className="bg-white text-black overflow-hidden">

      {/* HERO */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-gray-900 flex items-center"
        style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-52 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            <p className="uppercase tracking-[10px] text-gray-500 text-[10px] mb-8">Our Story</p>
            <h1 className="font-display text-white text-7xl md:text-[9rem] font-bold leading-[0.88] mb-10">
              BUILT FROM
              <br />
              <em className="not-italic text-gray-400">Passion.</em>
              <br />
              DRIVEN BY
              <br />
              <em className="not-italic text-gray-400">Craft.</em>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed">
              Every mount we create carries the weight of a memory —
              the early morning in the field, the patience, the moment
              that lasts forever. We preserve that moment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div {...fadeUp()}>
            <p className="font-display italic text-4xl md:text-5xl text-gray-800 leading-relaxed">
              "The difference between a good mount and a great one
              is the same as the difference between a photograph
              and a memory."
            </p>
            <div className="mt-10 w-16 h-px bg-black mx-auto" />
            <p className="mt-6 text-xs uppercase tracking-[6px] text-gray-400">
              — Right Way Taxidermy, Farwell MI
            </p>
          </motion.div>
        </div>
      </section>

      {/* ORIGIN STORY */}
      <section className="py-28 bg-[#f7f6f4] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeUp()}>
              <div className="relative">
                <div className="rounded-[36px] overflow-hidden bg-gray-900 aspect-[4/5] shadow-2xl">
                  <img src="/images/workshop.jpg" alt="Right Way Taxidermy Workshop" className="w-full h-full object-cover opacity-80" />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-black text-white rounded-2xl px-7 py-5 hidden md:block">
                  <p className="text-3xl font-black">500+</p>
                  <p className="text-[10px] uppercase tracking-[4px] text-gray-400 mt-1">Mounts Completed</p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.2)}>
              <p className="uppercase tracking-[6px] text-gray-400 text-[10px] mb-6">Our Origin</p>
              <h2 className="font-display text-5xl font-bold leading-tight mb-8">
                Michigan Roots.
                <br />
                <em className="not-italic text-gray-400">A Lifelong Craft.</em>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Right Way Taxidermy was built in the heart of Michigan by someone who understood
                both sides of the hunt. Not just the technical skill required to preserve an
                animal — but the emotional weight of what that animal meant to the person who
                brought it in.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Over two decades in, we still approach every single mount with the same humility
                and hunger for perfection that we started with. Michigan hunters have trusted us
                with their most prized trophies, and we take that trust seriously — every time.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-10">
                We are not a factory. We are a studio. Every mount is made by hand, from start
                to finish, by craftsmen who care deeply about the outcome.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-xs uppercase tracking-[4px] hover:bg-gray-800 transition">
                Work With Us <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-36 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="mb-20">
            <p className="uppercase tracking-[8px] text-gray-600 text-[10px] mb-5">How We Work</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight">
              The Craft
              <br />
              <em className="not-italic text-gray-600">Process</em>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-24 gap-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                {...fadeUp(i * 0.1)}
                className="relative border-t border-white/10 py-10 group"
              >
                <div className="flex items-start gap-8">
                  <span className="font-display text-5xl font-bold text-white/10 group-hover:text-white/20 transition duration-500 shrink-0 leading-none mt-1">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-wide mb-3">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-36 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-20">
            <p className="uppercase tracking-[8px] text-gray-400 text-[10px] mb-5">What Drives Us</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight">
              Our
              <br />
              <em className="not-italic text-gray-400">Philosophy</em>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {values.map(({ icon, title, body }, i) => (
              <motion.div
                key={title}
                {...fadeUp(i * 0.1)}
                className="border border-gray-100 rounded-2xl p-8 hover:border-black/30 hover:shadow-xl transition duration-500 group"
              >
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mb-6 group-hover:bg-black group-hover:border-black group-hover:text-white transition duration-300">
                  {icon}
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDIO DARK SECTION */}
      <section
        className="relative py-44 bg-cover bg-center bg-gray-950 text-white"
        style={{ backgroundImage: "url('/images/studio.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div {...fadeUp()}>
            <p className="uppercase tracking-[8px] text-gray-500 text-[10px] mb-8">The Studio</p>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-8">
              Where Every
              <br />
              <em className="not-italic text-gray-400">Hunt Lives On</em>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-14 max-w-2xl mx-auto">
              Our Farwell, Michigan studio is where raw craft meets deep reverence.
              Every tool, every technique, every decision is made in service of one goal:
              creating a mount worthy of the moment it represents.
            </p>
            <Link to="/gallery" className="inline-flex items-center gap-3 bg-white text-black px-12 py-5 rounded-full text-sm font-semibold uppercase tracking-[4px] hover:bg-gray-100 transition">
              See Our Work <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

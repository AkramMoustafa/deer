import { motion } from "framer-motion"
import { ArrowRight, Feather, Fish, Leaf, Target, Trophy, Skull } from "lucide-react"
import { Link } from "react-router-dom"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay },
})

const services = [
  {
    icon: <Trophy size={24} />,
    tag: "Most Popular",
    title: "Shoulder Mounts",
    price: "Starting at $450",
    img: "/images/deer1.jpg",
    description: "The definitive trophy mount. Our shoulder mounts capture the full power and presence of your animal from the shoulder up — the pose, the expression, the exact moment frozen forever. Each mount is built on a hand-selected anatomical form, finished with museum-grade tanning, premium glass eyes, and hand-painted detail.",
    features: [
      "Whitetail, Mule Deer, Antelope & more",
      "Multiple pose options (semi-sneak, upright, turn)",
      "Custom habitat base & wall panel options",
      "Museum-grade tanning & preserving",
      "Hand-set premium glass eyes",
      "8–14 week average turnaround",
    ],
  },
  {
    icon: <Skull size={24} />,
    tag: "Clean & Modern",
    title: "European Mounts",
    price: "Starting at $175",
    img: "/images/euro.jpg",
    description: "The European mount has made a stunning comeback as a modern, minimalist alternative to the traditional shoulder mount. Clean, dramatic, and architectural — a beautifully whitened skull is art in its own right. We use a professional maceration and whitening process for results that are stark, pristine, and gallery-worthy.",
    features: [
      "Whitetail, Elk, Bear, Coyote & more",
      "Professional maceration process",
      "Hydrogen peroxide whitening",
      "Optional antler staining & velvet restoration",
      "Custom hanging hardware included",
      "1–3 week turnaround",
    ],
  },
  {
    icon: <Feather size={24} />,
    tag: "Feather-Perfect",
    title: "Waterfowl Mounts",
    price: "Starting at $200",
    img: "/images/duck.jpg",
    description: "Waterfowl mounts demand a level of precision that separates skilled studios from exceptional ones. Every feather must be individually positioned and pinned during drying. We create cinematic compositions — birds landing, in full wing, or at rest — that transform your harvest into wall art you'll never stop looking at.",
    features: [
      "Ducks, Geese, Swans, Grouse & more",
      "Individual feather alignment & pinning",
      "Flight, landing & resting pose options",
      "Driftwood, marsh grass & natural base styling",
      "Pair & group compositions available",
      "6–10 week turnaround",
    ],
  },
  {
    icon: <Target size={24} />,
    tag: "The Ultimate Statement",
    title: "Full Body Mounts",
    price: "Starting at $1,200",
    img: "/images/elk.jpg",
    description: "A full body mount is the pinnacle of taxidermy. It demands mastery of anatomy, motion, and expression. Our full body mounts — from whitetail and elk to bear and predators — are museum-caliber sculptures that transform an animal into a breathtaking centerpiece. These are heirlooms, not decorations.",
    features: [
      "Deer, Elk, Bear, Predators & exotics",
      "Freestanding, pedestal & wall-habitat options",
      "Hand-sculpted muscle & facial anatomy",
      "Airbrush nose, mouth & eye detailing",
      "Full custom habitat construction",
      "16–24 week turnaround",
    ],
  },
  {
    icon: <Fish size={24} />,
    tag: "Vibrant & Lifelike",
    title: "Fish Mounts",
    price: "Starting at $350",
    img: "/images/fish.jpg",
    description: "A great day on the water deserves a great mount. We offer both traditional skin mounts and high-fidelity reproduction mounts for fish. Our reproductions are cast from real fish to preserve every scale and fin exactly as nature made them, then hand-painted to match your specific catch using reference photos.",
    features: [
      "Bass, Walleye, Pike, Trout, Muskie & more",
      "Skin mount or reproduction options",
      "Hand-painted to match your exact fish",
      "Natural habitat base available",
      "Reference photo painting included",
      "10–16 week turnaround",
    ],
  },
  {
    icon: <Leaf size={24} />,
    tag: "One-of-a-Kind",
    title: "Custom Habitats",
    price: "Quote Required",
    img: "/images/custom1.jpg",
    description: "For those who want more than a mount — they want a moment. Our custom habitat work creates complete diorama environments that place your trophy in its natural world: the oak flat at first light, the marsh edge, the mountain basin. These are room-defining installations built to order with no two alike.",
    features: [
      "Full diorama & scene construction",
      "Custom foliage, rock, water & ground cover",
      "Single animal or multi-animal compositions",
      "Any wall or freestanding format",
      "Collaborative design process",
      "Timeline varies by scope",
    ],
  },
]

const process = [
  { num: "01", title: "Drop Off", body: "Bring your animal in as soon as possible after harvest, properly skinned or cape-frozen. We'll inspect the hide and discuss your vision together." },
  { num: "02", title: "Consultation", body: "We go over pose options, habitat styles, and finish details. You'll know exactly what you're getting before work begins." },
  { num: "03", title: "Crafting", body: "Our studio gets to work. You'll receive a status update at key milestones throughout the process so you always know where things stand." },
  { num: "04", title: "Pickup", body: "Your mount is ready. We'll walk you through care instructions and help you plan the perfect display." },
]

export default function Services() {
  return (
    <div className="bg-white text-black overflow-hidden">

      {/* HERO */}
      <section
        className="relative min-h-[65vh] flex items-end bg-cover bg-center bg-gray-900"
        style={{ backgroundImage: "url('/images/services-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-20 pt-52">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p className="uppercase tracking-[10px] text-gray-500 text-[10px] mb-6">What We Offer</p>
            <h1 className="font-display text-7xl md:text-[8rem] font-bold leading-[0.88] text-white">
              OUR
              <br />
              <em className="not-italic text-gray-400">Services</em>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-36 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="mb-20">
            <p className="uppercase tracking-[8px] text-gray-400 text-[10px] mb-5">Crafted For Every Trophy</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight max-w-xl">
              Premium Work.
              <br />
              <em className="not-italic text-gray-400">Every Time.</em>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                {...fadeUp(i * 0.08)}
                className="group border border-gray-100 rounded-3xl overflow-hidden hover:border-black/20 hover:shadow-2xl transition duration-500"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-[280px] bg-gray-900">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover opacity-75 group-hover:scale-105 group-hover:opacity-90 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-5 left-5 flex items-center gap-3">
                    <span className="text-[9px] uppercase tracking-[5px] bg-white/10 backdrop-blur text-white border border-white/20 px-3 py-1.5 rounded-full">
                      {svc.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-5 right-5 text-white font-display text-xl font-bold opacity-60">
                    {svc.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-black group-hover:border-black group-hover:text-white transition duration-300">
                      {svc.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-3xl font-bold leading-tight">{svc.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">{svc.price}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{svc.description}</p>

                  <ul className="grid grid-cols-1 gap-2 mb-8">
                    {svc.features.map(f => (
                      <li key={f} className="flex items-center gap-2.5 text-xs text-gray-500">
                        <span className="w-1.5 h-1.5 bg-black rounded-full shrink-0" />{f}
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[4px] group/link hover:gap-4 transition-all">
                    Get A Quote <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-36 bg-[#0a0a0a] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="mb-20">
            <p className="uppercase tracking-[8px] text-gray-600 text-[10px] mb-5">Simple Process</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight">
              How It
              <br />
              <em className="not-italic text-gray-600">Works</em>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <motion.div key={step.num} {...fadeUp(i * 0.12)} className="relative">
                <p className="font-display text-6xl font-bold text-white/8 mb-4 leading-none">{step.num}</p>
                <div className="w-8 h-px bg-white/20 mb-5" />
                <h3 className="text-base font-semibold tracking-wide mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE CTA */}
      <section className="py-36 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-black text-white rounded-[40px] px-12 py-16 md:py-20 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/deer1.jpg')" }}
            />
            <div className="relative z-10">
              <motion.div {...fadeUp()}>
                <p className="uppercase tracking-[8px] text-gray-500 text-[10px] mb-6">Start Today</p>
                <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6">
                  Ready to Preserve
                  <br />
                  <em className="not-italic text-gray-400">Your Trophy?</em>
                </h2>
                <p className="text-gray-400 text-base leading-relaxed mb-12 max-w-xl mx-auto">
                  Contact us to discuss your mount. Every project starts with a free consultation
                  where we learn about your animal and your vision.
                </p>
                <div className="flex flex-wrap justify-center gap-5">
                  <Link to="/contact" className="bg-white text-black px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-[4px] hover:bg-gray-100 transition inline-flex items-center gap-3">
                    Contact Us <ArrowRight size={15} />
                  </Link>
                  <a href="tel:+12318182707" className="border border-white/30 text-white px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-[4px] hover:bg-white hover:text-black transition">
                    Call Now
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

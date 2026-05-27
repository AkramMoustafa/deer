import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

type Category = "All" | "Whitetail" | "Waterfowl" | "Elk" | "Custom"

interface GalleryItem {
  id: number
  src: string
  title: string
  subtitle: string
  category: Exclude<Category, "All">
  tall?: boolean
}

const items: GalleryItem[] = [
  { id: 1,  src: "/images/deer1.jpg",   title: "8-Point Whitetail",       subtitle: "Shoulder Mount · 2024",          category: "Whitetail", tall: true  },
  { id: 2,  src: "/images/deer2.jpg",   title: "Record Buck",             subtitle: "Pedestal Mount · 2024",          category: "Whitetail"              },
  { id: 3,  src: "/images/duck.jpg",    title: "Mallard in Flight",       subtitle: "Full Mount · 2024",              category: "Waterfowl", tall: true  },
  { id: 4,  src: "/images/elk.jpg",     title: "Trophy Bull Elk",         subtitle: "Shoulder Mount · 2023",          category: "Elk",       tall: true  },
  { id: 5,  src: "/images/deer3.jpg",   title: "Early Season Buck",       subtitle: "Shoulder Mount · 2023",          category: "Whitetail"              },
  { id: 6,  src: "/images/duck2.jpg",   title: "Wood Duck Pair",          subtitle: "Natural Habitat Mount · 2024",   category: "Waterfowl"              },
  { id: 7,  src: "/images/elk2.jpg",    title: "Rutting Bull",            subtitle: "Full Body Mount · 2022",         category: "Elk"                    },
  { id: 8,  src: "/images/custom1.jpg", title: "Habitat Scene",           subtitle: "Custom Diorama · 2024",          category: "Custom",    tall: true  },
  { id: 9,  src: "/images/deer4.jpg",   title: "Michigan Monster",        subtitle: "European Mount · 2023",          category: "Whitetail", tall: true  },
  { id: 10, src: "/images/duck3.jpg",   title: "Green-Wing Teal",         subtitle: "Full Mount · 2023",              category: "Waterfowl"              },
  { id: 11, src: "/images/custom2.jpg", title: "Bear & Habitat",          subtitle: "Custom Full Body · 2023",        category: "Custom"                 },
  { id: 12, src: "/images/elk3.jpg",    title: "Mountain Elk",            subtitle: "Shoulder Mount · 2022",          category: "Elk"                    },
  { id: 13, src: "/images/deer5.jpg",   title: "Late Season 10-Point",    subtitle: "Shoulder Mount · 2024",          category: "Whitetail"              },
  { id: 14, src: "/images/custom3.jpg", title: "Whitetail Habitat Scene", subtitle: "Custom Diorama · 2022",          category: "Custom",    tall: true  },
  { id: 15, src: "/images/duck4.jpg",   title: "Canada Goose",            subtitle: "Landing Pose · 2023",            category: "Waterfowl", tall: true  },
  { id: 16, src: "/images/deer6.jpg",   title: "Michigan 12-Point",       subtitle: "Shoulder Mount · 2022",          category: "Whitetail"              },
]

const categories: Category[] = ["All", "Whitetail", "Waterfowl", "Elk", "Custom"]

export default function Gallery() {
  const [active, setActive] = useState<Category>("All")
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = active === "All" ? items : items.filter(i => i.category === active)

  const current = lightbox !== null ? filtered.findIndex(i => i.id === lightbox) : -1

  const prev = useCallback(() => {
    if (current > 0) setLightbox(filtered[current - 1].id)
  }, [current, filtered])

  const next = useCallback(() => {
    if (current < filtered.length - 1) setLightbox(filtered[current + 1].id)
  }, [current, filtered])

  const close = useCallback(() => setLightbox(null), [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [close, prev, next])

  const lightboxItem = lightbox !== null ? filtered.find(i => i.id === lightbox) : null

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[55vh] flex items-end bg-gray-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/gallery-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a0a]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-20 pt-52">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="uppercase tracking-[10px] text-gray-600 text-[10px] mb-6">The Portfolio</p>
            <h1 className="font-display text-7xl md:text-[8rem] font-bold leading-[0.88]">
              THE
              <br />
              <em className="not-italic text-gray-500">Gallery</em>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="sticky top-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/8 py-5">
        <div className="max-w-7xl mx-auto px-6 flex gap-2 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-full text-[10px] uppercase tracking-[4px] transition duration-300 ${
                active === cat
                  ? "bg-white text-black"
                  : "border border-white/15 text-gray-400 hover:border-white/40 hover:text-white"
              }`}
            >
              {cat}
              {cat === "All" ? ` (${items.length})` : ` (${items.filter(i => i.category === cat).length})`}
            </button>
          ))}
        </div>
      </section>

      {/* MASONRY GRID */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="break-inside-avoid mb-5"
                >
                  <div
                    className="relative group cursor-pointer overflow-hidden rounded-2xl bg-gray-900"
                    onClick={() => setLightbox(item.id)}
                  >
                    <div className={item.tall ? "aspect-[3/4]" : "aspect-[4/3]"}>
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        style={{ transition: "transform 0.7s ease, opacity 0.4s ease" }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-400" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-400">
                      <span className="text-[9px] uppercase tracking-[5px] text-gray-400 mb-2 block">{item.category}</span>
                      <p className="font-display text-xl font-bold text-white leading-tight">{item.title}</p>
                      <p className="text-xs text-gray-400 mt-1">{item.subtitle}</p>
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                      <ArrowRight size={14} className="text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-28 px-6 border-t border-white/8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[8px] text-gray-600 text-[10px] mb-6">Ready to Start?</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-8">
              Your Trophy Deserves
              <br />
              <em className="not-italic text-gray-500">A Home Here</em>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-12 max-w-xl mx-auto">
              Contact us today to discuss your project. Every mount begins with a conversation.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-black px-12 py-5 rounded-full text-sm font-semibold uppercase tracking-[4px] hover:bg-gray-200 transition">
              Get A Quote <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox !== null && lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            onClick={close}
          >
            {/* Close */}
            <button
              onClick={close}
              className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition z-10"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* Prev */}
            {current > 0 && (
              <button
                onClick={e => { e.stopPropagation(); prev() }}
                className="absolute left-4 md:left-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition z-10"
                aria-label="Previous"
              >
                <ChevronLeft size={22} />
              </button>
            )}

            {/* Next */}
            {current < filtered.length - 1 && (
              <button
                onClick={e => { e.stopPropagation(); next() }}
                className="absolute right-4 md:right-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition z-10"
                aria-label="Next"
              >
                <ChevronRight size={22} />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={lightboxItem.id}
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="relative max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                <img
                  src={lightboxItem.src}
                  alt={lightboxItem.title}
                  className="w-full max-h-[75vh] object-contain"
                />
              </div>
              <div className="mt-5 flex justify-between items-end">
                <div>
                  <span className="text-[9px] uppercase tracking-[5px] text-gray-600 mb-1.5 block">{lightboxItem.category}</span>
                  <p className="font-display text-2xl font-bold text-white">{lightboxItem.title}</p>
                  <p className="text-gray-500 text-sm mt-1">{lightboxItem.subtitle}</p>
                </div>
                <p className="text-gray-700 text-xs tracking-widest">{current + 1} / {filtered.length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

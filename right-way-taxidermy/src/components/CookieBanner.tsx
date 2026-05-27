import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("rw-cookies")
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => { localStorage.setItem("rw-cookies", "accepted"); setVisible(false) }
  const decline = () => { localStorage.setItem("rw-cookies", "declined"); setVisible(false) }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[999] w-[94vw] max-w-2xl"
        >
          <div className="bg-[#0f0f0f] text-white rounded-2xl px-8 py-6 shadow-2xl border border-white/10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <p className="font-semibold text-base mb-1 tracking-wide">We Value Your Privacy</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                We use cookies to enhance your experience and analyze site traffic. By continuing,
                you agree to our{" "}
                <a href="#" className="underline text-gray-300 hover:text-white transition">Privacy Policy</a>.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <button onClick={decline} className="px-5 py-2.5 rounded-full border border-white/20 text-sm text-gray-400 hover:text-white hover:border-white/50 transition">
                Decline
              </button>
              <button onClick={accept} className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition flex items-center gap-2">
                <CheckCircle size={15} /> Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

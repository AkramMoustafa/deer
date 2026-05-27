import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, MapPin, Clock, Mail, ArrowRight, CheckCircle } from "lucide-react"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay },
})

const hours = [
  { day: "Monday",    time: "9:00 AM – 6:00 PM" },
  { day: "Tuesday",   time: "9:00 AM – 6:00 PM" },
  { day: "Wednesday", time: "9:00 AM – 6:00 PM" },
  { day: "Thursday",  time: "9:00 AM – 6:00 PM" },
  { day: "Friday",    time: "9:00 AM – 6:00 PM" },
  { day: "Saturday",  time: "9:00 AM – 6:00 PM" },
  { day: "Sunday",    time: "Closed" },
]

const animalTypes = [
  "Whitetail Deer",
  "Mule Deer",
  "Elk",
  "Bear",
  "Duck / Waterfowl",
  "Goose",
  "Fish",
  "Coyote / Predator",
  "Exotic / Other",
]

const serviceTypes = [
  "Shoulder Mount",
  "Full Body Mount",
  "European / Skull Mount",
  "Waterfowl Mount",
  "Fish Mount",
  "Custom Habitat",
  "Not Sure Yet",
]

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", animal: "", service: "", message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => { setSending(false); setSubmitted(true) }, 1200)
  }

  return (
    <div className="bg-white text-black overflow-hidden">

      {/* HERO */}
      <section
        className="relative min-h-[55vh] flex items-end bg-cover bg-center bg-gray-900"
        style={{ backgroundImage: "url('/images/contact-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-20 pt-52">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p className="uppercase tracking-[10px] text-gray-500 text-[10px] mb-6">Reach Out</p>
            <h1 className="font-display text-7xl md:text-[8rem] font-bold leading-[0.88] text-white">
              LET'S
              <br />
              <em className="not-italic text-gray-400">Connect</em>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="py-36 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-20">

            {/* FORM — 3 cols */}
            <motion.div {...fadeUp()} className="md:col-span-3">
              <p className="uppercase tracking-[6px] text-gray-400 text-[10px] mb-4">Send a Message</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-10">
                Tell Us About
                <br />
                <em className="not-italic text-gray-400">Your Trophy</em>
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-black text-white rounded-3xl p-12 text-center"
                >
                  <CheckCircle size={40} className="mx-auto mb-5 text-gray-300" />
                  <h3 className="font-display text-3xl font-bold mb-3">Message Received</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Thank you, {form.name.split(" ")[0]}. We'll be in touch within one business day
                    to discuss your project.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[4px] text-gray-500 mb-2">Full Name *</label>
                      <input
                        type="text" name="name" required value={form.name} onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-black transition placeholder:text-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-[4px] text-gray-500 mb-2">Email Address *</label>
                      <input
                        type="email" name="email" required value={form.email} onChange={handleChange}
                        placeholder="john@email.com"
                        className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-black transition placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[4px] text-gray-500 mb-2">Phone Number</label>
                    <input
                      type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="(231) 000-0000"
                      className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-black transition placeholder:text-gray-300"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[4px] text-gray-500 mb-2">Type of Animal</label>
                      <select
                        name="animal" value={form.animal} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-black transition text-gray-600 bg-white"
                      >
                        <option value="">Select animal…</option>
                        {animalTypes.map(a => <option key={a} value={a}>{a}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-[4px] text-gray-500 mb-2">Service Type</label>
                      <select
                        name="service" value={form.service} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-black transition text-gray-600 bg-white"
                      >
                        <option value="">Select service…</option>
                        {serviceTypes.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[4px] text-gray-500 mb-2">Message</label>
                    <textarea
                      name="message" rows={5} value={form.message} onChange={handleChange}
                      placeholder="Tell us about your animal, the hunt, and what you're envisioning…"
                      className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-black transition resize-none placeholder:text-gray-300"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-black text-white py-5 rounded-full text-sm font-semibold uppercase tracking-[4px] hover:bg-gray-800 transition flex items-center justify-center gap-3 disabled:opacity-60"
                  >
                    {sending ? "Sending…" : <><span>Send Message</span><ArrowRight size={16} /></>}
                  </button>
                </form>
              )}
            </motion.div>

            {/* INFO — 2 cols */}
            <motion.div {...fadeUp(0.2)} className="md:col-span-2 space-y-10">

              {/* Contact details */}
              <div>
                <p className="uppercase tracking-[6px] text-gray-400 text-[10px] mb-6">Contact Details</p>
                <div className="space-y-5">
                  {[
                    { icon: <Phone size={16} />, label: "Phone", value: "(231) 818-2707", href: "tel:+12318182707" },
                    { icon: <Mail size={16} />, label: "Email", value: "info@rightwaytaxidermy.com", href: "mailto:info@rightwaytaxidermy.com" },
                    { icon: <MapPin size={16} />, label: "Address", value: "890 W Surrey Rd, Farwell, MI 48622", href: "https://maps.google.com" },
                  ].map(({ icon, label, value, href }) => (
                    <a key={label} href={href} className="flex items-start gap-4 group">
                      <div className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-black group-hover:border-black group-hover:text-white transition duration-300">
                        {icon}
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[4px] text-gray-400 mb-0.5">{label}</p>
                        <p className="text-sm text-gray-700 group-hover:text-black transition">{value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div className="border-t border-gray-100 pt-10">
                <p className="uppercase tracking-[6px] text-gray-400 text-[10px] mb-6 flex items-center gap-2">
                  <Clock size={12} /> Business Hours
                </p>
                <div className="space-y-2">
                  {hours.map(({ day, time }) => (
                    <div key={day} className="flex justify-between items-center text-sm py-1.5 border-b border-gray-50 last:border-0">
                      <span className="text-gray-500">{day}</span>
                      <span className={`font-medium ${time === "Closed" ? "text-gray-300" : "text-black"}`}>{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick tip */}
              <div className="bg-[#f7f6f4] rounded-2xl p-6">
                <p className="text-[10px] uppercase tracking-[4px] text-gray-400 mb-3">Pro Tip</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  For the best results, bring your animal in as soon as possible after harvest —
                  or cape and freeze it within 24 hours. Quality of preservation begins in the field.
                </p>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="h-[480px] relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <iframe
            title="Right Way Taxidermy Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2826.0!2d-84.8757!3d43.8337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDUwJzAxLjMiTiA4NMKwNTInMzIuNSJX!5e0!3m2!1sen!2sus!4v1"
            width="100%" height="100%"
            style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(90%)", opacity: 0.85 }}
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="absolute bottom-6 left-6 bg-black text-white rounded-2xl px-6 py-5 shadow-2xl z-10 max-w-xs">
          <p className="font-display text-lg font-bold mb-1">Right Way Taxidermy</p>
          <p className="text-gray-400 text-xs leading-relaxed">890 W Surrey Rd · Farwell, MI 48622</p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-[10px] uppercase tracking-[4px] text-gray-400 hover:text-white transition flex items-center gap-1.5"
          >
            Get Directions <ArrowRight size={10} />
          </a>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-28 px-6 bg-black text-white text-center">
        <motion.div {...fadeUp()}>
          <p className="uppercase tracking-[8px] text-gray-600 text-[10px] mb-6">Don't Wait</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6">
            Your Memory Deserves
            <br />
            <em className="not-italic text-gray-500">To Last Forever</em>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Call us today or drop by the studio. We'd love to hear about your hunt
            and help you preserve it the right way.
          </p>
          <a
            href="tel:+12318182707"
            className="inline-flex items-center gap-3 bg-white text-black px-12 py-5 rounded-full text-sm font-semibold uppercase tracking-[4px] hover:bg-gray-100 transition"
          >
            <Phone size={16} /> Call (231) 818-2707
          </a>
        </motion.div>
      </section>

    </div>
  )
}

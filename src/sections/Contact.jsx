import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-xl p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
      >
        <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 focus:border-neon outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 focus:border-neon outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 focus:border-neon outline-none resize-none"
          />

          <button
            type="button"
            className="w-full py-3 rounded-xl bg-neon text-black font-semibold hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;

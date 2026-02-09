import { motion } from "framer-motion";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      {/* FLOATING GHOST CAPSULE */}
      <div
        className="
          relative
          flex items-center gap-12
          px-14 py-5
          rounded-full
          border border-white/40
          bg-transparent
        "
      >
        {/* OUTER GLOW (ONLY OUTSIDE, NO FILL) */}
        <div
          className="
            absolute -inset-[6px]
            rounded-full
            border border-cyan-400/30
            blur-lg
            pointer-events-none
          "
        ></div>

        {/* NAME / IDENTITY */}
        <motion.span
          className="
            text-2xl md:text-3xl
            font-bold
            tracking-wide
            text-white
            whitespace-nowrap
          "
          whileHover={{
            color: "#67e8f9",
            textShadow: "0 0 20px rgba(103,232,249,1)"
          }}
          transition={{ duration: 0.25 }}
        >
          Kumaraswamy
        </motion.span>

        {/* NAV LINKS */}
        <div className="flex gap-10 text-sm md:text-base">
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              className="
                relative
                uppercase
                tracking-widest
                text-white/70
              "
              whileHover={{
                color: "#67e8f9",
                textShadow: "0 0 14px rgba(103,232,249,0.9)",
                y: -2
              }}
              transition={{ duration: 0.2 }}
            >
              {link.label}

              {/* THIN GLOW UNDERLINE */}
              <motion.span
                className="absolute left-0 -bottom-2 h-[1px] w-full bg-cyan-300"
                initial={{ scaleX: 0, opacity: 0 }}
                whileHover={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.25 }}
                style={{ transformOrigin: "center" }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

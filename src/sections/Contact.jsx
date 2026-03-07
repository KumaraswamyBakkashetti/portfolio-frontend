import { motion } from "framer-motion";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  hover: { scale: 1.05, color: "#67e8f9" }
};

const Contact = () => {
  return (
    <footer
      id="contact"
      className="relative bg-transparent text-white py-16"
    >
      {/* subtle glass overlay */}
      <motion.div
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 -z-10 bg-white/10 backdrop-blur-2xl"
      />


      <div className="relative max-w-3xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="relative flex flex-col items-center space-y-8 px-8 py-10 rounded-2xl"
        >
        <motion.h2 variants={item} className="text-2xl font-semibold tracking-wide">
          Get in touch
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.a
            variants={item}
            href="mailto:kumaraswamybakkashetti@gmail.com"
            className="flex items-center gap-3 text-neon hover:text-white/90 transition-colors"
            whileHover="hover"
          >
            <AiOutlineMail size={28} />
            <span>kumaraswamybakkashetti@gmail.com</span>
          </motion.a>

          <motion.a
            variants={item}
            href="https://www.linkedin.com/in/kumaraswamy-bakkashetti-5164482b0/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-neon hover:text-white/90 transition-colors"
            whileHover="hover"
          >
            <AiFillLinkedin size={28} />
            <span>linkedin.com/in/kumaraswamy-bakkashetti-5164482b0</span>
          </motion.a>

          <motion.a
            variants={item}
            href="https://github.com/KumaraswamyBakkashetti"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-neon hover:text-white/90 transition-colors"
            whileHover="hover"
          >
            <AiFillGithub size={28} />
            <span>github.com/KumaraswamyBakkashetti</span>
          </motion.a>
        </div>

        <motion.p variants={item} className="text-sm text-muted mt-4">
          &copy; {new Date().getFullYear()} Kumaraswamy
        </motion.p>
      </motion.div>
      </div>
    </footer>
  );
};

export default Contact;

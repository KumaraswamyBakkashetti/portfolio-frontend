import { motion } from "framer-motion";

const SplitText = ({ text, className }) => {
  const letters = text.split("");

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.04
          }
        }
      }}
      className={`inline-block ${className}`}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { y: "100%", opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { ease: "easeOut", duration: 0.6 }
            }
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default SplitText;

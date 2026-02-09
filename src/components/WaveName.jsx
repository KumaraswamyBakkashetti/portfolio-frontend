import { motion } from "framer-motion";

const WaveName = ({ text }) => {
  return (
    <span className="inline-flex">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block cursor-default"
          whileHover={{
            y: -18
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

export default WaveName;

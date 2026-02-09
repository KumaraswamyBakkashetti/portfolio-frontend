import { motion } from "framer-motion";

const ProjectCard = ({ title, desc }) => {
  return (
    <motion.div
      whileHover="hover"
      className="relative h-[320px] rounded-3xl overflow-hidden bg-white/5 border border-white/10"
    >
      <motion.div
        variants={{
          hover: { scale: 1.1 }
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-br from-neon/30 to-transparent"
      />

      <motion.div
        variants={{
          hover: { opacity: 1, y: 0 }
        }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 flex flex-col justify-end p-8"
      >
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted">{desc}</p>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;

import { motion } from "framer-motion";
import {
  SiPython,
  SiFastapi,
  SiOpenai,
  SiPandas,
  SiNumpy,
  SiReact,
  SiPostgresql,
  SiGithub
} from "react-icons/si";

const techIconMap = {
  Python: SiPython,
  FastAPI: SiFastapi,
  LLMs: SiOpenai,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  React: SiReact,
  "Frontend Visualization": SiReact,
  PostgreSQL: SiPostgresql,
  LangChain: SiGithub // placeholder icon
};

const ProjectCard = ({ title, subtitle, desc, tech, url }) => {
  const content = (
    <motion.div
      whileHover="hover"
      className="relative h-[340px] rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-lg"
    >
      {/* animated gradient glow */}
      <motion.div
        variants={{ hover: { scale: 1.05, rotate: 1 } }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-br from-neon/40 to-neonPink/20 opacity-60"
      />

      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-8 bg-black/30"
      >
        <h3 className="text-2xl font-bold mb-1">{title}</h3>
        {subtitle && (
          <p className="text-sm text-neonPink italic mb-3">{subtitle}</p>
        )}
        <p className="text-muted text-sm mb-4 leading-snug">{desc}</p>
        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => {
              const Icon = techIconMap[t] || SiGithub;
              return (
                <div
                  key={i}
                  className="flex items-center gap-1 px-2 py-1 bg-white/10 rounded-full text-xs"
                >
                  <Icon className="w-4 h-4" />
                  <span>{t}</span>
                </div>
              );
            })}
          </div>
        )}
      </motion.div>
    </motion.div>
  );

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

export default ProjectCard;

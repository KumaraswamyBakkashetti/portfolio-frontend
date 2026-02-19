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
      className="relative h-[340px] rounded-3xl p-[2px] bg-gradient-to-br from-neon to-neonPink shadow-lg group hover:shadow-2xl hover:scale-105 transition-transform"
    >
      {/* inner black container */}
      <div className="absolute inset-0 bg-black/20 rounded-3xl" />

      {/* badge with initial */}
      <div className="absolute top-4 left-4 w-8 h-8 bg-neonPink text-black rounded-full flex items-center justify-center text-xs font-bold z-20">
        {title && title.charAt(0)}
      </div>

      <motion.div
        className="relative z-10 absolute inset-0 flex flex-col justify-end p-8 bg-black/60 rounded-3xl"
      >
        <h3 className="text-2xl font-bold mb-1 text-white uppercase tracking-wide">{title}</h3>
        {subtitle && (
          <p className="text-sm text-neonPink italic mb-3">{subtitle}</p>
        )}
        <p className="text-white text-sm mb-4 leading-snug">{desc}</p>
        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => {
              const Icon = techIconMap[t] || SiGithub;
              return (
                <div
                  key={i}
                  className="flex items-center gap-1 px-2 py-1 bg-white/20 rounded-full text-xs text-white"
                >
                  <Icon className="w-4 h-4 text-white" />
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

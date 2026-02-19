// icons for each skill
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiMysql,
  SiAmazonaws,
  SiDocker,
  SiOpenai,
  SiC,
  SiCplusplus,
  SiFastapi,
  SiFlask,
  SiNextdotjs,
  SiPostgresql,
  SiSqlite,
  SiOracle,
  SiJenkins,
  SiGithub
} from "react-icons/si";

// represent each skill with meta data for color/icon
const ALL_SKILLS = [
  // languages
  { label: "Python", Icon: SiPython, color: "#3776ab" },
  { label: "Java", Icon: null, color: "#007396" },
  { label: "C", Icon: SiC, color: "#555555" },
  { label: "C++", Icon: SiCplusplus, color: "#00599c" },
  { label: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
  // frameworks & libraries
  { label: "FastAPI", Icon: SiFastapi, color: "#009688" },
  { label: "Flask", Icon: SiFlask, color: "#000000" },
  { label: "Node.js", Icon: SiNodedotjs, color: "#539e43" },
  { label: "Express", Icon: SiExpress, color: "#000000" },
  { label: "React", Icon: SiReact, color: "#61dafb" },
  { label: "Next.js", Icon: SiNextdotjs, color: "#000000" },
  // databases
  { label: "SQL", Icon: SiMysql, color: "#4479a1" },
  { label: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
  { label: "MongoDB", Icon: SiMongodb, color: "#47a248" },
  { label: "SQLite", Icon: SiSqlite, color: "#003b57" },
  { label: "Oracle", Icon: SiOracle, color: "#f80000" },
  // ai / tools
  { label: "LLMs", Icon: SiOpenai, color: "#000000" },
  { label: "AWS", Icon: SiAmazonaws, color: "#ff9900" },
  { label: "Docker", Icon: SiDocker, color: "#2496ed" },
  { label: "Jenkins", Icon: SiJenkins, color: "#d24939" },
  { label: "Git", Icon: SiGithub, color: "#f05032" },
  // core CS concepts (no icons)
  { label: "Data Structures & Algorithms", Icon: null, color: "#8b5cf6" },
  { label: "OOP", Icon: null, color: "#a3a3a3" },
  { label: "REST APIs", Icon: null, color: "#10b981" },
  { label: "System Design", Icon: null, color: "#ec4899" }
];



const Skills = () => {
  // static presentation of skills as bars

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      {/* TITLE */}
      <h2
        className="
          absolute top-20
          text-4xl md:text-5xl font-bold
          text-white
          drop-shadow-[0_8px_40px_rgba(120,0,200,1)]
          uppercase tracking-widest
        "
      >
        Skills
      </h2>

      {/* STATIC BARS GRID */}
      {/* glow circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-neon/10 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-neonPink/10 rounded-full blur-2xl" />
      </div>
      <div className="relative z-10 w-full max-w-4xl mt-32 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {ALL_SKILLS.map(skill => (
          <div
            key={skill.label}
            className="flex items-center gap-3 p-4 rounded-lg shadow-inner transition-all duration-300 hover:scale-105 hover:bg-white/30"
            style={{ borderLeft: `6px solid ${skill.color}` }}
          >
            {skill.Icon && (
              <skill.Icon
                className="w-6 h-6 hover:animate-pulse"
                style={{ color: skill.color }}
              />
            )}
            <span className="text-white font-medium">
              {skill.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

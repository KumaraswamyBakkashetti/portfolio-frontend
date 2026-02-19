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
  SiOpenai
} from "react-icons/si";

// represent each skill with meta data for color/icon
const ALL_SKILLS = [
  { label: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
  { label: "React", Icon: SiReact, color: "#61dafb" },
  { label: "Node.js", Icon: SiNodedotjs, color: "#539e43" },
  { label: "Express", Icon: SiExpress, color: "#000000" },
  { label: "MongoDB", Icon: SiMongodb, color: "#47a248" },
  { label: "Python", Icon: SiPython, color: "#3776ab" },
  { label: "SQL", Icon: SiMysql, color: "#4479a1" },
  { label: "AWS", Icon: SiAmazonaws, color: "#ff9900" },
  { label: "Docker", Icon: SiDocker, color: "#2496ed" },
  { label: "LLMs", Icon: SiOpenai, color: "#000000" }
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
        "
      >
        Skills
      </h2>

      {/* STATIC BARS GRID */}
      <div className="relative z-10 w-full max-w-4xl mt-32 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {ALL_SKILLS.map(skill => (
          <div
            key={skill.label}
            className="flex items-center gap-3 p-4 rounded-lg transition-transform hover:scale-105"
            style={{ backgroundColor: skill.color + "bb" }}
          >
            {skill.Icon && <skill.Icon className="w-6 h-6 text-white" />}
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

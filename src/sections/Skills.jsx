import { motion } from "framer-motion";
import { useState } from "react";

const ALL_SKILLS = [
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Python",
  "SQL",
  "AWS",
  "Docker",
  "LLMs"
];

const random = (min, max) => Math.random() * (max - min) + min;

const SkillBall = ({ label, onSelect }) => {
  const size = random(80, 105);
  const startX = random(5, 80);
  const fallDistance = 300;
  const bounceHeight = random(40, 70);

  return (
    <motion.div
      className="
        absolute
        flex items-center justify-center
        rounded-full
        text-white font-semibold
        border border-purple-400/90
        bg-white/10
        backdrop-blur-sm
        drop-shadow-[0_10px_28px_rgba(0,0,0,1)]
        select-none
        cursor-pointer
      "
      style={{
        width: size,
        height: size,
        left: `${startX}%`
      }}
      initial={{ y: -140 }}
      animate={{
        y: [
          0,
          fallDistance,
          fallDistance - bounceHeight,
          fallDistance
        ]
      }}
      transition={{
        duration: random(3.5, 5),
        times: [0, 0.65, 0.85, 1],
        ease: ["easeIn", "easeOut", "easeIn"]
      }}
      whileHover={{
        scale: 1.1,
        boxShadow:
          "0 0 22px rgba(168,85,247,1), 0 0 44px rgba(220,38,38,0.8)"
      }}
      onClick={() => onSelect(label)}
    >
      {label}
    </motion.div>
  );
};

const Skills = () => {
  const [activeSkills, setActiveSkills] = useState(ALL_SKILLS);
  const [collected, setCollected] = useState([]);

  const handleSelect = skill => {
    setActiveSkills(prev => prev.filter(s => s !== skill));
    setCollected(prev => [...prev, skill]);
  };

  const reset = () => {
    setTimeout(() => {
      setCollected([]);
      setActiveSkills(ALL_SKILLS);
    }, 1200);
  };

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

      {/* MAIN LAYOUT */}
      <div className="relative z-10 w-full max-w-7xl flex gap-10">
        {/* LEFT COLLECTED */}
        <div className="w-1/5 flex flex-col gap-4 justify-start items-center pt-40">
          {collected
            .slice(Math.ceil(collected.length / 2))
            .map(skill => (
              <div
                key={skill}
                className="
                  px-4 py-2
                  rounded-full
                  border border-purple-400/80
                  text-white text-sm
                  drop-shadow-[0_4px_16px_rgba(0,0,0,1)]
                "
              >
                {skill}
              </div>
            ))}
        </div>

        {/* BOUNCE BOX */}
        <div
          className="
            relative
            w-3/5
            h-[420px]
            rounded-3xl
            border border-purple-400/70
            bg-black/25
            backdrop-blur-sm
            overflow-hidden
          "
        >
          {activeSkills.map(skill => (
            <SkillBall
              key={skill}
              label={skill}
              onSelect={handleSelect}
            />
          ))}

          {activeSkills.length === 0 && reset()}
        </div>

        {/* RIGHT COLLECTED */}
        <div className="w-1/5 flex flex-col gap-4 justify-start items-center pt-40">
          {collected
            .slice(0, Math.ceil(collected.length / 2))
            .map(skill => (
              <div
                key={skill}
                className="
                  px-4 py-2
                  rounded-full
                  border border-purple-400/80
                  text-white text-sm
                  drop-shadow-[0_4px_16px_rgba(0,0,0,1)]
                "
              >
                {skill}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

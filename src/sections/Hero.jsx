import { motion, useScroll, useTransform } from "framer-motion";
import SplitText from "../components/SplitText";
import Magnetic from "../components/Magnetic";
import VideoBackground from "../components/VideoBackground";
import WaveName from "../components/WaveName";

const Hero = () => {
     const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 300], [0, -80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.6]);
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 text-center overflow-hidden">
  <VideoBackground src="/videos/hero.mp4" />
     <div className="max-w-5xl">
  <motion.h1
    style={{ y, opacity }}
    className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
  >
    {/* NAME WITH WAVE EFFECT */}
    <span className="block text-neon">
      <WaveName text="Kumaraswamy" />
    </span>

    {/* SUBTITLE WITH SPLIT ANIMATION */}
    <SplitText
      text="Creative Developer"
      className="block"
    />
  </motion.h1>



        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-xl text-muted mb-12"
        >
          I craft immersive digital experiences
          with motion, depth, and intent.
        </motion.p>

        <div className="flex justify-center gap-8">
          <Magnetic>
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-neon text-black font-semibold"
            >
              View Work
            </a>
          </Magnetic>

          <Magnetic>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border border-neon text-neon"
            >
              Contact
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
};

export default Hero;

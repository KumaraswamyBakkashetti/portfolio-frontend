import { useEffect } from "react";

const CursorGlow = () => {
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");

    const move = e => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      id="cursor-glow"
      className="fixed w-40 h-40 bg-neon/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"
    ></div>
  );
};

export default CursorGlow;

const BackgroundGlow = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 w-[500px] h-[500px] bg-neon/20 rounded-full blur-[160px]"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-neonPink/20 rounded-full blur-[140px]"></div>
    </div>
  );
};

export default BackgroundGlow;

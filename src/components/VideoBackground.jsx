import { useRef, useEffect } from "react";

const VideoBackground = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // 🔥 slow motion (0.25–0.75 sweet spot)
    }
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={src}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0"></div>
    </div>
  );
};

export default VideoBackground;

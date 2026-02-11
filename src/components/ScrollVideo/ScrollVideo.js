import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './ScrollVideo.css';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideo({ src }) {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    if (!video || !section) return;

    const onLoadedMetadata = () => {
      video.pause();

      gsap.to(video, {
        currentTime: video.duration,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",   // Video kommt ins Viewport
          end: "bottom top",     // Video verlässt Viewport
          scrub: true,
        },
      });
    };

    video.addEventListener("loadedmetadata", onLoadedMetadata);

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="scroll-video-section">
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="auto"
      />
    </section>
  );
}

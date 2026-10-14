/*export default function Works() {  // <--- Add "default" here
  return (
    <div className="pt-24 px-24 text-slate-500">
      <h1 className="px-24 text-3xl font-bold mt-8 mb-8">gallery</h1>
      <p className="px-24 text-xl font-bold">here are some of my past projects:</p>
    </div>
  );
}*/
import { useEffect, useRef } from "react";

// Swap these out for your own project screenshots.
const images = [
  "https://images.unsplash.com/photo-1585958104134-6eda85d6239c?q=80&w=2148&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1587161584760-f51779fb276a?q=80&w=2370&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1632252036457-f6d3dab5572f?q=80&w=2148&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1495805442109-bf1cf975750b?auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1512154643520-30666dd9511d?q=80&w=3266&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1496753480864-3e588e0269b3?auto=format&fit=crop&w=2134&q=80",
  "https://images.unsplash.com/photo-1613346945084-35cccc812dd5?auto=format&fit=crop&w=1759&q=80",
  "https://images.unsplash.com/photo-1733835076200-c869cad8eb1f?q=80&w=2370&auto=format&fit=crop",
];

export default function Works() {
  const trackRef = useRef(null);
  const mouseDownAt = useRef(null);
  const prevPercentage = useRef(0);
  const percentage = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleOnDown = (e) => {
      mouseDownAt.current = e.clientX;
    };

    const handleOnUp = () => {
      mouseDownAt.current = null;
      prevPercentage.current = percentage.current;
    };

    const handleOnMove = (e) => {
      if (mouseDownAt.current === null) return;

      const mouseDelta = mouseDownAt.current - e.clientX;
      const maxDelta = window.innerWidth / 2;

      const change = (mouseDelta / maxDelta) * -100;
      const next = Math.max(Math.min(prevPercentage.current + change, 0), -100);

      percentage.current = next;

      track.animate(
        { transform: `translate(${next}%, -50%)` },
        { duration: 1200, fill: "forwards" }
      );

      for (const image of track.getElementsByClassName("gallery-image")) {
        image.animate(
          { objectPosition: `${100 + next}% center` },
          { duration: 1200, fill: "forwards" }
        );
      }
    };

    const onTouchStart = (e) => handleOnDown(e.touches[0]);
    const onTouchMove = (e) => handleOnMove(e.touches[0]);

    window.addEventListener("mousedown", handleOnDown);
    window.addEventListener("mouseup", handleOnUp);
    window.addEventListener("mousemove", handleOnMove);
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", handleOnUp);
    window.addEventListener("touchmove", onTouchMove);

    return () => {
      window.removeEventListener("mousedown", handleOnDown);
      window.removeEventListener("mouseup", handleOnUp);
      window.removeEventListener("mousemove", handleOnMove);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", handleOnUp);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden text-slate-500">
      {/* Heading — pointer-events-none so dragging works anywhere on the page */}
      <div className="absolute top-0 left-0 w-full pt-24 px-6 md:px-24 z-10 pointer-events-none select-none">
        <h1 className="md:px-24 text-3xl font-bold mt-8 mb-8">gallery</h1>
        <p className="md:px-24 text-xl font-bold">
          here are some of my past projects:
        </p>
      </div>

      {/* Sliding image track */}
      <div
        ref={trackRef}
        className="mt-8 absolute left-1/2 top-1/2 flex gap-[4vmin] select-none cursor-grab"
        style={{ transform: "translate(0%, -50%)" }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`project ${i + 1}`}
            draggable={false}
            className="gallery-image w-[40vmin] h-[56vmin] object-cover"
            style={{ objectPosition: "100% center" }}
          />
        ))}
      </div>

      {/* Center crosshair */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[15px] h-[15px] pointer-events-none">
        <div className="absolute top-0 left-[75%] -translate-x-[75%] w-[1.5px] h-[150%] bg-slate-400" />
        <div className="absolute left-0 top-[75%] -translate-y-[75%] h-[1.5px] w-[150%] bg-slate-400" />
      </div>
    </div>
  );
}
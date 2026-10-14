import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
 
export default function CursorGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
 
  const springConfig = { stiffness: 75, damping: 30 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
 
  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX - 150);
      mouseY.set(event.clientY - 150);
    };
 
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);
 
  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="fixed top-0 left-0 w-[300px] h-[300px] bg-slate-400/70 rounded-full blur-[100px] -z-10 pointer-events-none"
    />
  );
}
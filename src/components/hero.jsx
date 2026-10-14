import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
};

export default function Hero() {

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
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative pt-20">
      {/* Glow Effect */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        // Key changes here:
        // 1. 'fixed top-0 left-0': Positions it relative to the window
        // 2. 'pointer-events-none': Ensures clicks pass THROUGH the blob to buttons
        className="fixed top-0 left-0 w-[300px] h-[300px] bg-slate-400/70 rounded-full blur-[100px] -z-10 pointer-events-none" 
      />
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl"
      >
        <motion.h1 variants={itemVariants} className="text-5xl text-[#D5D5D8] md:text-7xl font-bold tracking-tight mb-6 select-none">
          Building<br />
          <span className="text-9xl text-slate-500 select-none">fun things</span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-xl font-bold text-slate-400 mb-8 max-w-2xl mx-auto select-none">
          feel free to stay a while.
        </motion.p>
        
        <Link to="/works">
          <motion.div variants={itemVariants} className="flex gap-4 justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9, rotate: 3 }}
              className="px-8 py-3 bg-[#E0E0E3] text-slate-400 rounded-full font-semibold hover:bg-brand-500 transition-colors cursor-pointer select-none">
              view my works
            </motion.button>
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
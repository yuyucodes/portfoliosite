import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar({ onLogoClick }) {

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = (e) => {
    e.preventDefault(); // Stop standard link behavior
    
    // If we are already on home, just replay animation
    if (location.pathname === '/') {
      onLogoClick(); 
    } else {
      // If we are NOT on home, go there
      navigate('/');
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-slate-500/85 backdrop-blur-sm border-b border-white/10"
    >
      <Link to="/">
        <motion.a
          onClick={handleLogoClick}
          whileHover={{ scale: 1.2 }}
          className="px-20 inline-block text-2xl font-bold bg-gradient-to-r from-brand-600 to-amber-100 bg-clip-text text-transparent select-none"
          >
          yuyucodes.&#123; &#125;
        </motion.a>
      </Link>

      <div className="flex gap-6 text-base font-semibold bg-gradient-to-r from-brand-600 to-amber-50 bg-clip-text text-transparent">
        {/* 1. WORK LINK */}
        <Link to="/works">
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.2 }}
            className="hover:text-[#F0EEE9] transition-colors mt-[8px] inline-block select-none"
          >
            Gallery
          </motion.a>
        </Link>

        {/* 2. ABOUT LINK */}
        <Link to="/about">
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.2 }}
            className="hover:text-[#F0EEE9] transition-colors mt-[8px] inline-block select-none"
          >
            About
          </motion.a>
        </Link>

        {/* 3. CONTACT BUTTON */}
        <Link to="/contact">
          <motion.button 
            // The tap animation you requested
            whileTap={{ scale: 0.9, rotate: 3 }}
            // I added a subtle hover here too so it doesn't feel dead
            whileHover={{ scale: 1.05 }}
            className="mr-15 px-4 py-2 text-slate-500/90 bg-brand-600 rounded-full hover:bg-[#F0EEE9] transition-colors cursor-pointer select-none"
          >
            Contact
          </motion.button>
        </Link>
      </div>
    </motion.nav>
  );
}
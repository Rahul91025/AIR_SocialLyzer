import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, BarChart2 } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Dashboard", "Features", "Team", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2"
            >
              <BarChart2 className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-blue-600">
                SocialLyzer
              </span>
            </motion.div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item}
                href={
                  item === "Dashboard"
                    ? "https://dashboard-sociallyzer.onrender.com/"
                    : `#${item.toLowerCase()}`
                }
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item}
              </motion.a>
            ))}
            <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
  onClick={() => window.location.href = "https://bot-y109.onrender.com/"}
>
  Try Demo
</motion.button>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? "auto" : 0,
        }}
        className="md:hidden bg-white"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <a
              key={item}
              href={
                item === "Dashboard"
                  ? "https://dashboard-sociallyzer.onrender.com/"
                  : `#${item.toLowerCase()}`
              }
              className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              {item}
            </a>
          ))}
          <button
  onClick={() => window.location.href = "https://bot-y109.onrender.com/"}
  className="w-full px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
>
  Try Demo
</button>

        </div>
      </motion.div>
      <hr />
    </motion.nav>
  );
};

export default Navbar;

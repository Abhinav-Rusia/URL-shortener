import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLink2, FiMenu, FiX, FiHome, FiBox, FiInfo, FiArrowRight } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 25 }
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, overflow: "hidden" },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    }
  };

  return (
    <motion.nav
      className="bg-white/80 backdrop-blur-md dark:bg-gray-800/80 shadow-md sticky top-0 z-50"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand Name */}
          <motion.div
            className="flex items-center"
            variants={itemVariants}
          >
            <div className="flex-shrink-0 flex items-center">
              {/* Link Icon with gradient */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full blur-sm opacity-70"></div>
                <motion.div
                  className="relative z-10"
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <FiLink2 className="h-8 w-8 text-white" />
                </motion.div>
              </div>
              <motion.span
                className="ml-2 text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 animate-gradient"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                LittleUrl
              </motion.span>
            </div>
          </motion.div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="#"
              className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium flex items-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <FiHome className="mr-1" /> Home
            </motion.a>
            <motion.a
              href="#features"
              className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium flex items-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <FiBox className="mr-1" /> Features
            </motion.a>
            <motion.a
              href="#about"
              className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium flex items-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <FiInfo className="mr-1" /> About
            </motion.a>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <motion.button
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg flex items-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              Get Started <FiArrowRight className="ml-1" />
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-4 md:hidden flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 focus:outline-none"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className="md:hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-md py-2 px-4 overflow-hidden"
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        variants={mobileMenuVariants}
      >
        <div className="flex flex-col space-y-2">
          <motion.a
            href="#"
            className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium flex items-center"
            onClick={() => setIsMenuOpen(false)}
            variants={itemVariants}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <FiHome className="mr-2" /> Home
          </motion.a>
          <motion.a
            href="#features"
            className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium flex items-center"
            onClick={() => setIsMenuOpen(false)}
            variants={itemVariants}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <FiBox className="mr-2" /> Features
          </motion.a>
          <motion.a
            href="#about"
            className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium flex items-center"
            onClick={() => setIsMenuOpen(false)}
            variants={itemVariants}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <FiInfo className="mr-2" /> About
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

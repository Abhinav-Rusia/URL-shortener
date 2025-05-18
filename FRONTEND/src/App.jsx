import React from 'react';
import { motion } from 'framer-motion';
import UrlShortener from './components/UrlShortener';
import Navbar from './components/Navbar';
import { FiZap, FiLink, FiBarChart2 } from 'react-icons/fi';

const App = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  const featureCardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Decorative elements - more subtle */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 bg-purple-100 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-10"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-96 -left-20 w-72 h-72 bg-indigo-100 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-10"
          animate={{
            x: [0, -20, 0],
            y: [0, 40, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-24 right-96 w-80 h-80 bg-pink-100 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-10"
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <Navbar />

      <motion.main
        className="container mx-auto px-4 py-8 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-12 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          >
            Transform Long URLs into <motion.span
              className="text-purple-600 dark:text-purple-400"
              animate={{
                color: ["#9333ea", "#4f46e5", "#db2777", "#9333ea"],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >Short Links</motion.span>
          </motion.h1>
          <motion.p
            className="mt-4 text-gray-700 dark:text-gray-300 text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Make your links <span className="text-purple-600 dark:text-purple-400 font-medium">shorter</span>,
            <span className="text-indigo-600 dark:text-indigo-400 font-medium"> shareable</span>, and
            <span className="text-pink-600 dark:text-pink-400 font-medium"> trackable</span> in seconds!
          </motion.p>
        </motion.div>

        <UrlShortener />

        {/* Features Section */}
        <motion.div
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={itemVariants}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-purple-100 dark:border-purple-900 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95"
            variants={featureCardVariants}
            whileHover="hover"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-4">
              <FiZap size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Super Fast</h3>
            <p className="text-gray-600 dark:text-gray-300">Create short links in seconds and share them instantly.</p>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-purple-100 dark:border-purple-900 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95"
            variants={featureCardVariants}
            whileHover="hover"
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4">
              <FiLink size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Easy to Share</h3>
            <p className="text-gray-600 dark:text-gray-300">Perfect for social media, messaging apps, and emails.</p>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-purple-100 dark:border-purple-900 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95"
            variants={featureCardVariants}
            whileHover="hover"
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 mb-4">
              <FiBarChart2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Track Clicks</h3>
            <p className="text-gray-600 dark:text-gray-300">See how many people click on your shortened links.</p>
          </motion.div>
        </motion.div>
      </motion.main>

      <motion.footer
        className="mt-16 py-8 text-center text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <p>© {new Date().getFullYear()} LittleUrl. All rights reserved.</p>
      </motion.footer>
    </div>
  );
};

export default App;
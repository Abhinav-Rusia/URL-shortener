import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLink, FiCopy, FiCheck, FiLoader } from 'react-icons/fi';
import api from '../utils/api';

const UrlShortener = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!url) {
      setError('Please enter a URL');
      return;
    }

    try {
      setLoading(true);
      setError('');

      const response = await api.post('/api/create', { url });
      setShortUrl(response.data.shortUrl);
    } catch (err) {
      setError(
        err.response?.data?.message ||
        'Failed to connect to the server'
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
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

  const resultVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    }
  };

  return (
    <motion.div
      className="w-full max-w-3xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* URL Input Form */}
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8 border border-purple-100 dark:border-purple-900 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95"
        variants={itemVariants}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <div className="absolute left-4 top-4 text-gray-400 dark:text-gray-500">
              <FiLink size={20} />
            </div>
            <motion.input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste your loooong URL here..."
              className="w-full pl-12 pr-5 py-4 bg-gray-50 dark:bg-gray-700 border-2 border-purple-200 dark:border-purple-700 rounded-xl focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 text-gray-800 dark:text-white placeholder-gray-400 transition-all duration-300"
              whileFocus={{ scale: 1.005 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            />
            <div className="flex mt-4 md:mt-0 md:absolute md:right-2 md:top-2">
              <motion.button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-xl disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <FiLoader className="animate-spin mr-2" />
                    Shortening...
                  </span>
                ) : (
                  'Make it short!'
                )}
              </motion.button>
            </div>
          </div>
          {error && (
            <motion.p
              className="text-red-500 dark:text-red-400 text-sm font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {error}
            </motion.p>
          )}
        </form>
      </motion.div>

      {/* Results */}
      {shortUrl && (
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-purple-100 dark:border-purple-900 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95"
          variants={resultVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.h3
            className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-purple-500 mr-2">✨</span> Your short URL is ready!
          </motion.h3>
          <motion.div
            className="flex flex-col md:flex-row items-center gap-4 mt-3 bg-gray-50 dark:bg-gray-700 p-4 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 300, damping: 25 }}
          >
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 dark:text-purple-400 font-medium break-all flex-grow hover:underline"
            >
              {shortUrl}
            </a>
            <motion.button
              onClick={copyToClipboard}
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-medium py-2 px-4 rounded-lg flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {copied ? (
                <>
                  <FiCheck className="mr-2" />
                  Copied!
                </>
              ) : (
                <>
                  <FiCopy className="mr-2" />
                  Copy URL
                </>
              )}
            </motion.button>
          </motion.div>
          <motion.p
            className="text-gray-500 dark:text-gray-400 text-sm mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Share this link with your friends, on social media, or anywhere you want!
          </motion.p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default UrlShortener;

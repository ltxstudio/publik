import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckIcon, XIcon } from "@heroicons/react/outline"; // Icons for valid/invalid
import { minify } from "html-minifier-terser"; // For HTML minification

const ToolHtmlMinifier = () => {
  const [input, setInput] = useState("");
  const [minifiedHtml, setMinifiedHtml] = useState("");
  const [isMinified, setIsMinified] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const handleMinify = () => {
    try {
      const result = minify(input, {
        collapseWhitespace: true, // Remove unnecessary spaces
        removeComments: true, // Remove comments
        minifyJS: true, // Minify JavaScript inside the HTML
        minifyCSS: true, // Minify CSS inside the HTML
        removeAttributeQuotes: true, // Remove unnecessary quotes from attributes
      });
      setMinifiedHtml(result);
      setIsMinified(true);
      setError("");
    } catch (e) {
      setMinifiedHtml("");
      setIsMinified(false);
      setError("Failed to minify the HTML. Please check the input.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">HTML Minifier</h1>

      <textarea
        className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
        placeholder="Paste your HTML here..."
        value={input}
        onChange={handleInputChange}
        rows="8"
      ></textarea>

      <motion.button
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        onClick={handleMinify}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Minify HTML
      </motion.button>

      {isMinified !== null && (
        <div
          className={`mt-4 p-4 border rounded-lg ${isMinified ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
        >
          <div className="flex items-center">
            {isMinified ? (
              <CheckIcon className="w-6 h-6 mr-2 text-green-600" />
            ) : (
              <XIcon className="w-6 h-6 mr-2 text-red-600" />
            )}
            <p>{isMinified ? "HTML Minified Successfully!" : error}</p>
          </div>
        </div>
      )}

      {minifiedHtml && isMinified && (
        <div className="mt-8">
          <h3 className="font-semibold mb-2">Minified HTML Output:</h3>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={minifiedHtml}
            readOnly
            rows="8"
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default ToolHtmlMinifier;

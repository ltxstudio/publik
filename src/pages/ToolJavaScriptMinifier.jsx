import React, { useState } from "react";
import { motion } from "framer-motion";

// JavaScript Minifier function
const javascriptMinifier = (code) => {
  return code
    .replace(/\s+/g, " ")  // Replace multiple spaces with a single space
    .replace(/\/\/.*$/gm, "")  // Remove single-line comments
    .replace(/\/\*[\s\S]*?\*\//g, "")  // Remove multi-line comments
    .replace(/\n/g, "")  // Remove newlines
    .replace(/\s*([{}();,])\s*/g, "$1");  // Remove unnecessary spaces around symbols
};

const ToolJavaScriptMinifier = () => {
  const [inputCode, setInputCode] = useState(""); // State to hold user input
  const [minifiedCode, setMinifiedCode] = useState(""); // State to hold minified result
  const [error, setError] = useState(""); // Error state to handle input validation
  const [isLoading, setIsLoading] = useState(false); // Loading state while processing

  const handleInputChange = (e) => {
    setInputCode(e.target.value);
  };

  const handleMinify = () => {
    if (!inputCode.trim()) {
      setError("Please enter JavaScript code to minify.");
      return;
    }

    setError("");
    setIsLoading(true);
    setMinifiedCode("");

    try {
      // Minify the JavaScript code
      const result = javascriptMinifier(inputCode);
      setMinifiedCode(result);
    } catch (err) {
      setError("An error occurred while minifying the code.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">JavaScript Minifier</h1>

      <textarea
        className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
        placeholder="Enter JavaScript code here"
        value={inputCode}
        onChange={handleInputChange}
        rows="6"
      ></textarea>

      <motion.button
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        onClick={handleMinify}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={isLoading}
      >
        {isLoading ? "Minifying..." : "Minify Code"}
      </motion.button>

      {error && (
        <div className="mt-4 p-4 border rounded-lg bg-red-100 text-red-700">
          <p>{error}</p>
        </div>
      )}

      {minifiedCode && (
        <div className="mt-8">
          <h3 className="font-semibold mb-2">Minified JavaScript:</h3>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={minifiedCode}
            readOnly
            rows="6"
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default ToolJavaScriptMinifier;

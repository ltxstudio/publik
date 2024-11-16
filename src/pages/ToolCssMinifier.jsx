import React, { useState } from "react";
import { motion } from "framer-motion";

// Function to Minify CSS
const minifyCss = (css) => {
  try {
    // Remove comments, extra spaces, and line breaks
    const minified = css
      .replace(/\s+/g, " ")               // Replace multiple spaces with a single space
      .replace(/\/\*[\s\S]*?\*\//g, "")   // Remove comments
      .replace(/\s*([{:;})])\s*/g, "$1")  // Remove spaces around braces, colons, and semicolons
      .trim();                            // Trim any extra spaces at the start/end
    return minified;
  } catch (e) {
    return "Invalid CSS input!";
  }
};

const ToolCssMinifier = () => {
  const [cssInput, setCssInput] = useState("");
  const [minifiedCss, setMinifiedCss] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleMinify = () => {
    if (!cssInput.trim()) {
      setError("Please enter CSS code.");
      return;
    }

    setError("");
    setIsLoading(true);
    setMinifiedCss("");

    const result = minifyCss(cssInput);
    if (result === "Invalid CSS input!") {
      setError("Invalid CSS input!");
    } else {
      setMinifiedCss(result);
    }
    setIsLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">CSS Minifier</h1>

      <div className="space-y-4">
        <div>
          <label className="block text-lg font-medium mb-2">Enter CSS</label>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={cssInput}
            onChange={(e) => setCssInput(e.target.value)}
            placeholder="Enter your CSS code here"
            rows="8"
          />
        </div>
      </div>

      <motion.button
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors mt-6"
        onClick={handleMinify}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={isLoading}
      >
        {isLoading ? "Minifying..." : "Minify CSS"}
      </motion.button>

      {error && (
        <div className="mt-4 p-4 border rounded-lg bg-red-100 text-red-700">
          <p>{error}</p>
        </div>
      )}

      {minifiedCss && (
        <div className="mt-8">
          <h3 className="font-semibold mb-2">Minified CSS:</h3>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={minifiedCss}
            readOnly
            rows="8"
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default ToolCssMinifier;

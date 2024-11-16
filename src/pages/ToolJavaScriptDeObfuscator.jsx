import React, { useState } from "react";
import { motion } from "framer-motion";
import { js_beautify } from "js-beautify"; // Import beautify library

const ToolJavaScriptDeObfuscator = () => {
  const [inputCode, setInputCode] = useState(""); // State to hold obfuscated code
  const [deObfuscatedCode, setDeObfuscatedCode] = useState(""); // State to hold beautified code
  const [error, setError] = useState(""); // Error state for validation
  const [isLoading, setIsLoading] = useState(false); // Loading state during processing

  const handleInputChange = (e) => {
    setInputCode(e.target.value);
  };

  const handleDeObfuscate = () => {
    if (!inputCode.trim()) {
      setError("Please enter the obfuscated JavaScript code.");
      return;
    }

    setError("");
    setIsLoading(true);
    setDeObfuscatedCode("");

    try {
      // Beautify the obfuscated code to make it more readable
      const beautifiedCode = js_beautify(inputCode, {
        indent_size: 2, // Adjust indentation size
        space_in_empty_paren: true, // Add space inside empty parentheses
        preserve_newlines: true, // Preserve newlines
      });

      setDeObfuscatedCode(beautifiedCode);
    } catch (err) {
      setError("An error occurred while de-obfuscating the code.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">JavaScript DeObfuscator</h1>

      <textarea
        className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
        placeholder="Enter obfuscated JavaScript code here"
        value={inputCode}
        onChange={handleInputChange}
        rows="6"
      ></textarea>

      <motion.button
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        onClick={handleDeObfuscate}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={isLoading}
      >
        {isLoading ? "De-Obfuscating..." : "De-Obfuscate JavaScript"}
      </motion.button>

      {error && (
        <div className="mt-4 p-4 border rounded-lg bg-red-100 text-red-700">
          <p>{error}</p>
        </div>
      )}

      {deObfuscatedCode && (
        <div className="mt-8">
          <h3 className="font-semibold mb-2">De-Obfuscated JavaScript:</h3>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={deObfuscatedCode}
            readOnly
            rows="6"
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default ToolJavaScriptDeObfuscator;

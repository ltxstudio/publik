import React, { useState } from "react";
import { motion } from "framer-motion";
import JavaScriptObfuscator from "javascript-obfuscator"; // Import the obfuscator library

const ToolJavaScriptObfuscator = () => {
  const [inputCode, setInputCode] = useState(""); // State to hold user input
  const [obfuscatedCode, setObfuscatedCode] = useState(""); // State to hold obfuscated code
  const [error, setError] = useState(""); // Error state to handle input validation
  const [isLoading, setIsLoading] = useState(false); // Loading state while processing

  const handleInputChange = (e) => {
    setInputCode(e.target.value);
  };

  const handleObfuscate = () => {
    if (!inputCode.trim()) {
      setError("Please enter JavaScript code to obfuscate.");
      return;
    }

    setError("");
    setIsLoading(true);
    setObfuscatedCode("");

    try {
      // Use the javascript-obfuscator library to obfuscate the code
      const obfuscated = JavaScriptObfuscator.obfuscate(inputCode, {
        compact: true,
        controlFlowFlattening: true,
        deadCodeInjection: true,
        debugProtection: true,
        stringArray: true,
        stringArrayEncoding: ["base64"],
        transformObjectKeys: true,
        renameGlobals: true,
      });

      setObfuscatedCode(obfuscated.getObfuscatedCode());
    } catch (err) {
      setError("An error occurred while obfuscating the code.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">JavaScript Obfuscator</h1>

      <textarea
        className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
        placeholder="Enter JavaScript code here"
        value={inputCode}
        onChange={handleInputChange}
        rows="6"
      ></textarea>

      <motion.button
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        onClick={handleObfuscate}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={isLoading}
      >
        {isLoading ? "Obfuscating..." : "Obfuscate JavaScript"}
      </motion.button>

      {error && (
        <div className="mt-4 p-4 border rounded-lg bg-red-100 text-red-700">
          <p>{error}</p>
        </div>
      )}

      {obfuscatedCode && (
        <div className="mt-8">
          <h3 className="font-semibold mb-2">Obfuscated JavaScript:</h3>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={obfuscatedCode}
            readOnly
            rows="6"
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default ToolJavaScriptObfuscator;

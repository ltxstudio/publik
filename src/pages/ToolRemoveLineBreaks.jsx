import React, { useState } from "react";
import { motion } from "framer-motion";

// Function to remove line breaks
const removeLineBreaks = (text) => {
  return text.replace(/\r?\n|\r/g, " "); // Replace all line breaks with a single space
};

const ToolRemoveLineBreaks = () => {
  const [inputText, setInputText] = useState(""); // State to hold user input
  const [processedText, setProcessedText] = useState(""); // State to hold processed text
  const [error, setError] = useState(""); // Error state to handle input validation
  const [isLoading, setIsLoading] = useState(false); // Loading state while processing

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleRemoveLineBreaks = () => {
    if (!inputText.trim()) {
      setError("Please enter text to remove line breaks.");
      return;
    }

    setError("");
    setIsLoading(true);
    setProcessedText("");

    try {
      // Process the text to remove line breaks
      const result = removeLineBreaks(inputText);
      setProcessedText(result);
    } catch (err) {
      setError("An error occurred while processing the text.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Remove Line Breaks</h1>

      <textarea
        className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
        placeholder="Enter text with line breaks here"
        value={inputText}
        onChange={handleInputChange}
        rows="6"
      ></textarea>

      <motion.button
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        onClick={handleRemoveLineBreaks}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : "Remove Line Breaks"}
      </motion.button>

      {error && (
        <div className="mt-4 p-4 border rounded-lg bg-red-100 text-red-700">
          <p>{error}</p>
        </div>
      )}

      {processedText && (
        <div className="mt-8">
          <h3 className="font-semibold mb-2">Processed Text:</h3>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={processedText}
            readOnly
            rows="6"
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default ToolRemoveLineBreaks;

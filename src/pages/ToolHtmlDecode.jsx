import React, { useState } from "react";
import { motion } from "framer-motion";

// HTML Decode function
const htmlDecode = (str) => {
  const element = document.createElement('div');
  if (str) {
    element.innerHTML = str; // The browser decodes HTML entities
  }
  return element.innerText || element.textContent; // Return the decoded string
};

const ToolHtmlDecode = () => {
  const [inputText, setInputText] = useState(""); // State to hold user input
  const [decodedText, setDecodedText] = useState(""); // State to hold decoded result
  const [error, setError] = useState(""); // Error state to handle input validation
  const [isLoading, setIsLoading] = useState(false); // Loading state while processing

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleDecode = () => {
    if (!inputText.trim()) {
      setError("Please enter text to decode.");
      return;
    }

    setError("");
    setIsLoading(true);
    setDecodedText("");

    try {
      // Decode the HTML encoded text
      const result = htmlDecode(inputText);
      setDecodedText(result);
    } catch (err) {
      setError("An error occurred while decoding the text.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">HTML Decode</h1>

      <textarea
        className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
        placeholder="Enter HTML encoded text here"
        value={inputText}
        onChange={handleInputChange}
        rows="6"
      ></textarea>

      <motion.button
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        onClick={handleDecode}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={isLoading}
      >
        {isLoading ? "Decoding..." : "Decode Text"}
      </motion.button>

      {error && (
        <div className="mt-4 p-4 border rounded-lg bg-red-100 text-red-700">
          <p>{error}</p>
        </div>
      )}

      {decodedText && (
        <div className="mt-8">
          <h3 className="font-semibold mb-2">Decoded HTML:</h3>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={decodedText}
            readOnly
            rows="6"
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default ToolHtmlDecode;

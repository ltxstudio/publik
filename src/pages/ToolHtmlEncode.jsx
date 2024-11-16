import React, { useState } from "react";
import { motion } from "framer-motion";

// HTML Encode function
const htmlEncode = (str) => {
  const element = document.createElement('div');
  if (str) {
    element.innerText = str;
    element.textContent = str;
  }
  return element.innerHTML;
};

const ToolHtmlEncode = () => {
  const [inputText, setInputText] = useState(""); // State to hold user input
  const [encodedText, setEncodedText] = useState(""); // State to hold encoded result
  const [error, setError] = useState(""); // Error state to handle input validation
  const [isLoading, setIsLoading] = useState(false); // Loading state while processing

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleEncode = () => {
    if (!inputText.trim()) {
      setError("Please enter text to encode.");
      return;
    }

    setError("");
    setIsLoading(true);
    setEncodedText("");

    try {
      // Encode the input text to HTML entities
      const result = htmlEncode(inputText);
      setEncodedText(result);
    } catch (err) {
      setError("An error occurred while encoding the text.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">HTML Encode</h1>

      <textarea
        className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
        placeholder="Enter text here"
        value={inputText}
        onChange={handleInputChange}
        rows="6"
      ></textarea>

      <motion.button
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        onClick={handleEncode}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={isLoading}
      >
        {isLoading ? "Encoding..." : "Encode Text"}
      </motion.button>

      {error && (
        <div className="mt-4 p-4 border rounded-lg bg-red-100 text-red-700">
          <p>{error}</p>
        </div>
      )}

      {encodedText && (
        <div className="mt-8">
          <h3 className="font-semibold mb-2">Encoded HTML:</h3>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={encodedText}
            readOnly
            rows="6"
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default ToolHtmlEncode;

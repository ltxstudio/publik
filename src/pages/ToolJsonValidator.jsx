import React, { useState } from "react";
import { CheckIcon, XIcon } from "@heroicons/react/outline"; // Icons for valid/invalid
import { motion } from "framer-motion"; // For button animation

const ToolJsonValidator = () => {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(null);
  const [error, setError] = useState("");
  const [jsonResult, setJsonResult] = useState(null);

  const handleInputChange = (e) => setInput(e.target.value);

  const handleValidate = () => {
    try {
      const parsedJson = JSON.parse(input);
      setJsonResult(parsedJson);
      setIsValid(true);
      setError("");
    } catch (e) {
      setJsonResult(null);
      setIsValid(false);
      setError("Invalid JSON format.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">JSON Validator</h1>

      <textarea
        className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
        placeholder="Paste your JSON here..."
        value={input}
        onChange={handleInputChange}
        rows="8"
      ></textarea>

      <motion.button
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        onClick={handleValidate}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Validate JSON
      </motion.button>

      {isValid !== null && (
        <div
          className={`mt-4 p-4 border rounded-lg ${isValid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
        >
          <div className="flex items-center">
            {isValid ? (
              <CheckIcon className="w-6 h-6 mr-2 text-green-600" />
            ) : (
              <XIcon className="w-6 h-6 mr-2 text-red-600" />
            )}
            <p>{isValid ? "Valid JSON!" : error}</p>
          </div>
        </div>
      )}

      {jsonResult && isValid && (
        <div className="mt-8">
          <h3 className="font-semibold mb-2">JSON Output:</h3>
          <ReactJson src={jsonResult} theme="monokai" iconStyle="square" />
        </div>
      )}
    </div>
  );
};

export default ToolJsonValidator;

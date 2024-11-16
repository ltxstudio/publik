import React, { useState } from "react";
import { motion } from "framer-motion";

// Function to Minify JSON
const minifyJson = (json) => {
  try {
    const parsedJson = JSON.parse(json);
    return JSON.stringify(parsedJson);
  } catch (e) {
    return "Invalid JSON input!";
  }
};

const ToolJsonMinify = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [minifiedJson, setMinifiedJson] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleMinify = () => {
    if (!jsonInput.trim()) {
      setError("Please enter a JSON string.");
      return;
    }

    setError("");
    setIsLoading(true);
    setMinifiedJson("");

    const result = minifyJson(jsonInput);
    if (result === "Invalid JSON input!") {
      setError("Invalid JSON input!");
    } else {
      setMinifiedJson(result);
    }
    setIsLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">JSON Minifier</h1>

      <div className="space-y-4">
        <div>
          <label className="block text-lg font-medium mb-2">Enter JSON</label>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            placeholder="Enter JSON here"
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
        {isLoading ? "Minifying..." : "Minify JSON"}
      </motion.button>

      {error && (
        <div className="mt-4 p-4 border rounded-lg bg-red-100 text-red-700">
          <p>{error}</p>
        </div>
      )}

      {minifiedJson && (
        <div className="mt-8">
          <h3 className="font-semibold mb-2">Minified JSON:</h3>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={minifiedJson}
            readOnly
            rows="8"
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default ToolJsonMinify;

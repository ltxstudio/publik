import React, { useState } from "react";
import { motion } from "framer-motion";
import crypto from "crypto-js"; // Import crypto-js for MD5 hashing

const ToolMd5Generator = () => {
  const [input, setInput] = useState("");
  const [md5Hash, setMd5Hash] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleGenerateMd5 = () => {
    if (!input.trim()) {
      setError("Please enter some text to generate the MD5 hash.");
      setMd5Hash("");
      return;
    }

    setError("");
    const hash = crypto.MD5(input).toString(crypto.enc.Hex); // Generate MD5 hash
    setMd5Hash(hash);
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">MD5 Hash Generator</h1>

      <textarea
        className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
        placeholder="Enter text to generate MD5 hash"
        value={input}
        onChange={handleInputChange}
        rows="6"
      ></textarea>

      <motion.button
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        onClick={handleGenerateMd5}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Generate MD5 Hash
      </motion.button>

      {error && (
        <div className="mt-4 p-4 border rounded-lg bg-red-100 text-red-700">
          <div className="flex items-center">
            <XIcon className="w-6 h-6 mr-2 text-red-600" />
            <p>{error}</p>
          </div>
        </div>
      )}

      {md5Hash && (
        <div className="mt-8">
          <h3 className="font-semibold mb-2">Generated MD5 Hash:</h3>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={md5Hash}
            readOnly
            rows="6"
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default ToolMd5Generator;

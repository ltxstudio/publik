import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckIcon, XIcon } from "@heroicons/react/outline"; // Icons for valid/invalid
import sqlFormatter from "sql-formatter"; // SQL Formatter library

const ToolSqlFormatter = () => {
  const [input, setInput] = useState("");
  const [formattedSql, setFormattedSql] = useState("");
  const [isFormatted, setIsFormatted] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const handleFormat = () => {
    try {
      const result = sqlFormatter.format(input);
      setFormattedSql(result);
      setIsFormatted(true);
      setError("");
    } catch (e) {
      setFormattedSql("");
      setIsFormatted(false);
      setError("Failed to format the SQL query. Please check the input.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">SQL Formatter/Beautifier</h1>

      <textarea
        className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
        placeholder="Paste your raw SQL here..."
        value={input}
        onChange={handleInputChange}
        rows="8"
      ></textarea>

      <motion.button
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        onClick={handleFormat}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Format SQL
      </motion.button>

      {isFormatted !== null && (
        <div
          className={`mt-4 p-4 border rounded-lg ${isFormatted ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
        >
          <div className="flex items-center">
            {isFormatted ? (
              <CheckIcon className="w-6 h-6 mr-2 text-green-600" />
            ) : (
              <XIcon className="w-6 h-6 mr-2 text-red-600" />
            )}
            <p>{isFormatted ? "SQL Formatted Successfully!" : error}</p>
          </div>
        </div>
      )}

      {formattedSql && isFormatted && (
        <div className="mt-8">
          <h3 className="font-semibold mb-2">Formatted SQL Output:</h3>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={formattedSql}
            readOnly
            rows="8"
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default ToolSqlFormatter;

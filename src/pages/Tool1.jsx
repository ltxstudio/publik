import React, { useState } from "react";

const Tool1 = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const handleTransform = () => {
    setOutput(input.toUpperCase()); // Example transformation
  };

  return (
    <div className="max-w-md mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Tool 1: Text Transformer</h1>

      <textarea
        className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
        placeholder="Enter text here..."
        value={input}
        onChange={handleInputChange}
      ></textarea>

      <button
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        onClick={handleTransform}
      >
        Transform Text
      </button>

      <div className="mt-8">
        <h3 className="font-semibold">Output:</h3>
        <p className="border p-4 bg-gray-50">{output}</p>
      </div>
    </div>
  );
};

export default Tool1;

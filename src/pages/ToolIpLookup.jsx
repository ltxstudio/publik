import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { CheckIcon, XIcon } from "@heroicons/react/outline"; // Icons for valid/invalid

const ToolIpLookup = () => {
  const [ip, setIp] = useState("");
  const [ipData, setIpData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => setIp(e.target.value);

  const handleLookup = async () => {
    if (!ip) {
      setError("Please enter an IP address.");
      return;
    }

    setIsLoading(true);
    setError("");
    setIpData(null);

    try {
      const response = await axios.get(`http://ip-api.com/json/${ip}`);
      if (response.data.status === "fail") {
        setError("Invalid IP address. Please try again.");
      } else {
        setIpData(response.data);
      }
    } catch (err) {
      setError("Failed to retrieve data. Please check the IP address or try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">IP Address Lookup</h1>

      <input
        type="text"
        className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
        placeholder="Enter IP address"
        value={ip}
        onChange={handleInputChange}
      />

      <motion.button
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        onClick={handleLookup}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Lookup IP"}
      </motion.button>

      {error && (
        <div className="mt-4 p-4 border rounded-lg bg-red-100 text-red-700">
          <div className="flex items-center">
            <XIcon className="w-6 h-6 mr-2 text-red-600" />
            <p>{error}</p>
          </div>
        </div>
      )}

      {ipData && (
        <div className="mt-8 p-6 bg-white shadow-md rounded-lg">
          <h3 className="font-semibold mb-4">IP Information:</h3>
          <ul className="space-y-2">
            <li><strong>IP Address:</strong> {ipData.query}</li>
            <li><strong>City:</strong> {ipData.city}</li>
            <li><strong>Region:</strong> {ipData.regionName}</li>
            <li><strong>Country:</strong> {ipData.country}</li>
            <li><strong>ISP:</strong> {ipData.isp}</li>
            <li><strong>Organization:</strong> {ipData.org}</li>
            <li><strong>Location:</strong> {ipData.latitude}, {ipData.longitude}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ToolIpLookup;

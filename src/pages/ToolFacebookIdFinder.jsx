import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios"; // For making API requests

const ToolFacebookIdFinder = () => {
  const [username, setUsername] = useState("");
  const [facebookId, setFacebookId] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleFindFacebookId = async () => {
    if (!username.trim()) {
      setError("Please enter a Facebook username or profile URL.");
      return;
    }

    setIsLoading(true);
    setError("");
    setFacebookId("");

    try {
      // Make a request to the Facebook Graph API
      const accessToken = "your-access-token-here"; // Replace with your Facebook API access token
      const apiUrl = `https://graph.facebook.com/${username}?access_token=${accessToken}`;

      const response = await axios.get(apiUrl);

      if (response.data.id) {
        setFacebookId(response.data.id);
      } else {
        setError("Facebook ID not found. Make sure the username or URL is correct.");
      }
    } catch (err) {
      setError("Failed to retrieve data. Please check the username or try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Find Facebook ID</h1>

      <input
        type="text"
        className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
        placeholder="Enter Facebook username or profile URL"
        value={username}
        onChange={handleInputChange}
      />

      <motion.button
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        onClick={handleFindFacebookId}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={isLoading}
      >
        {isLoading ? "Searching..." : "Find Facebook ID"}
      </motion.button>

      {error && (
        <div className="mt-4 p-4 border rounded-lg bg-red-100 text-red-700">
          <p>{error}</p>
        </div>
      )}

      {facebookId && (
        <div className="mt-8">
          <h3 className="font-semibold mb-2">Facebook ID:</h3>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={facebookId}
            readOnly
            rows="2"
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default ToolFacebookIdFinder;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const tools = [
    { name: "JSON Validator", path: "/tool/json-validator" },
    { name: "JSON Minifier", path: "/tool/json-minify" },
    { name: "HTML Minifier", path: "/tool/html-minifier" },
    { name: "SQL Formatter", path: "/tool/sql-formatter" },
    { name: "IP Address Lookup", path: "/tool/ip-lookup" },
    { name: "MD5 Generator", path: "/tool/md5-generator" },
    { name: "Facebook ID Finder", path: "/tool/facebook-id-finder" },
    { name: "JavaScript Obfuscator", path: "/tool/javascript-obfuscator" },
    { name: "JavaScript DeObfuscator", path: "/tool/javascript-deobfuscator" },
    { name: "HTML Encode", path: "/tool/html-encode" },
    { name: "HTML Decode", path: "/tool/html-decode" },
    { name: "JavaScript Minifier", path: "/tool/javascript-minifier" },
    { name: "Remove Line Breaks", path: "/tool/remove-line-breaks" },
    { name: "Privacy Policy Generator", path: "/tool/privacy-policy-generator" },
    { name: "Disclaimer Generator", path: "/tool/disclaimer-generator" },
    { name: "Color Converter", path: "/tool/color-converter" },
    { name: "CSS Minifier", path: "/tool/css-minify" },
    { name: "QR Code Decoder", path: "/tool/qr-code-decoder" },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to the Online Tools App</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={tool.path} className="text-xl font-semibold text-blue-600 hover:text-blue-800">
              {tool.name}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;

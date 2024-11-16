import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import ToolJsonValidator from "./pages/ToolJsonValidator";
import ToolJsonMinify from "./pages/ToolJsonMinify";
import ToolHtmlMinifier from "./pages/ToolHtmlMinifier";
import ToolSqlFormatter from "./pages/ToolSqlFormatter";
import ToolIpLookup from "./pages/ToolIpLookup";
import ToolMd5Generator from "./pages/ToolMd5Generator";
import ToolFacebookIdFinder from "./pages/ToolFacebookIdFinder";
import ToolJavaScriptObfuscator from "./pages/ToolJavaScriptObfuscator";
import ToolJavaScriptDeObfuscator from "./pages/ToolJavaScriptDeObfuscator";
import ToolHtmlEncode from "./pages/ToolHtmlEncode";
import ToolHtmlDecode from "./pages/ToolHtmlDecode";
import ToolJavaScriptMinifier from "./pages/ToolJavaScriptMinifier";
import ToolRemoveLineBreaks from "./pages/ToolRemoveLineBreaks";
import ToolPrivacyPolicyGenerator from "./pages/ToolPrivacyPolicyGenerator";
import ToolDisclaimerGenerator from "./pages/ToolDisclaimerGenerator";
import ToolColorConverter from "./pages/ToolColorConverter";
import ToolCssMinifier from "./pages/ToolCssMinifier";
import ToolQrCodeDecoder from "./pages/ToolQrCodeDecoder";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <motion.h1
              className="text-3xl font-bold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Online Tools
            </motion.h1>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <motion.a
                    href="/"
                    className="hover:text-yellow-300 transition duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    Home
                  </motion.a>
                </li>
                {/* You can add more navigation items here */}
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tool/json-validator" element={<ToolJsonValidator />} />
            <Route path="/tool/json-minify" element={<ToolJsonMinify />} />
            <Route path="/tool/html-minifier" element={<ToolHtmlMinifier />} />
            <Route path="/tool/sql-formatter" element={<ToolSqlFormatter />} />
            <Route path="/tool/ip-lookup" element={<ToolIpLookup />} />
            <Route path="/tool/md5-generator" element={<ToolMd5Generator />} />
            <Route path="/tool/facebook-id-finder" element={<ToolFacebookIdFinder />} />
            <Route path="/tool/javascript-obfuscator" element={<ToolJavaScriptObfuscator />} />
            <Route path="/tool/javascript-deobfuscator" element={<ToolJavaScriptDeObfuscator />} />
            <Route path="/tool/html-encode" element={<ToolHtmlEncode />} />
            <Route path="/tool/html-decode" element={<ToolHtmlDecode />} />
            <Route path="/tool/javascript-minifier" element={<ToolJavaScriptMinifier />} />
            <Route path="/tool/remove-line-breaks" element={<ToolRemoveLineBreaks />} />
            <Route path="/tool/privacy-policy-generator" element={<ToolPrivacyPolicyGenerator />} />
            <Route path="/tool/disclaimer-generator" element={<ToolDisclaimerGenerator />} />
            <Route path="/tool/color-converter" element={<ToolColorConverter />} />
            <Route path="/tool/css-minify" element={<ToolCssMinifier />} />
            <Route path="/tool/qr-code-decoder" element={<ToolQrCodeDecoder />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-blue-600 text-white p-4 mt-auto">
          <div className="text-center">
            <p>&copy; 2024 Online Tools. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;

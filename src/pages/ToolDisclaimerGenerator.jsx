import React, { useState } from "react";
import { motion } from "framer-motion";

// Function to generate the Disclaimer based on user input
const generateDisclaimer = (websiteName, companyName, disclaimers, contactInfo) => {
  return `
    Disclaimer for ${websiteName}

    The information provided on ${websiteName} (the "Website") is for general informational purposes only. All content on the Website is provided by ${companyName} and is subject to change without notice.

    1. Limitation of Liability:
    ${disclaimers.liability}

    2. Content Accuracy:
    ${disclaimers.accuracy}

    3. External Links:
    ${disclaimers.externalLinks}

    4. No Professional Advice:
    ${disclaimers.professionalAdvice}

    5. Contact Us:
    If you have any questions about this Disclaimer, please contact us at: ${contactInfo}
  `;
};

const ToolDisclaimerGenerator = () => {
  const [websiteName, setWebsiteName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [disclaimers, setDisclaimers] = useState({
    liability: "",
    accuracy: "",
    externalLinks: "",
    professionalAdvice: ""
  });
  const [contactInfo, setContactInfo] = useState("");
  const [generatedDisclaimer, setGeneratedDisclaimer] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateDisclaimer = () => {
    if (!websiteName || !companyName || !disclaimers.liability || !contactInfo) {
      setError("Please fill in all required fields.");
      return;
    }

    setError("");
    setIsLoading(true);
    setGeneratedDisclaimer("");

    try {
      const disclaimer = generateDisclaimer(websiteName, companyName, disclaimers, contactInfo);
      setGeneratedDisclaimer(disclaimer);
    } catch (err) {
      setError("An error occurred while generating the disclaimer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Disclaimer Generator</h1>

      <div className="space-y-4">
        <div>
          <label className="block text-lg font-medium mb-2">Website Name</label>
          <input
            type="text"
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={websiteName}
            onChange={(e) => setWebsiteName(e.target.value)}
            placeholder="Enter your website name"
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">Company Name</label>
          <input
            type="text"
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Enter your company name"
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">Limitation of Liability</label>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={disclaimers.liability}
            onChange={(e) => setDisclaimers({ ...disclaimers, liability: e.target.value })}
            placeholder="Enter your liability disclaimer"
            rows="4"
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">Content Accuracy</label>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={disclaimers.accuracy}
            onChange={(e) => setDisclaimers({ ...disclaimers, accuracy: e.target.value })}
            placeholder="Enter your content accuracy disclaimer"
            rows="4"
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">External Links</label>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={disclaimers.externalLinks}
            onChange={(e) => setDisclaimers({ ...disclaimers, externalLinks: e.target.value })}
            placeholder="Enter your disclaimer regarding external links"
            rows="4"
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">Professional Advice</label>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={disclaimers.professionalAdvice}
            onChange={(e) => setDisclaimers({ ...disclaimers, professionalAdvice: e.target.value })}
            placeholder="Enter your disclaimer regarding professional advice"
            rows="4"
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">Contact Information</label>
          <input
            type="text"
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            placeholder="Enter your contact information"
          />
        </div>
      </div>

      <motion.button
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors mt-6"
        onClick={handleGenerateDisclaimer}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={isLoading}
      >
        {isLoading ? "Generating..." : "Generate Disclaimer"}
      </motion.button>

      {error && (
        <div className="mt-4 p-4 border rounded-lg bg-red-100 text-red-700">
          <p>{error}</p>
        </div>
      )}

      {generatedDisclaimer && (
        <div className="mt-8">
          <h3 className="font-semibold mb-2">Generated Disclaimer:</h3>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={generatedDisclaimer}
            readOnly
            rows="10"
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default ToolDisclaimerGenerator;

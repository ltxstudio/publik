import React, { useState } from "react";
import { motion } from "framer-motion";

// Function to generate the Privacy Policy based on user input
const generatePrivacyPolicy = (companyName, websiteUrl, dataCollection, thirdPartyServices, contactInfo) => {
  return `
    Privacy Policy for ${companyName}

    At ${companyName}, accessible from ${websiteUrl}, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by ${companyName} and how we use it.

    1. Information We Collect
    We collect the following types of information from our visitors:
    - ${dataCollection.join(", ")}
    
    2. Use of Information
    The information we collect is used for the following purposes:
    - To improve our website and services
    - To communicate with you (if you contact us)

    3. Third-Party Services
    We may share your information with third-party services such as:
    - ${thirdPartyServices.join(", ")}

    4. Data Protection
    We take all necessary steps to protect your data, ensuring that it is handled securely. However, please be aware that no method of transmission over the internet is 100% secure.

    5. Contact Us
    If you have any questions about this Privacy Policy, please contact us at: ${contactInfo}
  `;
};

const ToolPrivacyPolicyGenerator = () => {
  const [companyName, setCompanyName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [dataCollection, setDataCollection] = useState([]);
  const [thirdPartyServices, setThirdPartyServices] = useState([]);
  const [contactInfo, setContactInfo] = useState("");
  const [generatedPolicy, setGeneratedPolicy] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGeneratePolicy = () => {
    if (!companyName || !websiteUrl || !dataCollection.length || !contactInfo) {
      setError("Please fill in all required fields.");
      return;
    }

    setError("");
    setIsLoading(true);
    setGeneratedPolicy("");

    try {
      const policy = generatePrivacyPolicy(companyName, websiteUrl, dataCollection, thirdPartyServices, contactInfo);
      setGeneratedPolicy(policy);
    } catch (err) {
      setError("An error occurred while generating the privacy policy.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy Generator</h1>

      <div className="space-y-4">
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
          <label className="block text-lg font-medium mb-2">Website URL</label>
          <input
            type="url"
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
            placeholder="Enter your website URL"
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">Data Collection Practices</label>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={dataCollection.join("\n")}
            onChange={(e) => setDataCollection(e.target.value.split("\n"))}
            placeholder="Enter data collection practices (e.g. cookies, email addresses, etc.)"
            rows="4"
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">Third-party Services (Optional)</label>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={thirdPartyServices.join("\n")}
            onChange={(e) => setThirdPartyServices(e.target.value.split("\n"))}
            placeholder="Enter third-party services you use (e.g. Google Analytics, advertising networks)"
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
        onClick={handleGeneratePolicy}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={isLoading}
      >
        {isLoading ? "Generating..." : "Generate Privacy Policy"}
      </motion.button>

      {error && (
        <div className="mt-4 p-4 border rounded-lg bg-red-100 text-red-700">
          <p>{error}</p>
        </div>
      )}

      {generatedPolicy && (
        <div className="mt-8">
          <h3 className="font-semibold mb-2">Generated Privacy Policy:</h3>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={generatedPolicy}
            readOnly
            rows="10"
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default ToolPrivacyPolicyGenerator;

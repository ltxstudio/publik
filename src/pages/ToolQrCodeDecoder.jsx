import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import jsQR from "jsqr";
import { motion } from "framer-motion";

// QR Code Decoder Component
const ToolQrCodeDecoder = () => {
  const [qrResult, setQrResult] = useState(null);
  const [error, setError] = useState(null);

  // Handle file upload using react-dropzone
  const { getRootProps, getInputProps } = useDropzone({
    accept: ".png, .jpg, .jpeg",
    onDrop: (acceptedFiles) => decodeQrCode(acceptedFiles[0]),
  });

  // Function to decode QR Code
  const decodeQrCode = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0, img.width, img.height);

        // Get image data from the canvas and decode the QR code
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        if (code) {
          setQrResult(code.data);
          setError(null);
        } else {
          setQrResult(null);
          setError("QR Code not detected.");
        }
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">QR Code Decoder</h1>

      <div {...getRootProps()} className="w-full border-dashed border-2 p-8 mb-4">
        <input {...getInputProps()} />
        <p className="text-lg text-center">Drag & Drop or Click to Upload a QR Code Image</p>
      </div>

      {error && (
        <div className="mt-4 p-4 border rounded-lg bg-red-100 text-red-700">
          <p>{error}</p>
        </div>
      )}

      {qrResult && (
        <div className="mt-8">
          <h3 className="font-semibold mb-2">Decoded QR Code:</h3>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={qrResult}
            readOnly
            rows="8"
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default ToolQrCodeDecoder;

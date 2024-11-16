import React, { useState } from "react";
import { motion } from "framer-motion";

// Function to convert HEX to RGB
const hexToRgb = (hex) => {
  let r = 0, g = 0, b = 0;
  // 3 digits
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  }
  // 6 digits
  else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return `rgb(${r}, ${g}, ${b})`;
};

// Function to convert RGB to HEX
const rgbToHex = (r, g, b) => {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
};

// Function to convert RGB to HSL
const rgbToHsl = (r, g, b) => {
  r /= 255;
  g /= 255;
  b /= 255;
  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
};

// Function to convert HSL to RGB
const hslToRgb = (h, s, l) => {
  s /= 100;
  l /= 100;
  let r, g, b;
  if (s === 0) {
    r = g = b = l; // Achromatic
  } else {
    let hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    let p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)})`;
};

const ToolColorConverter = () => {
  const [hex, setHex] = useState("#");
  const [rgb, setRgb] = useState("rgb(0, 0, 0)");
  const [hsl, setHsl] = useState("hsl(0, 0%, 0%)");
  const [error, setError] = useState("");
  
  // Handle changes and conversions
  const handleHexChange = (e) => {
    setHex(e.target.value);
    if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
      setError("");
      setRgb(hexToRgb(e.target.value));
      setHsl(rgbToHsl(...hexToRgb(e.target.value).match(/\d+/g).map(Number)));
    } else {
      setError("Invalid HEX code");
    }
  };

  const handleRgbChange = (e) => {
    setRgb(e.target.value);
    const rgbArray = e.target.value.match(/\d+/g);
    if (rgbArray && rgbArray.length === 3) {
      setError("");
      setHex(rgbToHex(...rgbArray.map(Number)));
      setHsl(rgbToHsl(...rgbArray.map(Number)));
    } else {
      setError("Invalid RGB value");
    }
  };

  const handleHslChange = (e) => {
    setHsl(e.target.value);
    const hslArray = e.target.value.match(/\d+/g);
    if (hslArray && hslArray.length === 3) {
      setError("");
      setRgb(hslToRgb(...hslArray.map(Number)));
      setHex(rgbToHex(...hslToRgb(...hslArray.map(Number)).match(/\d+/g).map(Number)));
    } else {
      setError("Invalid HSL value");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Color Converter</h1>

      <div className="space-y-4">
        <div>
          <label className="block text-lg font-medium mb-2">HEX Color</label>
          <input
            type="text"
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={hex}
            onChange={handleHexChange}
            placeholder="Enter HEX color"
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">RGB Color</label>
          <input
            type="text"
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={rgb}
            onChange={handleRgbChange}
            placeholder="Enter RGB color"
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">HSL Color</label>
          <input
            type="text"
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={hsl}
            onChange={handleHslChange}
            placeholder="Enter HSL color"
          />
        </div>
      </div>

      {error && (
        <div className="mt-4 p-4 border rounded-lg bg-red-100 text-red-700">
          <p>{error}</p>
        </div>
      )}

      <div className="mt-8">
        <h3 className="font-semibold mb-2">Converted Values:</h3>
        <div>
          <p className="text-gray-800">HEX: {hex}</p>
          <p className="text-gray-800">RGB: {rgb}</p>
          <p className="text-gray-800">HSL: {hsl}</p>
        </div>
      </div>
    </div>
  );
};

export default ToolColorConverter;

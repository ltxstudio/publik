import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tool1 from "./pages/Tool1";
import Tool2 from "./pages/Tool2";

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <header className="bg-blue-600 text-white shadow-md">
          <nav className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
            <div className="text-2xl font-semibold">Online Tools</div>
            <div className="hidden md:flex space-x-6">
              <a href="/" className="hover:text-gray-300 transition-colors">Home</a>
              <a href="/tool1" className="hover:text-gray-300 transition-colors">Tool 1</a>
              <a href="/tool2" className="hover:text-gray-300 transition-colors">Tool 2</a>
            </div>
          </nav>
        </header>

        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tool1" element={<Tool1 />} />
            <Route path="/tool2" element={<Tool2 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

import React from "react";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-extrabold text-center mb-6">Welcome to Online Tools</h1>
      <p className="text-xl text-center mb-10">Explore our collection of useful online tools!</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4">Tool 1</h2>
          <p className="text-gray-700 mb-4">This tool allows you to transform text. Try it now!</p>
          <a href="/tool1" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">Try Tool 1</a>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4">Tool 2</h2>
          <p className="text-gray-700 mb-4">Reverse text with this simple tool. Give it a try!</p>
          <a href="/tool2" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">Try Tool 2</a>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4">Tool 3</h2>
          <p className="text-gray-700 mb-4">Another tool description can go here.</p>
          <a href="/" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">Try Tool 3</a>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import StarField from "./components/StarField";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`relative w-full h-screen overflow-hidden transition-all ${
        darkMode ? "text-white bg-[#272727]" : "bg-white text-black"
      }`}
    >
      {darkMode && <StarField />}
      {/* {darkMode ? <StarField /> : <DaySky />}{" "} */}
      {/* Toggle between night and day backgrounds */}
      <div className="container mx-auto justify-center items-center h-full flex flex-col relative z-10">
        {/* Switch Neumorphisme */}
        <div
          className={`mb-6 w-20 h-10 flex items-center rounded-full p-1 cursor-pointer ${
            darkMode ? "dark-shadow-neumorphism" : "shadow-neumorphism"
          }`}
          onClick={() => setDarkMode(!darkMode)}
        >
          <div
            className={`w-8 h-8 rounded-full transition-transform transform flex items-center justify-center ${
              darkMode
                ? "translate-x-10 bg-gray-800 text-yellow-400 border border-white"
                : "translate-x-0 bg-yellow-400 text-gray-800"
            }`}
          >
            {darkMode ? "🌙" : "☀️"}
          </div>
        </div>

        {/* Main content */}
        <HomePage isDarkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;

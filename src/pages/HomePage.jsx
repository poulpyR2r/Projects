import React from "react";
import Cards from "../components/Cards";

const HomePage = ({ isDarkMode }) => {
  return (
    <div className="flex gap-10 items-stretch justify-center w-full h-auto p-8">
      {/* Carte principale */}
      <div className="flex">
        <Cards
          title="Carte principale"
          description="Ceci est la carte principale centrée."
          additionalClasses={`flex-1 h-full ${
            isDarkMode ? "neon-border" : "shadow-neumorphism"
          }`}
          isDarkMode={isDarkMode}
        />
      </div>

      {/* Grille des cartes secondaires */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 w-1/2">
        <Cards
          title="Carte 1"
          description="Description de la carte 1."
          additionalClasses={`h-40 ${
            isDarkMode ? "neon-border" : "shadow-neumorphism"
          }`}
          isDarkMode={isDarkMode}
        />
        <Cards
          title="Carte 2"
          description="Description de la carte 2."
          additionalClasses={`h-40 ${
            isDarkMode ? "neon-border" : "shadow-neumorphism"
          }`}
          isDarkMode={isDarkMode}
        />
        <Cards
          title="Carte 3"
          description="Description de la carte 3."
          additionalClasses={`h-40 ${
            isDarkMode ? "neon-border" : "shadow-neumorphism"
          }`}
          isDarkMode={isDarkMode}
        />
        <Cards
          title="Carte 4"
          description="Description de la carte 4."
          additionalClasses={`h-40 ${
            isDarkMode ? "neon-border" : "shadow-neumorphism"
          }`}
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  );
};

export default HomePage;

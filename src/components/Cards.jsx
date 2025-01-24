import React from "react";
import { motion } from "framer-motion";

const Cards = ({
  title = "Title",
  description = "Description",
  additionalClasses = "",
  isDarkMode,
  link,
  tags = [],
  image
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${isDarkMode ? "dark-shadow-neumorphism" : "shadow-neumorphism"} 
        p-6 flex flex-col gap-4 rounded-[20px] transition-all duration-300 
        ${additionalClasses}`}
    >
      {image && (
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover rounded-lg"
        />
      )}
      
      <div className="space-y-2">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {link && (
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer" 
          className="mt-auto text-blue-600 dark:text-blue-400 hover:underline"
        >
          Voir le projet →
        </a>
      )}
    </motion.div>
  );
};

export default Cards;
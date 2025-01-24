import React from "react";

const Cards = ({
  title = "Title",
  description = "Description",
  additionalClasses = "",
  isDarkMode,

}) => {

  
  return (
    <div
      className={`${
        isDarkMode ? "dark-shadow-neumorphism" : "shadow-neumorphism"
      } p-6 flex flex-col justify-center items-center rounded-[20px] transition-all duration-300 hover:scale-105 hover:cursor-pointer ${additionalClasses}`}
    >
      <h1 className="text-xl font-bold">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Cards;

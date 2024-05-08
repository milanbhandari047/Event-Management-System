import React from "react";
import Button from "../button/Button";

const NavbarSecondRowItem = ({ type }) => {
  let icon;
  let text;
  const logoUrl = "https://www.simplilearn.com/ice9/new_logo.svgz";

  switch (type) {
    case "logo":
      icon = (
        <img
          src={logoUrl}
          alt="Logo"
          style={{ width: "auto", height: "40px" }}
        />
      );
      break;
    case "allCourses":
      icon = "All Courses";
      break;

    case "search":
      icon = (
        <div className="flex items-center">
          <input
            type="text"
            placeholder="What do you want to learn?      "
            className="border border-blue-500 px-2  py-1 rounded-l focus:outline-none"
          />
        </div>
      );

      break;
    case "login":
      icon = (
        <button
          style={{
            backgroundColor: "transparent",
            color: "#666",
            border: "2px solid #666",
            padding: "0.2rem 1rem",
            borderRadius: "4px",
            transition: "color 0.3s, border-color 0.3s",
          }}
        >
          Login
        </button>
      );
      break;
    default:
      icon = "";
  }

  return (
    <div className="px-4 py-2">
      {type === "allCourses" ? (
        <div className="relative">
          <button className="text-gray-800 hover:text-gray-600">
            {icon} &#9662;
          </button>
          <div className="absolute bg-white rounded shadow-md mt-2 py-2 w-48 z-10 hidden">
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Course 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Course 2
            </a>
            {/* Add more courses as needed */}
          </div>
        </div>
      ) : (
        <a href="#" className="text-gray-800 hover:text-gray-600">
          {icon}
        </a>
      )}
    </div>
  );
};

export default NavbarSecondRowItem;

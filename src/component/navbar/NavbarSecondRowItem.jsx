import React from "react";

const NavbarSecondRowItem = ({ type }) => {
  let icon;
  let text;

  switch (type) {
    case "logo":
      icon = "YourLogo";
      break;
    case "allCourses":
      icon = "All Courses";
      break;
    case "search":
      icon = "Search";
      break;
    case "login":
      icon = "Login";
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

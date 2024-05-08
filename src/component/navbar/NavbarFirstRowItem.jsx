import React from "react";

const NavbarFirstRowItem = ({ text }) => {
  return (
    <div className="px-4 py-2">
      <a href="#" className="text-gray-800 hover:text-gray-600">
        {text}
      </a>
    </div>
  );
};

export default NavbarFirstRowItem;

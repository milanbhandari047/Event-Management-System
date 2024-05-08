import React from "react";
import NavbarFirstRowItem from "./NavbarFirstRowItem";
import NavbarSecondRowItem from "./NavbarSecondRowItem";
import Button from "../button/Button";

const Navbar = () => {
  return (
    <nav>
      <div className=" py-2 px-4 bg-gray-200">
        <div className=" hidden md:flex justify-end items-center margin-right: 100px;">
          <div className="flex">
            <NavbarFirstRowItem text="Resources" />
            <NavbarFirstRowItem text="Simplilearn for Business" />
            <NavbarFirstRowItem text="Become an Instructor" />
            <NavbarFirstRowItem text="Partners" />
            <NavbarFirstRowItem text="Reviews" />
          </div>
        </div>
      </div>

      <div className="py-2 px-4 ">
        <div className="flex justify-between items-center">
          <NavbarSecondRowItem type="logo" />
          {/* <NavbarSecondRowItem type="allCourses" /> */}
          <Button text="All Courses" />
          <NavbarSecondRowItem type="search" />
          {/* <Button text="Search" /> */}

          <NavbarSecondRowItem type="login" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

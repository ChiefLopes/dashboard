import React from "react";
import { RiMenu5Fill, RiNotification3Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
// import officer from "../Assets/images/Customercare.png";
import profilePic from "../Assets/images/ProfilePhoto.png"; // Import a default profile picture

const Nav = ({ toggleSidebar }) => {
  return (
    <div className="bg-white p-5">
      <nav className="flex flex-col md:flex-row md:items-center md:justify-between mx-5">
        <div className="flex items-center space-x-4 ml-[17rem]  md:order-1">
          <div className="relative w-full md:w-auto">
            <FaSearch className="absolute rounded-xl top-1/2 transform -translate-y-1/2 right-3 text-gray-600" />
            <input
              type="text"
              placeholder="Search for user by email or NPID"
              className="outline-0 pl-3 pr-10 py-3 rounded-3xl bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-[28rem] "
            />
          </div>
        </div>
        <div className="flex items-center justify-between md:justify-end space-x-6 mt-4 md:mt-0 md:order-2 w-full md:w-auto">
          <RiNotification3Fill className="text-2xl text-white" />
          <div className="flex items-center space-x-2">
            <img
              src={profilePic} // Use a default or user profile picture
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="text-white hidden md:block">
              <p className="font-bold text-black">User Name</p>
              <p className="text-xs text-black">user.email@example.com</p>
              {/* <p className="font-bold">{firstname} {lastname}</p>
              <p className="text-xs">{email}</p> */}
            </div>
          </div>
          <RiMenu5Fill
            className="text-2xl text-white md:hidden"
            onClick={toggleSidebar}
          />
        </div>
      </nav>
    </div>
  );
};

export default Nav;

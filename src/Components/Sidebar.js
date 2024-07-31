// Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaExchangeAlt,
  FaClipboardList,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { PiSquaresFourFill } from "react-icons/pi";
import { CiWarning } from "react-icons/ci";
import { FaCalendarDays } from "react-icons/fa6";
import { LuFileSpreadsheet } from "react-icons/lu";

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-blue-900 text-white fixed flex flex-col justify-center items-center space-y-12">
      <div className="flex items-center justify-center h-16">
        <h1 className="text-2xl font-bold">Neupay</h1>
      </div>
      <nav className="flex-grow">
        <ul>
          <li>
            <NavLink
              to="/overview"
              className={({ isActive }) =>
                `flex items-center py-2.5 px-4 rounded transition duration-200 ${
                  isActive ? "bg-white text-blue-700" : "hover:bg-gray-700"
                }`
              }
            >
              <FaTachometerAlt className="mr-2" />
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                `flex items-center py-2.5 px-4 rounded transition duration-200 ${
                  isActive ? "bg-white text-blue-700" : "hover:bg-gray-700"
                }`
              }
            >
              <FaUsers className="mr-2" />
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/transactions"
              className={({ isActive }) =>
                `flex items-center py-2.5 px-4 rounded transition duration-200 ${
                  isActive ? "bg-white text-blue-700" : "hover:bg-gray-700"
                }`
              }
            >
              <FaExchangeAlt className="mr-2" />
              Transactions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/charge-rules"
              className={({ isActive }) =>
                `flex items-center py-2.5 px-4 rounded transition duration-200 ${
                  isActive ? "bg-white text-blue-700" : "hover:bg-gray-700"
                }`
              }
            >
              <FaClipboardList className="mr-2" />
              Charge Rules
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/withdrawals"
              className={({ isActive }) =>
                `flex items-center py-2.5 px-4 rounded transition duration-200 ${
                  isActive ? "bg-white text-blue-700" : "hover:bg-gray-700"
                }`
              }
            >
              <BsFillSendFill className="mr-2" />
              Withdrawals
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dispute"
              className={({ isActive }) =>
                `flex items-center py-2.5 px-4 rounded transition duration-200 ${
                  isActive ? "bg-white text-blue-700" : "hover:bg-gray-700"
                }`
              }
            >
              <CiWarning className="mr-2" />
              Dispute
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/message"
              className={({ isActive }) =>
                `flex items-center py-2.5 px-4 rounded transition duration-200 ${
                  isActive ? "bg-white text-blue-700" : "hover:bg-gray-700"
                }`
              }
            >
              <PiSquaresFourFill className="mr-2" />
              Message
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/logs"
              className={({ isActive }) =>
                `flex items-center py-2.5 px-4 rounded transition duration-200 ${
                  isActive ? "bg-white text-blue-700" : "hover:bg-gray-700"
                }`
              }
            >
              <LuFileSpreadsheet className="mr-2" />
              Logs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/kyc"
              className={({ isActive }) =>
                `flex items-center py-2.5 px-4 rounded transition duration-200 ${
                  isActive ? "bg-white text-blue-700" : "hover:bg-gray-700"
                }`
              }
            >
              <FaCalendarDays className="mr-2" />
              KYC
            </NavLink>
          </li>
          <div className="mt-10">
            <li>
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  `flex items-center py-2.5 px-4 rounded transition duration-200 ${
                    isActive ? "bg-white text-blue-700" : "hover:bg-gray-700"
                  }`
                }
              >
                <FaCog className="mr-2" />
                Settings
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/logout"
                className={({ isActive }) =>
                  `flex items-center py-2.5 px-4 rounded transition duration-200 ${
                    isActive ? "bg-white text-blue-700" : "hover:bg-gray-700"
                  }`
                }
              >
                <FaSignOutAlt className="mr-2" />
                Logout
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

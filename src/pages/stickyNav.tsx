import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";

const BottomNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sticky Floating Button */}
      {!isOpen && (
        <button
          className="fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
          onClick={() => setIsOpen(true)}
        >
          <FaBars className="text-2xl" />
        </button>
      )}

      {/* Full Navigation - Expands on Click */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 shadow-md transform ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } transition-all duration-500`}
      >
        <div className="flex justify-around">
          <Link
            to="/overview"
            className="flex flex-col items-center text-gray-600 hover:text-purple-400"
          >
            <span className="material-icons">dashboard</span>
            <span className="text-xs mt-1">Overview</span>
          </Link>
          <Link
            to="/history"
            className="flex flex-col items-center text-gray-600 hover:text-purple-400"
          >
            <span className="material-icons">history</span>
            <span className="text-xs mt-1">History</span>
          </Link>
          <Link
            to="/dashboard"
            className="flex flex-col items-center text-gray-600 hover:text-purple-400"
          >
            <FaHome className="text-2xl" />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link
            to="/cards"
            className="flex flex-col items-center text-gray-600 hover:text-purple-400"
          >
            <span className="material-icons">credit_card</span>
            <span className="text-xs mt-1">My Cards</span>
          </Link>
          <Link
            to="/settings"
            className="flex flex-col items-center text-gray-600 hover:text-purple-400"
          >
            <span className="material-icons">settings</span>
            <span className="text-xs mt-1">Settings</span>
          </Link>
        </div>

        {/* Close Button */}
        <button
          className="absolute top-2 right-4 text-gray-500 hover:text-red-500"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes className="text-2xl" />
        </button>
      </div>
    </>
  );
};

export default BottomNav;

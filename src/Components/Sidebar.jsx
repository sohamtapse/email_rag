import React from "react";
import { MdMenu } from "react-icons/md";
import { useState } from "react";

const Sidebar = () => {
  const [isOriginalWidth, setIsOriginalWidth] = useState(true); // Track toggle state
  const originalWidth = 80; // Original width in pixels
  const increasedWidth = 200; // Increased width in pixels

  const toggleWidth = () => {
    setIsOriginalWidth((prevState) => !prevState); // Toggle state
  };
  return (
    <div
      style={{
        width: `${isOriginalWidth ? originalWidth : increasedWidth}px`,
        backgroundColor: "rgb(209 213 219)",
      }}
      className="transition-all duration-300 rounded-lg"
    >
      <nav className="h-full flex flex-col rounded-lg bg-gray-300 w-full  items-center">
        <div className="p-2 pb-2 pt-4 flex justify-center items-center">
          <div className="flex w-full gap-2 items-center justify-center">
            {isOriginalWidth ? (
              <button
                onClick={toggleWidth}
                className="rounded-full p-1 bg-gray-300 hover:bg-gray-200"
              >
                <MdMenu size="25" />
              </button>
            ) : (
              <div className="w-full flex items-center justify-center">
                <button
                  onClick={toggleWidth}
                  className="rounded-full p-1 bg-gray-300 hover:bg-gray-200"
                >
                  <MdMenu size="25" />
                </button>
                <h1 className="mx-5">Expanded</h1>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;

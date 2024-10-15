import { useState } from "react";
import GoogleIcon from '@mui/icons-material/Google';
import MediumIcon from '@mui/icons-material/Description';
import ProductHuntIcon from '@mui/icons-material/Category';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const RightSidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div>
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-40 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } w-72`}
      >
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">GPT 4 Model</h2>
          <div className="mb-4">
            <p className="text-gray-500 mb-2">Searched for: Lorem ipsum dolor sit amet</p>
            <ul className="list-disc list-inside text-sm">
              <li>Lorem ipsum dolor sit amet consectetur adipiscing</li>
              <li>Lorem ipsum dolor sit amet consectetur</li>
              <li>Lorem ipsum dolor that tincidunt bibendum</li>
              <li>Lorem ipsum dolor sit amet dor</li>
            </ul>
          </div>

          <div className="flex justify-around my-4">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <GoogleIcon fontSize="large" />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <MediumIcon fontSize="large" />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <ProductHuntIcon fontSize="large" />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <LinkedInIcon fontSize="large" />
            </a>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-2">Fact check history</h3>
            <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;

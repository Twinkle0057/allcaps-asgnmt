import React, { useState } from 'react';
import { Chat, LibraryBooks, Apps, Settings, Search, ChevronLeft, ChevronRight } from '@mui/icons-material';

const LeftSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true); // Toggle state for sidebar

  const toggleSidebar = () => setIsOpen(!isOpen); // Toggle handler

  return (
    <div
      className={`flex flex-col h-screen bg-white shadow-md transition-width duration-300 ${
        isOpen ? 'w-72' : 'w-20'
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`self-end p-2 focus:outline-none ${isOpen ? 'mr-2' : 'ml-2'}`}
      >
        {isOpen ? <ChevronLeft /> : <ChevronRight />}
      </button>

      {/* Top Section */}
      <div className={`flex items-center p-4 space-x-3 ${!isOpen && 'justify-center'}`}>
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className={`w-10 h-10 rounded-full ${!isOpen && 'hidden'}`}
        />
        {isOpen && (
          <>
            <h4 className="text-lg font-semibold text-gray-900">Mauro Sicard</h4>
            <Settings className="text-gray-700 ml-auto" />
          </>
        )}
      </div>

      {/* Search Box */}
      {isOpen && (
        <div className="relative p-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for chats..."
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      )}

      {/* Navigation Options */}
      <div className="p-4 space-y-4">
        <NavItem icon={<Chat className="text-gray-900" />} label="Chats" shortcut="⌘ 1" isOpen={isOpen} />
        <NavItem icon={<LibraryBooks className="text-gray-900" />} label="Library" shortcut="⌘ 2" isOpen={isOpen} />
        <NavItem icon={<Apps className="text-gray-900" />} label="Apps" shortcut="⌘ 3" isOpen={isOpen} />
      </div>

      {/* Pinned Section */}
      {isOpen && (
        <div className="p-4">
          <h5 className="text-gray-700 text-sm font-semibold mb-2">PINNED</h5>
          <ul className="space-y-2">
            <li className="text-gray-800 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              Create a blog outline
            </li>
            <li className="text-gray-800 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              Generate keywords for a marketing plan
            </li>
            <li className="text-gray-800 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              Create a JS function for...
            </li>
          </ul>
        </div>
      )}

      {/* Chat History Section */}
      {isOpen && (
        <div className="p-4">
          <h5 className="text-gray-700 text-sm font-semibold mb-2">CHAT HISTORY</h5>
          <ul className="space-y-2">
            <li className="text-gray-800 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              Give me 10 ways to create an engaging post
            </li>
            <li className="text-gray-800 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              TypeScript Function for Z...
            </li>
            <li className="text-gray-800 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              Design a business plan for a company
            </li>
          </ul>
        </div>
      )}

      {/* Start New Chat Button */}
      {isOpen && (
        <button className="mt-auto mb-4 mx-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          + Start new chat
        </button>
      )}
    </div>
  );
};

const NavItem: React.FC<{ icon: React.ReactNode; label: string; shortcut: string; isOpen: boolean }> = ({
  icon,
  label,
  shortcut,
  isOpen,
}) => (
  <div className="flex items-center justify-between hover:bg-gray-100 p-2 rounded-md cursor-pointer">
    <div className="flex items-center space-x-3">
      {icon}
      {isOpen && <span className="text-gray-800">{label}</span>}
    </div>
    {isOpen && <span className="text-gray-600 text-sm">{shortcut}</span>}
  </div>
);

export default LeftSidebar;

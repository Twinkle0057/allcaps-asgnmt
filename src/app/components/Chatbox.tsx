import Head from 'next/head';
import { useState } from 'react';
import RightSidebar from './Rightsidebar';
import { LibraryBooks } from '@mui/icons-material';

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b from-blue-900 to-blue-600 relative ${isSidebarOpen ? 'mr-72' : 'mr-0'}`}>
      {/* Top Bar */}
      <div className="bg-white border-gray-700 text-gray-700 flex justify-between items-center py-4 px-6">
        <div className="text-lg">Lorem ipsum dolor sit amet conectur</div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">+ New chat</button>
        <button
        onClick={toggleSidebar}
        className="bg-blue-600 text-white py-2 px-4 rounded-md"
      >
        {isSidebarOpen ? "Close" : "Open"}
      </button>
      </div>

      <div className="flex min-h-screen">
        <main className={`bg-white flex-grow transition-all duration-300  flex items-center justify-center`}>
          <div className="bg-white shadow-lg rounded-lg p-6 w-full mb-0">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-gray-200 w-8 h-8 mr-3"></div>
                <div>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur tincidunt bibendum gravida phasellus sed dignissim id tempus ridiculus.
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <p className="text-gray-600">Lorem ipsum dolor sit amet eleifend tincidunt senectus do...</p>
                <div className="flex justify-between text-blue-600 text-sm mt-2">
                  <span className="cursor-pointer">Fact check</span>
                  <span className="cursor-pointer">Share</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-3 rounded-lg shadow-md flex items-center">
              <button className="bg-white text-gray-600 rounded-full w-8 h-8 flex justify-center items-center mr-3">
                <LibraryBooks/>
              </button>
              <input
                type="text"
                placeholder="How can I help you?"
                className="flex-grow bg-white border-none p-2 rounded-lg outline-none text-gray-700"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg ml-3">Send message</button>
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <RightSidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
};

export default Home;

"use client";

import Image from "next/image";
import ChatBox from "./components/Chatbox";
import LeftSidebar from "./components/Leftsidebar";
import RightSidebar from "./components/Rightsidebar";

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <LeftSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex-grow bg-gray-100 p-4">
        <ChatBox />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="h-screen flex flex-col">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-4 bg-gray-100">
          <h1 className="text-xl font-bold">Welcome to the Dashboard</h1>
        </main>
      </div>
    </div>
  );
}

export default AppLayout;

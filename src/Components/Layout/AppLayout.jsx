import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="h-screen flex flex-col">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex" style={{ marginTop: "64px" }}>
        {" "}
        {/* ✅ FIX: Prevent content from hiding under the fixed header */}
        <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
        <main
          className="flex-1 p-4 bg-gray-100"
          style={{
            marginLeft: "220px", // ✅ FIX: Prevent content from overlapping sidebar
            paddingTop: "10px",
            overflowY: "auto",
            height: "calc(100vh - 64px)", // ✅ FIX: Ensure content fits within the screen
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;

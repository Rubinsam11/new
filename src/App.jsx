import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar"; // Import Sidebar
import Connectors from "./Connectors"; // Import Connectors page
import Logs from "./Logs"; // Import Logs page
import More from "./More"; // Import More page
import Workspace from "./Workspace";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="ml-20 p-4"> {/* Give space for the sidebar */}
          <Routes>
            <Route path="/workspace" element={<Workspace/>} />
            <Route path="/connectors" element={<Connectors />} />
            <Route path="/logs" element={<Logs />} />
            <Route path="/more" element={<More />} />
            {/* Define other routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Workspace from "./components/Workspace";
import Connectors from "./components/Connectors";
import Logs from "./components/Logs";
import More from "./components/More";
import { FaTh, FaBars, FaTimes } from "react-icons/fa"; // Import icons

function App() {
  const [selectedTab, setSelectedTab] = useState("workspaces");
  const [view, setView] = useState("grid"); // State for grid/list toggle
  const [searchTerm, setSearchTerm] = useState(""); // State for search
  const [workspaces, setWorkspaces] = useState([]); // State to store fetched workspaces

  useEffect(() => {
    const fetchWorkspaces = async () => {
      const response = await fetch("https://api.example.com/workspaces");
      const data = await response.json();
      setWorkspaces(data); // Set the workspaces once fetched
    };

    fetchWorkspaces();
  }, []);

  const filteredWorkspaces = workspaces.filter((workspace) =>
    workspace.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const clearSearch = () => setSearchTerm(""); // Clears search field

  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar - Fixed Width */}
        <Sidebar setSelectedTab={setSelectedTab} className="w-20 flex-shrink-0" />

        {/* Main Content - Removed margin-left, ensured full width */}
        <div className="flex-1 p-4">
          {/* Workspace Header Section */}
          <div className="flex justify-between items-center bg-black text-white p-4 rounded-lg shadow-md">
            {/* Left Section */}
            <div>
              <h2 className="text-lg font-semibold">Workspace</h2>
              <div className="flex space-x-4 mt-2">
                <button className="text-orange-500 font-semibold border-b-2 border-orange-500">
                  All
                </button>
                <button className="text-gray-400 hover:text-white">Custom</button>
                <button className="text-gray-400 hover:text-white">Shared</button>
              </div>
            </div>

            {/* Right Section - View Icons */}
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <button
                  className={`p-2 rounded-md ${view === "grid" ? "bg-gray-700" : "bg-transparent"}`}
                  onClick={() => setView("grid")}
                >
                  <FaTh className="text-white" />
                </button>
                <button
                  className={`p-2 rounded-md ${view === "list" ? "bg-gray-700" : "bg-transparent"}`}
                  onClick={() => setView("list")}
                >
                  <FaBars className="text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-4 mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search workspace"
                className="w-70px px-3 py-1 bg-gray-900 text-white border border-gray-800 rounded-md focus:outline-none focus:ring focus:ring-orange-500 h-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                  onClick={clearSearch}
                >
                  <FaTimes />
                </button>
              )}
            </div>
          </div>

          {/* Workspace Content */}
          <div>
            {selectedTab === "workspaces" && (
              <div className="mt-6">
                <div className={view === "grid" ? "grid grid-cols-1 md:grid-cols-3 gap-4" : "list"}>
                  {filteredWorkspaces.map((workspace, index) => (
                    <div key={index} className="bg-gray-800 text-white p-4 rounded-md shadow-md">
                      <h3 className="text-xl font-semibold">{workspace.name}</h3>
                      <p className="text-sm">{workspace.status}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {selectedTab === "connectors" && <Connectors />}
            {selectedTab === "logs" && <Logs />}
            {selectedTab === "more" && <More />}
          </div>

          {/* React Router Section */}
          <Routes>
            <Route path="/workspace" element={<Workspace />} />
            <Route path="/connectors" element={<Connectors />} />
            <Route path="/logs" element={<Logs />} />
            <Route path="/more" element={<More />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

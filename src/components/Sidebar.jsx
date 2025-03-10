import { FaHome, FaPlug, FaFolder, FaEllipsisH, FaBell, FaCog, FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for navigation

const Sidebar = () => {
  return (
    <div className="h-screen w-20 bg-transparent text-white flex flex-col justify-between py-4">
      {/* Top Section - Logo */}
      <div className="flex flex-col items-center space-y-3">
        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
          <span className="text-lg font-bold">s</span>
        </div>
      {/* Middle Section - Main Menu */}
      <div className="flex flex-col items-center space-y-3">
        <SidebarIcon icon={<FaHome size="20" />} text="All Workspaces" to="/workspace" />
        <SidebarIcon icon={<FaPlug size="20" />} text="Connectors" to="/connectors" />
        <SidebarIcon icon={<FaFolder size="20" />} text="Logs" to="/logs" />
        <SidebarIcon icon={<FaEllipsisH size="20" />} text="More" to="/more" />
      </div>
      </div>

      {/* Bottom Section - Notifications, Settings, Help */}
      <div className="flex flex-col items-center space-y-3 mb-3">
        <SidebarIcon icon={<FaBell size="20" className="text-pink-500" />} text="Notifications" badge={true} to="/notifications" />
        <SidebarIcon icon={<FaCog size="20" />} text="Settings" to="/settings" />
        <SidebarIcon icon={<FaQuestionCircle size="20" />} text="Help" to="/help" />
      

      {/* Profile Image at Bottom */}
      <div className="flex flex-col items-center mb-4">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Profile"
          className="w-12 h-12 rounded-full border-2 border-pink-500 cursor-pointer hover:opacity-80"
        />
      </div>
      </div>
    </div>
  );
};

// Sidebar Icon Component
const SidebarIcon = ({ icon, text, badge, to }) => (
  <Link to={to} className="group relative flex items-center justify-center p-3 rounded-md hover:bg-gray-700 cursor-pointer">
    {icon}
    {badge && <span className="absolute top-0 right-0 bg-pink-500 text-white text-xs px-2 rounded-full">18</span>}
    <span className="absolute left-16 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {text}
    </span>
  </Link>
);

export default Sidebar;

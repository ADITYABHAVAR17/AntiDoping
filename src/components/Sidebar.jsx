// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaTachometerAlt, FaQuestionCircle, FaFileAlt, FaBars } from 'react-icons/fa';

function Sidebar() {
  const location = useLocation(); // To determine the current active route
  const [isCollapsed, setIsCollapsed] = useState(false); // State to handle collapse on small screens

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`flex flex-col h-screen bg-gray-900 text-white shadow-lg transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      {/* Sidebar toggle button for small screens */}
      <button onClick={toggleSidebar} className="p-4 text-white hover:bg-gray-800 focus:outline-none">
        <FaBars />
      </button>

      <div className="flex flex-col space-y-4 mt-4">
        <Link 
          to="/" 
          className={`p-4 hover:bg-gray-700 flex items-center ${location.pathname === '/' ? 'bg-gray-700' : ''}`}
        >
          <FaHome className={`mr-2 text-blue-400 transition-transform duration-300 ${isCollapsed ? 'scale-125' : ''}`} />
          {!isCollapsed && <span>Home</span>}
        </Link>
        
        <Link 
          to="/dashboard" 
          className={`p-4 hover:bg-gray-700 flex items-center ${location.pathname === '/dashboard' ? 'bg-gray-700' : ''}`}
        >
          <FaTachometerAlt className={`mr-2 text-green-400 transition-transform duration-300 ${isCollapsed ? 'scale-125' : ''}`} />
          {!isCollapsed && <span>Dashboard</span>}
        </Link>

        <Link 
          to="/quiz" 
          className={`p-4 hover:bg-gray-700 flex items-center ${location.pathname === '/quiz' ? 'bg-gray-700' : ''}`}
        >
          <FaQuestionCircle className={`mr-2 text-yellow-400 transition-transform duration-300 ${isCollapsed ? 'scale-125' : ''}`} />
          {!isCollapsed && <span>Take Quiz</span>}
        </Link>

        <Link 
          to="/content" 
          className={`p-4 hover:bg-gray-700 flex items-center ${location.pathname === '/content' ? 'bg-gray-700' : ''}`}
        >
          <FaFileAlt className={`mr-2 text-red-400 transition-transform duration-300 ${isCollapsed ? 'scale-125' : ''}`} />
          {!isCollapsed && <span>Educational Content</span>}
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;

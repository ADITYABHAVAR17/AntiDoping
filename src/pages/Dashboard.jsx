// src/pages/Dashboard.jsx
import React from 'react';
import { FaMedal, FaBell, FaBookOpen } from 'react-icons/fa'; // Import the book icon
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard() {
  // Sample data for user progress and chart
  const data = {
    labels: ['Module 1', 'Module 2', 'Module 3', 'Module 4', 'Module 5'],
    datasets: [
      {
        label: 'Progress',
        data: [80, 90, 70, 85, 60],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      {/* Top Section: Notifications and Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-center">
          <FaBell className="text-4xl mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Notifications</h2>
            <p>3 new updates on anti-doping regulations</p>
            <button className="mt-2 bg-blue-700 px-3 py-2 rounded text-sm hover:bg-blue-800">
              View Updates
            </button>
          </div>
        </div>

        <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg flex items-center">
          <FaMedal className="text-4xl mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Achievements</h2>
            <p>You've earned 2 new badges!</p>
            <button className="mt-2 bg-green-700 px-3 py-2 rounded text-sm hover:bg-green-800">
              View Achievements
            </button>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Progress</h2>
        <Bar data={data} options={{ responsive: true }} />
      </div>

      {/* Recent Activities Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <ul>
            <li className="mb-4">
              <div className="flex justify-between items-center">
                <span>Completed Module 1: Anti-Doping Basics</span>
                <span className="text-green-500">Completed</span>
              </div>
              <progress className="w-full h-2 rounded" value="100" max="100"></progress>
            </li>
            <li className="mb-4">
              <div className="flex justify-between items-center">
                <span>Completed Quiz: Prohibited Substances</span>
                <span className="text-green-500">Completed</span>
              </div>
              <progress className="w-full h-2 rounded" value="100" max="100"></progress>
            </li>
            <li className="mb-4">
              <div className="flex justify-between items-center">
                <span>In Progress: Module 3: Doping Control Process</span>
                <span className="text-yellow-500">In Progress</span>
              </div>
              <progress className="w-full h-2 rounded" value="60" max="100"></progress>
            </li>
          </ul>
        </div>
      </div>

      {/* Badges Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Badges</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-yellow-400 text-white p-4 rounded-lg shadow-lg">
            <FaMedal className="text-4xl mx-auto mb-2" />
            <p className="text-center">Anti-Doping Basics</p>
          </div>
          <div className="bg-yellow-400 text-white p-4 rounded-lg shadow-lg">
            <FaMedal className="text-4xl mx-auto mb-2" />
            <p className="text-center">Quiz Champion</p>
          </div>
          <div className="bg-yellow-400 text-white p-4 rounded-lg shadow-lg">
            <FaMedal className="text-4xl mx-auto mb-2" />
            <p className="text-center">Doping Control Expert</p>
          </div>
        </div>
      </div>

      {/* Interactive Modules Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Interactive Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/modules" className="bg-blue-500 text-white p-4 rounded-lg shadow-lg flex items-center">
            <FaBookOpen className="text-4xl mr-2" />
            <span>View All Modules</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

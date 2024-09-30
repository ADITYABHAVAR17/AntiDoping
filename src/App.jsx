// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import QuizPage from './pages/QuizPage';
import ContentPage from './pages/ContentPage';
import InteractiveModulesPage from './pages/InteractiveModulesPage';
import Module1 from './pages/modules/Module1';
import Module2 from './pages/modules/Module2';
import Signup from './pages/Signup'; // Import the Signup page
import NotFound from './pages/NotFound'; // Import a NotFound page component

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Topbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/content" element={<ContentPage />} />
            <Route path="/modules" element={<InteractiveModulesPage />} />
            <Route path="/modules/module1" element={<Module1 />} />
            <Route path="/modules/module2" element={<Module2 />} />
            <Route path="/signup" element={<Signup />} /> {/* Added Signup route */}
            <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
          </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;

import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import Home from './pages/Home';
import PlanetDetail from './pages/PlanetDetail';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      {/* Overlay header */}
      <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
        <div className="flex justify-between items-center px-6 py-4">
          <Link
            to="/"
            className="text-2xl font-bold text-gray-900 dark:text-gray-100 pointer-events-auto"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}
          >
            SolarScope
          </Link>
          <button
            aria-label="Toggle Dark Mode"
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl text-gray-900 dark:text-gray-100 pointer-events-auto"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </div>
      {/* Main content fills the screen */}
      <div
        className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 transition-colors"
        style={{ height: '100vh', width: '100vw' }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planet/:id" element={<PlanetDetail />} />
        </Routes>
      </div>
    </div>
  );
}

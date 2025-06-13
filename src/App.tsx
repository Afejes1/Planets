import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import Home from './pages/Home';
import PlanetDetail from './pages/PlanetDetail';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
        <header className="p-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            SolarScope
          </Link>
          <button
            aria-label="Toggle Dark Mode"
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planet/:id" element={<PlanetDetail />} />
        </Routes>
      </div>
    </div>
  );
}

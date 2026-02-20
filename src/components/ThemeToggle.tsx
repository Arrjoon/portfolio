'use client';

import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false); // Set default to true for dark mode

  useEffect(() => {
    // Check if user has a preference saved in localStorage
    const savedPreference = localStorage.getItem('darkMode');
    
    if (savedPreference !== null) {
      // Use saved preference if exists
      const isDark = savedPreference === 'true';
      setDarkMode(isDark);
    } else {
      // Default to dark mode if no preference saved
      setDarkMode(true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <MoonIcon className="h-5 w-5 text-gray-600" />
      ) : (
        <SunIcon className="h-5  w-5 text-yellow-400" />
      )}
    </button>
  );
}
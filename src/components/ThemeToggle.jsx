import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  // On mount, check if user has a saved preference or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  // Toggle theme and update localStorage & html class
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-2 py-2 text-[10px] sm:text-sm rounded bg-primary text-white hover:bg-secondary transition"
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggle;

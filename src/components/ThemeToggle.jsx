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
    <div onClick={toggleTheme} className='flex w-8 h-8 bg-gray-200 ml-8 rounded-sm'>
      {theme === 'light' ? <img className='w-full h-full bg-white rounded-sm' src='/day-mode.png' alt="" /> : <img className='w-full' src='/night-mode.png' alt="" />}
    </div>
  );
};

export default ThemeToggle;

import { useState, useEffect } from 'react';

const useDarkMode = () => {
  // Initialize with 'light' as default, will be updated based on system preference in useEffect
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if localStorage has a theme preference
    const savedTheme = localStorage.getItem('theme');

    // If no saved preference, check system preference
    let isDarkInitially = false;
    if (savedTheme === null) {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(systemPrefersDark);
      localStorage.setItem('theme', systemPrefersDark ? 'dark' : 'light');
      isDarkInitially = systemPrefersDark;
    } else {
      // Use saved preference that already exists in localStorage
      isDarkInitially = savedTheme === 'dark';
      setIsDark(isDarkInitially);
    }

    // Apply theme
    if (isDarkInitially) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle function
  const toggleDarkMode = () => {
    const newTheme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);

    // As setState is async, you should invert the value based on previous state value
    // setIsDark(!isDark) => Is not okay, because if you toggle the button multiple time, it could causes conlicts
    // React docs : https://react.dev/learn/queueing-a-series-of-state-updates#updating-the-same-state-multiple-times-before-the-next-render
    setIsDark((prevState) => !prevState);

    // Apply theme
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return { isDark, toggleDarkMode };
};

export default useDarkMode;

import { useEffect } from 'react';

const ColorThemeToggle = () => {
  useEffect(() => {
    // Apply saved theme on mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }

    const darkBtn = document.getElementById('laguna_dark_mode--btn');
    const lightBtn = document.getElementById('laguna_light_mode--btn');

    if (darkBtn) {
      darkBtn.addEventListener('click', () => {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      });
    }

    if (lightBtn) {
      lightBtn.addEventListener('click', () => {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      });
    }

    // Optional cleanup
    return () => {
      if (darkBtn) darkBtn.removeEventListener('click', () => {});
      if (lightBtn) lightBtn.removeEventListener('click', () => {});
    };
  }, []);

  return null;
};

export default ColorThemeToggle;
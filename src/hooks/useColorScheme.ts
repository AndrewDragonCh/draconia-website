import { useState, useEffect } from 'react';

function useColorScheme() {
  // Initialize state with the color scheme from localStorage if available, otherwise use system preference
  const [colorScheme, setColorScheme] = useState(() => {  
    const storedPreference = localStorage.getItem('colorScheme');
    if (storedPreference) {
      return storedPreference;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: { matches: boolean; }) => {
      const newScheme = e.matches ? 'dark' : 'light';
      setColorScheme(newScheme);
      // Update localStorage with the new scheme
      localStorage.setItem('colorScheme', newScheme);
    };

    // Listen for changes
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return colorScheme;
}

export default useColorScheme;
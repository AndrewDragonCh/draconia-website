import { useState, useEffect } from 'react';

function useColorScheme() {
  // Initialize state with the color scheme from localStorage if available, otherwise use system preference
  const [colorScheme, setColorScheme] = useState(() => {  
    if (typeof window !== 'undefined') { // Check if running on client side
      const storedPreference = localStorage.getItem('colorScheme');
      if (storedPreference) {
        return storedPreference;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    // Default color scheme if window is not available (e.g., during SSR)
    return 'light';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') { // Check if running on client side
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
    }
  }, []);

  return colorScheme;
}

export default useColorScheme;
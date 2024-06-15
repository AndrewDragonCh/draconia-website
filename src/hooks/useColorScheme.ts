import { useState, useEffect } from 'react';

function useColorScheme() {
  // Initialize state with the current color scheme
  const [colorScheme, setColorScheme] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: { matches: unknown; }) => {
      setColorScheme(e.matches ? 'dark' : 'light');
    };

    // Listen for changes
    mediaQuery.addListener(handleChange);

    // Cleanup
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  return colorScheme;
}

export default useColorScheme;
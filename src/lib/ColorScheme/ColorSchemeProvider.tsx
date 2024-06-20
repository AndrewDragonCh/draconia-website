import useColorScheme from '../../hooks/useColorScheme';
import { ColorSchemeContext } from './ColorSchemeContext';  

type ColorSchemeProviderProps = {
  children: React.ReactNode;
};

export const ColorSchemeProvider: React.FC<ColorSchemeProviderProps> = ({ children }) => {
  const colorScheme = useColorScheme();

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, setColorScheme: () => {} }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};
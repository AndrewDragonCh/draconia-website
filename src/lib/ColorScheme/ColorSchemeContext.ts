import { createContext } from 'react';

export const ColorSchemeContext = createContext({ colorScheme: 'light', setColorScheme: () => {} });
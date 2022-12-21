import { createContext, useContext } from "react";

const ThemeContext = createContext('black')

export default ThemeContext;

export function useTheme(){
  const theme = useContext(ThemeContext);
  return theme;
}
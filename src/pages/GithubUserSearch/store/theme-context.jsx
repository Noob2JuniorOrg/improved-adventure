import React, { useState } from 'react';

const ThemeContext = React.createContext({
  lightTheme: true,
  toggleTheme: () => {},
});

export const ThemeContextProvider = (props) => {
  const [themeIsLight, setThemeIsLight] = useState(true);

  const toggleTheme = () => {
    setThemeIsLight((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider
      value={{
        lightTheme: themeIsLight,
        toggleTheme: toggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

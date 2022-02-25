import React, {createContext} from 'react';

const themes = {
  dark: {
    backgroundColor: 'black',
    backgroundCard: '#25282c',
    color: 'white',
  },

  light: {
    backgroundColor: 'white',
    backgroundCard: '#fff',
    color: 'black',
  },
};

export const ThemeContext = createContext({});

const ThemeContextProvider = ({children}: any) => {
  const [dark, setDark] = React.useState(false);

  const toggle = () => {
    setDark(!dark);
  };

  const theme = !dark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{theme, dark, toggle}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

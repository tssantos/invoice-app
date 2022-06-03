import { IAppContext } from '../types';
import React, { PropsWithChildren, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const defaultState: IAppContext = {
  theme: 'light',
  toggleTheme: () => { },
  isDesktop: false,
  isTablet: false,
  isMobile: false,
};

const AppContext = React.createContext<IAppContext>(defaultState);

export const AppProvider = (props: PropsWithChildren<{}>) => {
  const [theme, setTheme] = useState(defaultState.theme);

  const toggleTheme = () => {
    setTheme(theme => theme == 'light' ? 'dark' : 'light');
  };

  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' })
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 375px)' })

  return (
    <AppContext.Provider value={{
      theme,
      toggleTheme,
      isDesktop,
      isTablet,
      isMobile,
    }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;

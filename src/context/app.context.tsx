import { IAppContext } from '../types';
import React, { PropsWithChildren, useState } from 'react';

const defaultState: IAppContext = {
  theme: 'light',
  toggleTheme: () => { },
};

const AppContext = React.createContext<IAppContext>(defaultState);

export const AppProvider = (props: PropsWithChildren<{}>) => {
  const [theme, setTheme] = useState(defaultState.theme);

  const toggleTheme = () => {
    setTheme(theme => theme == 'light' ? 'dark' : 'light');
  };

  return (
    <AppContext.Provider value={{
      theme,
      toggleTheme,
    }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;

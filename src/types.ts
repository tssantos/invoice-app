export type Theme = 'light' | 'dark';

export type IAppContext = {
  theme: Theme;
  toggleTheme: () => void;
};

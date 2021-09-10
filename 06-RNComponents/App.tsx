import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  Theme,
} from '@react-navigation/native';
import React from 'react';
import {ThemeProvider} from './context/themeContext/ThemeContext';

import {Navigator} from './src/navigator/Navigator';

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors,
//   },
// };

const App = () => {
  return (
    // theme={customTheme}
    <AppState>
      <Navigator />
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;

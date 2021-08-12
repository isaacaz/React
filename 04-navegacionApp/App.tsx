import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './src/navigate/StackNavigator';
import {MenuLateral} from './src/navigate/MenuLateral';
import {AuthProvider} from './src/context/AuthContext';

const App = () => {
  return (
    <AppState>
      <NavigationContainer>
        {/* <StackNavigator /> */}
        {/* <MenuLateralBasico /> */}
        <MenuLateral />
      </NavigationContainer>
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;

import React, {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

export interface authContextProps {
  authState: AuthState;
  signIn: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  logout: () => void;
  changeUsername: (username: string) => void;
}

export const AuthContext = createContext({} as authContextProps);

export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const changeFavoriteIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const logout = () => {
    dispatch({type: 'logout'});
  };

  const changeUsername = (username: string) => {
    dispatch({type: 'changeUsername', payload: username});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        changeFavoriteIcon,
        logout,
        changeUsername,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

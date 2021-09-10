import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {HeaderTitle} from './HeaderTitle';
import {style} from '../theme/appTheme';
import {ThemeContext} from '../../context/themeContext/ThemeContext';

export const ChangeThemeScreen = () => {
  const {setDarkTheme} = useContext(ThemeContext);

  return (
    <View style={style.marginGlobal}>
      <HeaderTitle title="Theme" />
      <TouchableOpacity
        onPress={setDarkTheme}
        activeOpacity={0.8}
        style={{
          width: 150,
          height: 50,
          borderRadius: 20,
          backgroundColor: '#5856D6',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 22,
          }}>
          Light / Dark
        </Text>
      </TouchableOpacity>
    </View>
  );
};

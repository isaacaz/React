import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../../context/themeContext/ThemeContext';
import {style} from '../theme/appTheme';

interface Props {
  title: string;
}

export const HeaderTitle = ({title}: Props) => {
  const {top} = useSafeAreaInsets();

  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={{marginTop: top + 20, marginBottom: 20}}>
      <Text style={{...style.title, color: colors.text}}>{title}</Text>
    </View>
  );
};

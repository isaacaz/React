import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, View} from 'react-native';
import {styles, colores} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TouchableIcon} from '../components/TouchableIcon';

export const Tab1Screen = () => {
  const {top} = useSafeAreaInsets();
  return (
    <View
      style={{
        ...styles.globalMargin,
        marginTop: top + 10,
      }}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="attach-outline" />
        <TouchableIcon iconName="clipboard-outline" />
        <TouchableIcon iconName="contrast-outline" />
        <TouchableIcon iconName="earth-outline" />
        <TouchableIcon iconName="finger-print-outline" />
        <TouchableIcon iconName="thumbs-up-outline" />
      </Text>
    </View>
  );
};

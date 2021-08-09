import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, View} from 'react-native';
import {styles, colores} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

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
        <Icon name="airplane-outline" size={80} color={colores.primary} />
        <Icon name="attach-outline" size={80} color={colores.primary} />
        <Icon name="clipboard-outline" size={80} color={colores.primary} />
        <Icon name="contrast-outline" size={80} color={colores.primary} />
        <Icon name="earth-outline" size={80} color={colores.primary} />
        <Icon name="finger-print-outline" size={80} color={colores.primary} />
        <Icon name="thumbs-up-outline" size={80} color={colores.primary} />
      </Text>
    </View>
  );
};

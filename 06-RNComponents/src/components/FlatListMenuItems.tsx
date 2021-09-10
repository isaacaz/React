import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {MenuItem} from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {style} from '../theme/appTheme';
import {CommonActions, useNavigation, useTheme} from '@react-navigation/native';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItems = ({menuItem}: Props) => {
  const navigation = useNavigation();
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.dispatch(
          CommonActions.navigate({
            name: menuItem.component,
            params: {},
          }),
        )
      }>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color="#5856D6" size={23} />
        <Text
          style={{
            ...styles.itemText,
            color: colors.text,
          }}>
          {menuItem.name}
        </Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-forward-outline" color="#5856D6" size={23} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
});

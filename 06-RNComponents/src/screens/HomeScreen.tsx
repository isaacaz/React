import 'react-native-gesture-handler';
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {style} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FlatListMenuItems} from '../components/FlatListMenuItems';
import {menuItems} from '../data/menuItems';
import {HeaderTitle} from '../components/HeaderTitle';
import {ItemSeparator} from '../components/ItemSeparator';

export const HomeScreen = () => {
  return (
    <View style={{flex: 1, ...style.marginGlobal}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItems menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={<HeaderTitle title="Opciones del menú" />}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};

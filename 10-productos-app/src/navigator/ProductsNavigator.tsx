import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProductsScreen} from '../screens/ProductsScreen copy';
import {ProductScreen} from '../screens/ProductScreen';

export type ProductsStackParams = {
  ProductsScreen: undefined;
  ProductScreen: {id?: string; name?: string};
};

const Stack = createStackNavigator();

export const ProductsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen
        name="ProductsScreen"
        component={ProductsScreen}
        options={{title: 'Productos'}}
      />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </Stack.Navigator>
  );
};
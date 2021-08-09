import {DrawerScreenProps} from '@react-navigation/drawer';
// import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles, colores} from '../theme/appTheme';

// interface Props extends StackScreenProps<any, any> {}

interface Props extends DrawerScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 10}}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu-outline" color={colores.primary} size={35} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button
        title="Ir pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text
        style={{
          marginVertical: 20,
          fontSize: 20,
          marginLeft: 5,
        }}>
        Navegar con argumento
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              Id: 1,
              Nombre: 'Pedro',
            })
          }>
          <Icon name="body-outline" color="white" size={35} />
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              Id: 2,
              Nombre: 'Maria',
            })
          }>
          <Icon name="woman-outline" color="white" size={35} />
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

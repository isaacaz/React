import React, {useState} from 'react';
import {Button, Modal, Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {style} from '../theme/appTheme';

export const ModalScreen = () => {
  const [isVisibled, setIsVisibled] = useState(false);

  return (
    <View style={style.marginGlobal}>
      <HeaderTitle title="Modal Screen" />
      <Button title="Abrir modal" onPress={() => setIsVisibled(true)} />

      <Modal animationType="slide" visible={isVisibled} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 200,
              height: 200,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              elevation: 10,
              borderRadius: 5,
            }}>
            {/* <HeaderTitle title="Modal" /> */}
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Modal</Text>
            <Text style={{fontSize: 16, fontWeight: '300', marginBottom: 20}}>
              Cuerpo del modal
            </Text>
            <Button title="Cerrar" onPress={() => setIsVisibled(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

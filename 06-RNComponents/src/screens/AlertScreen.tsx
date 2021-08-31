import React from 'react';
import {Alert, Button, View} from 'react-native';

import prompt from 'react-native-prompt-android';

import {HeaderTitle} from '../components/HeaderTitle';
import {style} from '../theme/appTheme';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Titulo',
      'Este es el mensaje  de la alerta.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('onDismiss'),
      },
    );
  };

  const showPrompt = () => {
    // Alert.prompt(
    //   '¿Está seguro?',
    //   'Esta accion no se puede revertir',
    //   (valor: string) => console.log('info:', valor),
    //   'plain-text',
    // );
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };

  return (
    <View style={style.marginGlobal}>
      <HeaderTitle title="Alerts" />

      <Button title="Mostrar Alerta" onPress={showAlert} />
      <View style={{height: 10}} />
      <Button title="Mostrar Prompt" onPress={showPrompt} />
    </View>
  );
};

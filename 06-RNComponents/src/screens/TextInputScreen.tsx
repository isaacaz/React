import React, {useContext} from 'react';
import {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {TextInput, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {HeaderTitle} from '../components/HeaderTitle';
import {style} from '../theme/appTheme';
import {useForm} from '../hooks/useForm';
import {CustomSwitch} from '../components/CustomSwitch';
import {ThemeContext} from '../../context/themeContext/ThemeContext';

export const TextInputScreen = () => {
  const {
    theme: {colors, dividerColor},
  } = useContext(ThemeContext);

  const {form, onChange, isSubscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={style.marginGlobal}>
            <HeaderTitle title="TextInputs" />
            <TextInput
              style={{
                ...styleScreen.inputStyle,
                borderColor: colors.text,
                color: colors.text,
              }}
              placeholder="Ingrese su nombre"
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
              placeholderTextColor={dividerColor}
            />
            <TextInput
              style={{
                ...styleScreen.inputStyle,
                borderColor: colors.text,
                color: colors.text,
              }}
              placeholder="Ingrese su email"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address"
              keyboardAppearance="dark"
              placeholderTextColor={dividerColor}
            />
            <View style={styleScreen.switchRow}>
              <Text>Suscribirse</Text>
              <CustomSwitch
                isOn={isSubscribed}
                onChange={value => onChange(value, 'isSubscribed')}
              />
            </View>
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <TextInput
              style={{
                ...styleScreen.inputStyle,
                borderColor: colors.text,
                color: colors.text,
              }}
              placeholder="Ingrese su telefono"
              onChangeText={value => onChange(value, 'phone')}
              keyboardType="phone-pad"
              placeholderTextColor={dividerColor}
            />
            <View style={{height: 100}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styleScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
});

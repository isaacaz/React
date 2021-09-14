import React, {useContext, useRef} from 'react';
import {Animated, Button, Easing, StyleSheet, View} from 'react-native';
import {ThemeContext} from '../../context/themeContext/ThemeContext';
import {useAnimation} from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const {opacity, position, fadeIn, fadeOut, startMovingPosition} =
    useAnimation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          backgroundColor: colors.primary,
          opacity,
          marginBottom: 20,
          transform: [
            {
              translateY: position,
            },
          ],
        }}
      />
      <Button
        onPress={() => {
          fadeIn();
          startMovingPosition(100);
        }}
        title="fadeIn"
        color={colors.primary}
      />
      <Button onPress={fadeOut} title="fadeOut" color={colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    //backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});

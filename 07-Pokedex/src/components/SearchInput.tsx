import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const SearchInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textBackgroud}>
        <TextInput
          placeholder="Buscar pokémon"
          style={styles.textInput}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Icon name="search-outline" color="grey" size={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
  textBackgroud: {
    backgroundColor: '#F3F1F3',
    borderRadius: 50,
    height: 40,
    paddingTop: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },
});

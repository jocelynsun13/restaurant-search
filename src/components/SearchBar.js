import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return <View style={styles.background}>
    <Ionicons name="ios-search" style={styles.iconStyle}/>
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.inputStyle}
      placeholder="Search"
      value={term}
      onChangeText={newTerm => onTermChange(newTerm)}
      onEndEditing={() => onTermSubmit() }
    />
  </View>
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 35,
    borderRadius: 10,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 15
  },
  inputStyle: {
    flex: 1
  },
  iconStyle: {
    fontSize: 20,
    alignSelf: 'center',
    marginHorizontal: 11
  }
});

export default SearchBar;

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>FrostCool</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'black',
  },
  text: {
    color: 'lightblue',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;

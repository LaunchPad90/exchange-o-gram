import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './components/nav'

export default function App() {
  return (
    <View style={styles.container}>
      <Nav />
      <Text>Share photos instantaneously, on the line! Instantaneously!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    backgroundColor: '#000',
  }
});

import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import Nav from './components/nav'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Nav />
        <Text style={styles.text}>Share your photos instantaneously, ON THE LINE! INSTANTANEOUSLY!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  }
});


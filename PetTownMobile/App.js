import React from 'react';
import Header from './Components/header';
import { StyleSheet, Text, View } from 'react-native';
import {AppLoading} from "expo";

export default function App() {

    
  return (
    <View style={styles.container}>
      <Header title="HELLO PETTOWN"></Header>
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={styles.Name}>Hello it is me Alex Howe!</Text>
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
  Name: {
    flex: 2,
    fontSize: 20,
    color: '#800000',
  }
});

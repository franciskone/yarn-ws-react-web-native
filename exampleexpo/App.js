import React from 'react';
// import shared from 'shared';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // shared.b('We are the Expo');
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
});

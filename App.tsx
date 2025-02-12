/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native';


function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.safeArea}>
      <TextInput style={styles.text}
      selection={{start: 0, end: 0}}
      >
        hello World!
      </TextInput>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: { backgroundColor: 'white', height: '100%' },
  text: {
    height:100,
    width:100,
    alignSelf: 'center',
    backgroundColor: 'yellow',
  },
});

export default App;

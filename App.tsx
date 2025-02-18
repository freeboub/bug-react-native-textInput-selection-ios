/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';


function App(): React.JSX.Element {
  const [selection, setSelection] = useState({start: 0, end: 0});
  return (
    <SafeAreaView style={styles.safeArea}>
      <TextInput style={styles.text}
                 selection={selection}>
        hello World!
      </TextInput>
      <TouchableOpacity style={styles.pressable}
      onPress={() => setSelection((selection) => ({start: 0, end: selection.end  + 1}))}
      >
        <Text>Press Me !</Text>
      </TouchableOpacity>
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
  pressable: {
    height:100,
    width:100,
    alignSelf: 'center',
    backgroundColor: 'pink',  
  }
});

export default App;

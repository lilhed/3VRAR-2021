import * as React from 'react';
import {Image, StyleSheet, TouchableNativeFeedback} from 'react-native';

import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/Logo.png')} style={styles.logo}/>

      <div style={styles.characterSelector} onClick={characterSelection}>
        <Image source={require('../assets/images/normal_duck.png')} style={styles.characterSelectorImage}/>
        <Text style={styles.characterSelectorName}>Normal duck</Text>
      </div>
      <div style={styles.characterSelector} onClick={characterSelection}>
        <Image source={require('../assets/images/autistic_duck.png')} style={styles.characterSelectorImage}/>
        <Text style={styles.characterSelectorName}>Autistic duck</Text>
      </div>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 328,
    height: 117.5
  },
  characterSelector: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center"
  },
  characterSelectorImage: {
      width: 150,
      height: 150
  },
  characterSelectorName: {
  }
});

const characterSelection = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log("yo " + event)
}

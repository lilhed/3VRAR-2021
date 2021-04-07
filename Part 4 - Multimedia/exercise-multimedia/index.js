import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';
import Statue from './entities/Statue'

export default class exercise_multimedia extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.panel}>
          <View style={styles.greetingBox}>
            <Text style={styles.greeting}>
              Bienvenue dans l'église
            </Text>
          </View>
          
        </View>
        <View>
          
            
        </View>
        <VrButton style={[{
            transform: [
              {translateX: -40},
            ],
            width: 200,
            borderColor: 'blue',
            borderWidth: 2,
          }]}
          />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 200,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: '#00B0FF',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 80,
  },
});

AppRegistry.registerComponent('exercise-multimedia', () => exercise_multimedia);
AppRegistry.registerComponent('Statue', () => Statue);

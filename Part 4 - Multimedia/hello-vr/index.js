import React from 'react';
import {Environment, NativeModules, asset, View, StyleSheet, VrButton, Text, Image, AppRegistry} from 'react-360';
const {VideoModule} = NativeModules;
export default class hello_vr extends React.Component {
  
  a = true 
  fishVideo = () => {
    // Play fish video
    a = true
    VideoModule.createPlayer('myplayer');
    VideoModule.play('myplayer', { source: {url: asset('media/video.mp4').uri}, muted: false});
    
    Environment.setScreen('default', 'myplayer', 'default', 0, 0, 1000, 500);
  };

  VideoStop = () => {
    a = false
  };


  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}> 
       
        <VrButton onClick={this.fishVideo}>
          <Text>PLAY</Text>
        </VrButton>
        </View>
        <VrButton onClick={this.fishVideo.apply(false)}>
          <Text>STOP</Text>
        </VrButton>
      </View>
  
      );
  
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('hello_vr', () => hello_vr);

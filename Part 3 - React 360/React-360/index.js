import React from "react";
import { AppRegistry } from "react-360";

import SceneManager from "./components/SceneManager.js";
import config from "./etc/config.json";

import {Environment, NativeModules, asset, View, StyleSheet, VrButton, Text, Image} from 'react-360';
import { LoopOnce } from "three";
const { VideoModule, AudioModule } = NativeModules;

// Play song
AudioModule.playEnvironmental({
  source: asset('songs/thefatrat-maisy-kay-the-storm-minecraft-animation-music-video.mp3'),
  volume: 0.25
});

export default class App extends React.Component {

  Video = () => {
 
    // Play video
    VideoModule.createPlayer('myplayer');
    VideoModule.play('myplayer', { source: {url: asset('medias/nether-update-official-trailer.mp4').uri}, muted: true });
    Environment.setScreen('default', 'myplayer', 'default', 0, 0, 1000, 500);
  };
  
  render() {
    return (
      <View>
        <SceneManager
          scenes={config.scenes}
          initialSceneId={config.initialSceneId}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent("App", () => App);

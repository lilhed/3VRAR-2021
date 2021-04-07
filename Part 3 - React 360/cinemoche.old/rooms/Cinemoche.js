import React from 'react';
import {
  //Environment,
  //NativeModules,
  asset,
  staticAssetURL,
  AppRegistry,
  StyleSheet,
  View,
  AmbientLight,
  Model,
  Video,
  VrButton,
} from 'react-360';
//const { VideoModule } = NativeModules;

export default class Cinemoche extends React.Component {
  changeScene = () => {
    console.log(this.props)
    this.props.onClick("Mars");
  }
  /*
  componentDidMount() {
    //Environment.setBackgroundVideo(vPlayer);
    const vPlayer = VideoModule.createPlayer("bgPlayer");
    console.log(VideoModule)
    vPlayer.play({ source: {url: staticAssetURL("./bg_video.mp4")}, stereo: '2D', muted: false });

    Environment.setScreen(
      "cinescreen",
      "bgPlayer",
      'default',
      0, 0, 960, 704
    );
  }*/

  render() {
    return (
      <View>
        <AmbientLight intensity={5} />
        <Model
          source={{
            obj: asset('./cinemoche/cinemoche.obj'),
            mtl: asset('./cinemoche/cinemoche.mtl')
          }}
          style={{
            transform: [
              { translate: [0, 0, 0] },
              { rotateX: 0 },
              { rotateY: 90 },
              { scaleX: 5 },
              { scaleY: 5 },
              { scaleZ: 5 },
            ]
          }}
        />

        <Video style={styles.videoScreen}
          source={{ uri: staticAssetURL("./bg_video.mp4") }}
          stereo='2D'
        />

        <VrButton style={styles.button} onClick={() => this.props.onClick("Mars")}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  videoScreen: {
    transform: [ { translate: [-35, 50, 1] } ],
    width: 70,
    height: 70
  },
  button: {
    transform: [ { translate: [-70, 70, 2] } ],
    width: 1000,
    height: 350,
    backgroundColor: "#ec0ed5",
    opacity: 0.2
  },
  buttonHover: {
    backgroundColor: "#a70d95"
  }
});

AppRegistry.registerComponent('Cinemoche', () => Cinemoche);
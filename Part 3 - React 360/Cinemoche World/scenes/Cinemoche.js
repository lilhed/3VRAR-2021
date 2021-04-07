import React from 'react';
import {
  Environment,
  asset,
  StyleSheet,
  View,
  Model,
  Video,
  VrButton
} from 'react-360';
import { Scenes } from "../index";
import staticAssetURL from "react-360/Libraries/Utilities/staticAssetURL";

const SCENE_BG = asset("./scenes/360_cinemoche.jpg");

export default class Cinemoche extends React.Component {
  state = {
    screenHighlighted: false
  };

  constructor(props) {
    super(props);
    Environment.setBackgroundImage(SCENE_BG);
  }

  setScreenHighlight(state) {
    this.setState({ screenHighlighted: state });
  }

  toggleScreenHighlight() {
    this.setState({ screenHighlighted: !this.state.screenHighlighted });
  }

  render() {
    return (
      <View style={styles.cinemocheContainer}>
        <Model
          source={{
            obj: asset("./models/cinemoche/cinemoche.obj"),
            mtl: asset("./models/cinemoche/cinemoche.mtl")
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

        <Video
          style={styles.video}
          source={{ uri: staticAssetURL("./videos/cinemoche_movie.mp4") }}
          stereo="2D"
          loop={true}
          controls={true}
        />

        <View>
          <VrButton
            style={[
              styles.screenButton,
              this.state.screenHighlighted ? styles.screenButtonHighlighted: styles.screenButtonIdle
            ]}
            onClick={() => this.props.setRoom(Scenes.MARS)}
            onEnter={() => this.setScreenHighlight(true)}
            onExit={() => this.setScreenHighlight(false)}
          />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  cinemocheContainer: {
    transform: [{ translate: [-5, -10, -35] }]
  },
  cinemoche: {
    transform: [
      { translate: [0, 0, 0] },
      { rotateX: 0 },
      { rotateY: 90 },
      { scaleX: 5 },
      { scaleY: 5 },
      { scaleZ: 5 },
    ]
  },
  video: {
    transform: [{ translate: [-35, 45, 1] }],
    width: 70,
    height: 40
  },
  screenButton: {
    transform: [
      { translateX: -2 },
      { translateY: 65 },
      { translateZ: 5 },
      { scaleX: 15 },
      { scaleY: 9 }
    ],
    width: 2,
  },
  screenButtonIdle: {
    borderColor: 'rgba(233, 237, 17, 0.05)',
    borderWidth: 2,
  },
  screenButtonHighlighted: {
    borderColor: 'rgba(233, 237, 17, 0.2)',
    borderWidth: 2,
  }
});

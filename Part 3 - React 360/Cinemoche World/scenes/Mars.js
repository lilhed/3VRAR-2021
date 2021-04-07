import React from 'react';
import {
  Environment,
  asset,
  StyleSheet,
  View,
  VrButton,
} from 'react-360';
import { Scenes } from "../index";

const SCENE_BG = asset("./scenes/360_mars.jpg");

export default class Mars extends React.Component {
  state = {
    doorHighlighted: false
  };

  constructor(props) {
    super(props);
    Environment.setBackgroundImage(SCENE_BG);
  }

  setDoorHighlight(state) {
    this.setState({ doorHighlighted: state });
  }

  toggleDoorHighlight() {
    this.setState({ doorHighlighted: !this.state.doorHighlighted });
  }

  render() {
    return (
      <View style={styles.marsContainer}>
        <VrButton style={[
          styles.doorButton,
          this.state.doorHighlighted ? styles.doorButtonHighlighted: styles.doorButtonIdle
        ]}
        onClick={() => this.props.setRoom(Scenes.CINEMOCHE)}
        onEnter={() => this.setDoorHighlight(true)}
        onExit={() => this.setDoorHighlight(false)}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  marsContainer: {
    transform: [{ translate: [0, 0, -2] }]
  },
  doorButton: {
    transform: [
      { translateX: -2 },
      { translateY: 0 },
      { translateZ: -180 },
      { rotateY: 180 },
      { scaleX: 2 },
      { scaleY: 3 }
    ],
  },
  doorButtonIdle: {
    borderColor: 'rgba(233, 237, 17, 0.05)',
    borderWidth: 2,
  },
  doorButtonHighlighted: {
    borderColor: 'rgba(233, 237, 17, 0.2)',
    borderWidth: 2,
  }
});

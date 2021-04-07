import React from 'react';
import {
  Environment,
  asset,
  StyleSheet,
  View,
  Model,
  VrButton,
  Animated
} from 'react-360';
import { Easing } from "react-native";
import { Scenes } from "../index";

const SCENE_BG = asset("./scenes/360_mars.jpg");

export default class Mars extends React.Component {
  state = {
    tfitScale: new Animated.Value(1),
    tfitRotation: new Animated.Value(0),
    doorHighlighted: false
  };

  constructor(props) {
    super(props);
    Environment.setBackgroundImage(SCENE_BG);
  }

  componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.tfitScale, {
          toValue: 1.5,
          duration: 1000,
          easing: Easing.linear
        }),
        Animated.timing(this.state.tfitScale, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear
        }),
      ]),
      { iterations: -1 }
    ).start();

    Animated.timing(this.state.tfitRotation, {
      toValue: 7500000,
      duration: 10000000,
      easing: Easing.linear
    }).start();
  }

  setDoorHighlight(state) {
    this.setState({ doorHighlighted: state });
  }

  toggleDoorHighlight() {
    this.setState({ doorHighlighted: !this.state.doorHighlighted });
  }

  render() {
    console.log(this.state.tfitScale)
    return (
      <View style={styles.marsContainer}>
        <Animated.View
          style={{
            transform: [
              { translate: [5, 0, -25] },
              { rotateX: this.state.tfitRotation },
              { scaleX: this.state.tfitScale },
              { scaleY: this.state.tfitScale },
              { scaleZ: this.state.tfitScale },
            ]
          }}
        >
          <Model
            source={{
              obj: asset("./models/tfit/thefuckisthis.obj"),
              mtl: asset("./models/tfit/thefuckisthis.mtl")
            }}
            style={{
              transform: [
                { translate: [0, 0, 0] },
                { rotateX: 0 },
                { rotateY: 60 },
                { scaleX: 1 },
                { scaleY: 1 },
                { scaleZ: 1 },
              ]
            }}
          />
        </Animated.View>

        <View>
          <VrButton style={[
            styles.doorButton,
            this.state.doorHighlighted ? styles.doorButtonHighlighted: styles.doorButtonIdle
          ]}
                    onClick={() => this.props.setRoom(Scenes.CINEMOCHE)}
                    onEnter={() => this.setDoorHighlight(true)}
                    onExit={() => this.setDoorHighlight(false)}
          />
        </View>
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
    ]
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

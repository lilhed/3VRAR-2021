import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Environment,
  asset,
  VrButton,
  staticAssetURL,
  Video,
  Animated,
} from 'react-360';

export default class CinemaScreen extends Component {
  state = {
    doorHighlighted: false,
    moveAnim: new Animated.Value(0)
  };


  constructor () {
    super();
    Environment.setBackgroundImage(asset(`rooms/screen.jpg`));
  }

  setHover (state) {
    this.setState({ doorHighlighted: state });
  }

  toggleMove(){
    Animated.timing(this.state.moveAnim, {
      toValue: this.state.moveAnim._value > 0 ? -100:100,
      duration: 2000
    }).start();
  }

  render() {
    return (
        <View style={{transform: [ {translate: [0, 0, -2]} ]}}>
          <VrButton style={[{
              transform: [
                {translateX: -6 },
                {translateY: 1 },
                {translateZ: 180 },
                {rotateY: 180},
                {scaleX: 5},
                {scaleY: 6}
             ], width: 2,
          }, this.state.doorHighlighted ? styles.doorHighlighted: styles.door]}
                      onClick={() => this.props.setRoom('hall')}
                      onEnter={() => this.setHover(true)}
                      onExit={() => this.setHover(false)}
          />
          <Animated.View style={{transform: [{translateX: this.state.moveAnim}]}}>
            <VrButton onClick={() => this.toggleMove}>
              <Video
                  style={styles.video}
                  source={{uri:staticAssetURL('videos/MyVideo2.mp4')}}
                  stereo={'2D'}
                  muted={true}
                  loop={true}
                  volume={0.3}
              />
            </VrButton>
          </Animated.View>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  door: {
    borderColor: 'transparent',
    borderWidth: 2,
  },
  doorHighlighted: {
    borderColor: 'rgba(233, 237, 17, 0.4)',
    borderWidth: 2,
  },
  video: {
    transform: [
      {translateX: -300 },
      {translateY: 150 },
      {translateZ: -900},
    ],
    width: 600,
    height:400,
  }
});

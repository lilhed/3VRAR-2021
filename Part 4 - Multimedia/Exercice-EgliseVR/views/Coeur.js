import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  VrButton,
  Environment,
  asset,
  staticAssetURL,
  Video
} from 'react-360';

export default class Coeur extends Component {
  state = {
    doorHighlighted: false
  };

  constructor () {
    super();
    Environment.setBackgroundImage(asset(`rooms/museum.jpg`));
  }

  setDoorHighlight (state) {
    this.setState({ doorHighlighted: state });
  }

  render() {
    return (
      <View style={{transform: [ {translate: [0, 0, -2]} ]}}>
        <View>
          <VrButton style={[{
            transform: [
              {translateX: -6 },
              {translateY: 0 },
              {translateZ: 18 },
              {rotateY: 0},
              {scaleX: 0.7},
              {scaleY: 1.5}
            ],
            width: 13
          }, this.state.doorHighlighted ? styles.doorHighlighted: styles.door]}
                    onClick={() => this.props.setRoom('nef')}
                    onEnter={() => this.setDoorHighlight(true)}
                    onExit={() => this.setDoorHighlight(false)}
          />
        </View>
        <View>
            <Video style={{
              transform: [
                {translateX: -6 },
                {translateY: 0 },
                {translateZ: -18 },
              ]
            }}
              source={{uri:staticAssetURL('peeposad.mp4')}}
              stereo={'2D'}
              muted={false}
            />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  door: {
    borderColor: 'transparent',
    borderWidth: 3,
  },
  doorHighlighted: {
    borderColor: 'rgba(233, 237, 17, 0.4)',
    borderWidth: 3,
  }
});

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  VrButton,
  Environment,
  asset
} from 'react-360';

export default class CinemaHall extends Component {
  state = {
    doorHighlighted: false
  };

  constructor () {
    super();
    Environment.setBackgroundImage(asset(`rooms/hall.jpg`));
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
              {translateX: -32 },
              {translateY: 0.5 },
              {translateZ: -4 },
              {rotateY: 40},
              {scaleX: 0.7},
              {scaleY: 1.5}
            ],
            width: 2
          }, this.state.doorHighlighted ? styles.doorHighlighted: styles.door]}
                    onClick={() => this.props.setRoom('screen')}
                    onEnter={() => this.setDoorHighlight(true)}
                    onExit={() => this.setDoorHighlight(false)}
          />
        </View>
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
  }
});

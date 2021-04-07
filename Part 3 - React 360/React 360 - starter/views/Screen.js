import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Environment,
  asset,
  VrButton
} from 'react-360';

export default class CinemaScreen extends Component {
  state = {
    doorHighlighted: false
  };

  constructor () {
    super();
    Environment.setBackgroundImage(asset(`rooms/screen.jpg`));
  }

  setHover (state) {
    this.setState({ doorHighlighted: state });
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
          ],
        }, this.state.doorHighlighted ? styles.doorHighlighted: styles.door]}
                  onClick={() => this.props.setRoom('hall')}
                  onEnter={() => this.setHover(true)}
                  onExit={() => this.setHover(false)}
        />
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

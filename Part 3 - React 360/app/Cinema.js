import React, { Component } from 'react'
import { asset, Environment, View, VrButton, StyleSheet } from 'react-360';

export default class Cinema extends Component {

  state = {
    doorHighlighted: false
  };

  constructor(props) {
    super(props);
    Environment.setBackgroundImage(asset('world2.jpeg'))
  }

  setHover (state) {
    this.setState({ doorHighlighted: state });
  }

  render() {
    return (
      <View style={{transform: [ {translate: [0, 0, -2]} ]}}>
        <VrButton style={[{
          transform: [
            {translateX: 100 },
            {translateY: -100 },
            {translateZ: 0 },
            {rotateY: 180},
            {scaleX: 50},
            {scaleY: 150}
          ],
        }, this.state.doorHighlighted ? styles.doorHighlighted: styles.door]}
          onClick={() => this.props.setRoom('home')}
          onEnter={() => this.setHover(true)}
          onExit={() => this.setHover(false)}
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  door: {
    borderColor: 'red',
    borderWidth: 2,
  },
  doorHighlighted: {
    borderColor: 'rgba(233, 237, 17, 0.4)',
    borderWidth: 2,
  }
});

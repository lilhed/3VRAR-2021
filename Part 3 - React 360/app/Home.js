import React, { Component } from 'react'
import { Environment, asset, View, VrButton, StyleSheet, Text, Video } from 'react-360';
import Entity from "react-360/Libraries/Mesh/Entity";
import staticAssetURL from "react-360/Libraries/Utilities/staticAssetURL";

export default class Home extends Component {

  state = {
    muted: true
  };

  constructor(props) {
    super(props);
    Environment.setBackgroundImage(asset('world.jpeg'))
  }

  toggleMute () {
    this.setState({ muted: !this.state.muted });
  }

  togglePlay () {
    // this.refs.pause();
  }

  render() {
    return (
      <View>
        <View style={styles.panel}>
          <View style={styles.greetingBox}>
            <VrButton onClick={() => this.props.setRoom('cinema')}>
              <Text style={styles.greeting}>Se rendre dans l'autre salle</Text>
            </VrButton>
          </View>
        </View>
        <View>
          <Entity
            source={{
              obj: asset('objects/Chair.obj'),
              mtl: asset('objects/Chair.mtl'),
            }}
            style={{
              transform: [
                {translateX: -200 },
                {translateY: -100 },
                {translateZ: 50 },
                {rotateY: -20 },
                {scale: 10}
              ]
            }}
          />
        </View>
        <VrButton style={styles.greetingBoxMute} onClick={() => this.toggleMute()}>
          <Text style={styles.greeting}>Mute / Unmute</Text>
        </VrButton>
        <VrButton style={styles.greetingBoxPlay} onClick={() => this.togglePlay()}>
          <Text style={styles.greeting}>Play / Pause</Text>
        </VrButton>
        <Video style={styles.video}
          source={{ uri: staticAssetURL('videos/test.mp4') }}
          stereo={ '3D' }
          muted={ this.state.muted }
          loop
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  panel: {
    paddingVertical: 20,
    paddingHorizontal: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.4)'
  },
  video: {
    padding: 100
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2
  },
  greetingBoxPlay: {
    padding: 20,
    backgroundColor: '#76439b'
  },
  greetingBoxMute: {
    padding: 20,
    backgroundColor: '#AABBCC'
  },
  greeting: {
    fontSize: 30
  }
});

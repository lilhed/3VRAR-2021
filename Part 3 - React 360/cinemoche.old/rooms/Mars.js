import React from 'react';
import { View, AmbientLight, Model, asset, AppRegistry } from 'react-360';

export default class Mars extends React.Component {
  render() {
    return (
      <View>
        <AmbientLight intensity={5} />
      </View>
    );
  }
}

AppRegistry.registerComponent('Mars', () => Mars);
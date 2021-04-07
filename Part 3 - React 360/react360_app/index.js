import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';
import Living from "./views/Living";
import Bathroom from "./views/Bathroom";
import Trucmoche from "./models/Trucmoche";


export default class react360_app extends React.Component {
  state = {
    room: 'living'
  };

  setRoom(room) {
    this.setState({room: room || 'living'})
  }

  render() {
    switch (this.state.room){
      case 'living':
        return <Living setRoom={(room) => this.setRoom(room)} />
      case 'bathroom':
        return <Bathroom setRoom={(room) => this.setRoom(room)} />
      default:
        return <Text>No Matching</Text>
    }
  }
};



AppRegistry.registerComponent('react360_app', () => react360_app);
AppRegistry.registerComponent('trucmoche', () => Trucmoche);

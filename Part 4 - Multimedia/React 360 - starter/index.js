import React, { Component } from 'react';
import {
  AppRegistry,
  Text
} from 'react-360';
import CinemaHall from './views/Hall';
import CinemaScreen from './views/Screen';

export default class Cinema extends Component {
  state = {
    room: 'hall'
  };

  setRoom (room) {
    this.setState({ room: room || 'hall' })
  }

  render() {
    switch (this.state.room) {
      case 'hall':
        return <CinemaHall setRoom={(room) => this.setRoom(room)} />
      case 'screen':
        return <CinemaScreen setRoom={(room) => this.setRoom(room)} />
      default:
        console.warn('No room match.');
        return <Text>No matching</Text>
    }
  }
};

AppRegistry.registerComponent('Cinema', () => Cinema);

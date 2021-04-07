import React, { Component } from 'react';
import {
  AppRegistry,
  Text
} from 'react-360';
import Coeur from './views/Coeur';
import Nef from './views/Nef';
import Corps from './views/Corps';

export default class Eglise extends Component {
  state = {
    room: 'coeur'
  };

  setRoom (room) {
    this.setState({ room: room || 'coeur' })
  }

  render() {
    switch (this.state.room) {
      case 'coeur':
        return <Coeur setRoom={(room) => this.setRoom(room)} />
        break;
      case 'nef':
        return <Nef setRoom={(room) => this.setRoom(room)} />
        break;
      case 'corps':
        return <Corps setRoom={(room) => this.setRoom(room)} />
        break;
      default:
        console.warn('No room match.');
        return <Text>No matching</Text>
    }
  }
};

AppRegistry.registerComponent('Eglise', () => Eglise);

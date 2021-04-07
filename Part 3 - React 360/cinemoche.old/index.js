import React from 'react';
import { AppRegistry, Text } from 'react-360';
import Cinemoche from './rooms/Cinemoche';
import Mars from "./rooms/Mars";

export default class World extends React.Component {
  state = {
    room: 'Cinemoche'
  }

  setRoom(room) {
    this.setState({ room: room || 'Cinemoche' });
  }

  render() {
    switch (this.state.room) {
      case 'Cinemoche':
        return <Cinemoche test={true} onClick={(room) => this.setRoom(room)}/>;
      case 'Mars':
        return <Mars/>;
      default:
        console.warn(`No room exist with name "${this.state.room}"`);
        return <Text>wsh t ou?</Text>;
    }
  }
};

AppRegistry.registerComponent('World', () => World);
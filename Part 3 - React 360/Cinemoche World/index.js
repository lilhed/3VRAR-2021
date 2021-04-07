import React from 'react';
import { AppRegistry, Text } from 'react-360';
import Cinemoche from './scenes/Cinemoche';
import Mars from './scenes/Mars';

export const Scenes = { DEFAULT_ROOM: "Mars", CINEMOCHE: "Cinemoche", MARS: "Mars" }

export default class World extends React.Component {
  state = {
    room: Scenes.DEFAULT_ROOM
  };

  setRoom (room) {
    this.setState({ room: room || Scenes.DEFAULT_ROOM })
  }

  render() {
    switch (this.state.room) {
      case Scenes.CINEMOCHE:
        return <Cinemoche setRoom={(room) => this.setRoom(room)} />
      case Scenes.MARS:
        return <Mars setRoom={(room) => this.setRoom(room)} />
      default:
        const msg = `No room found with name "${this.state.room}"`;
        console.warn(msg);
        return <Text>{msg}</Text>
    }
  }
};

AppRegistry.registerComponent('World', () => World, "");
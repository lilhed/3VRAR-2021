import React, { Component } from 'react';
import { AppRegistry, } from 'react-360';

import Home from './Home';
import Cinema from './Cinema';

export default class App extends Component {
  state = {
    room: 'home'
  }

  setRoom(room) {
    this.setState({ room: room || 'home' })
  }

  render() {
    switch(this.state.room){
      case 'cinema':
        return <Cinema setRoom={(room) => this.setRoom(room)} />
      default:
        return <Home setRoom={(room) => this.setRoom(room)} />
    }

  }
}

AppRegistry.registerComponent('App', () => App);

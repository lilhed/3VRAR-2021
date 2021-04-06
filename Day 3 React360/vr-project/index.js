import React from 'react';
import cinema from './models/cinema';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Model,
  Animated,
} from 'react-360';

export default class vr_project extends React.Component {
  render() {
    return (
      <View>

      </View>
    );
  }
};

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('vr_project', () => vr_project);
AppRegistry.registerComponent('cinemavrar', () => cinema);

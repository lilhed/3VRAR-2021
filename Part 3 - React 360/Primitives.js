import React from 'react';
import { View, Box, Cylinder,Sphere , StyleSheet } from 'react-vr';

export default class App extends React.Component {
  render() {
    return (
      <View>
          <Box
                dimwidth={2}
                dimdepth={2}
                dimheight={1}
                style={{
                    color: 'red',
                    transform: [{translate: [-3, 0, -3]}]
                    
                }}
                
          />
        
      </View>
    );
  }
};



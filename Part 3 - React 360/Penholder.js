import React from 'react';
import {
  asset,
  Model,
  View,
  StyleSheet
} from 'react-vr';


export default class Penholder extends React.Component {
  render() {
    return (
      <View>
        <Model
            source={{
                obj: asset('/penholder/Table_set_obj.obj'),
                mtl: asset('/penholder/Table_set_obj.mtl')
            }} 
            style={{
                transform: [
                  {translate: [-2.3, 0.70, -4]},
                  { scale: 0.001 },
                  { rotateX: -90 }
                ]
             }}
            
        />
        
      </View>
    );
  }
};



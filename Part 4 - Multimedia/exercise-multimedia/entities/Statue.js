import React from 'react'
import {  AppRegistry,
    StyleSheet,asset, VrButton, Text, View, Animated} from 'react-360'
import Entity from 'Entity'



export default class Plane extends React.Component{
    render(){
        return(
            <View>
            <Entity 
                source={{
                    obj: asset('Statue.obj'),
                    mtl: asset('Statue.mtl')
                }}
                
                style={{transform:[
                    {scaleX: 0.005 },
                    { scaleY: 0.005 },
                    { scaleZ: 0.005 },
                    { rotateX: 270},
                    { rotateZ: 90},

                ]}}
                />
            </View>
        )
    }
}

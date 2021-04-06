import React from 'react';
import { View, AmbientLight, Model, asset } from 'react-360';

export default class cinema extends React.Component {
    render() {
        return (
            <View>
                <AmbientLight intensity={5} />
                <Model
                    source={{
                        obj: asset('./cinemavrar.obj'),
                        mtl: asset('./cinemavrar.mtl')
                    }}
                    style={{
                        transform:[
                            { rotateX: 0 },
                            { rotateY: -90 },
                            { scaleX: 10 },
                            { scaleY: 10 },
                            { scaleZ: 10 },
                        ]
                    }}
                />
            </View>
        );
    }
}
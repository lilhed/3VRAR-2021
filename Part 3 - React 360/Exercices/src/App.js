import React from 'react';
import {
    asset,
    Pano,
    Text,
    View,
    Sound
} from 'react-vr';
import Model from './Model'

export default class App extends React.Component {
    render() {
        return (
            <View>
                <Pano source={asset('san-francisco_3d_vr_hd.jpg')}/>
                <Sound
                    loop={true}
                    volume={1.8}
                    source={{
                        wav: asset ('beach_ambiance.wav')
                    }}
                />
                <Text
                    style={{
                        backgroundColor: '#B9B6B5',
                        opacity: 0.7,
                        fontSize: 0.8,
                        fontWeight: '400',
                        layoutOrigin: [0.5, 0.5],
                        paddingLeft: 0.2,
                        paddingRight: 0.2,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        transform: [{translate: [0, 0, -3]}],
                    }}>
                    San-Francisco
                </Text>
                <Model />
            </View>
        );
    }
};

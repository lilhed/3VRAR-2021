import React, { Component } from 'react';
import {
    Environment,
    asset,
    Text,
    View,
    VrButton, StyleSheet
} from 'react-360';


export default class Bathroom extends Component{
    constructor() {
        super();
        Environment.setBackgroundImage(asset('Test_D.jpg'))
    }

    render() {
        return(
            <View>
                <VrButton style={styles.door} onClick={() => this.props.setRoom('living')}><Text>Go to living</Text></VrButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    door: {
        transform: [ { translate: [-70, 70, 1] } ],
        width: 1000,
        height: 350,
        backgroundColor: 'green',
        opacity: 0.2
    }
});
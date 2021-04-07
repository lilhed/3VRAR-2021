import React, { Component } from 'react';
import {
    Environment,
    asset,
    View,
    VrButton,
    StyleSheet,
    Text
} from 'react-360';


export default class Living extends Component{
    constructor() {
        super();
        Environment.setBackgroundImage(asset('Test_C.jpg'))
    }

    render() {
        return(
            <View>
                <VrButton style={styles.door} onClick={() => this.props.setRoom('bathroom')}>
                    <Text style={{fontSize : 30}}>Go to bathroom</Text></VrButton>
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
        opacity: 0.2,
    }
});
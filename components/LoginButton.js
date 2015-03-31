'use strict';

var React = require('react-native');
var {
    TouchableHighlight,
    Text,
    StyleSheet
} = React;

var LoginButton = React.createClass({
    render: function() {
        return (
            <TouchableHighlight underlayColor='#c19c00' style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableHighlight>
        );
    }
});

var styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        height: 40,
        backgroundColor: '#e2b807',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        alignSelf: 'center'
    }
});

module.exports = LoginButton;
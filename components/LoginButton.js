'use strict';

var React = require('react-native'),
    {
        TouchableHighlight,
        Text,
        StyleSheet,
        Component
    } = React;

class LoginButton extends Component {
    render() {
        return (
            <TouchableHighlight underlayColor='#c19c00' style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableHighlight>
        );
    }
}

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
'use strict';

var React = require('react-native'),
    WithLabel = require('./../../../components/shared/WithLabel'),
    {
        View,
        Text,
        TextInput,
        Component,
        StyleSheet
    } = React;

class PRCreateHeader extends Component {
    render() {
        return (
            <View>
                <WithLabel label='Requester Name'>
                    <TextInput style={styles.input} clearButtonMode='while-editing' />
                </WithLabel>
                <WithLabel label='Requester'>
                    <TextInput style={styles.input} clearButtonMode='while-editing' />
                </WithLabel>

                <Text>Shipping Address</Text>
                <TextInput style={styles.input} clearButtonMode='while-editing' />
            </View>
        );
    }
}

module.exports = PRCreateHeader;

var styles = StyleSheet.create({
    input: {
        color: 'black',
        height: 40,
        borderRadius: 4,
        borderWidth: 1,
        padding: 10,
        marginTop: 4,
        marginBottom: 8
    }
});
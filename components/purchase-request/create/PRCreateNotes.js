'use strict';

var React = require('react-native'),
    WithLabel = require('./../../../components/shared/WithLabel'),
    {
        Component,
        StyleSheet,
        TextInput,
        View
    } = React;

class PRCreateNotes extends Component {
    render() {
        return (
            <View>
                <WithLabel label='Notes to Approver'>
                <TextInput style={styles.input} clearButtonMode='while-editing' />
                </WithLabel>
                <WithLabel label='Notes to Supplier'>
                    <TextInput style={styles.input} clearButtonMode='while-editing' />
                </WithLabel>
            </View>
        );
    }
}

module.exports = PRCreateNotes;

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
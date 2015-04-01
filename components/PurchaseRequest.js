'use strict';

var React = require('react-native'),
    PRCreateHeader = require('./../components/purchase-request/create/PRCreateHeader'),
    PRCreateNotes = require('./../components/purchase-request/create/PRCreateNotes'),
    {
        ScrollView,
        Text,
        TextInput,
        StyleSheet,
        Component,
        NavigatorIOS
    } = React;

class PurchaseRequest extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <PRCreateHeader/>
                <PRCreateNotes/>
            </ScrollView>
        );
    }
}

module.exports = PurchaseRequest;

var styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20
    }
});
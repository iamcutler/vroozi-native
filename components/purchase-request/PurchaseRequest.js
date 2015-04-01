'use strict';

var React = require('react-native'),
    PRCreateHeader = require('./create/PRCreateHeader'),
    PRCreateNotes = require('./create/PRCreateNotes'),
    PRItemOverview = require('./PRItemOverview'),
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
                <PRItemOverview/>
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
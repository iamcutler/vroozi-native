'use strict';

var React = require('react-native'),
    PRItemList = require('./PRItemList'),
    {
        Component,
        View,
        Text,
        StyleSheet
    } = React;

class PRItemOverview extends Component {
    render() {
        return (
            <View style={styles.overview}>
                <Text>Line Item Overview</Text>
                
                <PRItemList/>

                <Text style={styles.totalAmount}>
                    Total Amount: $0.00
                </Text>
            </View>
        );
    }
}

module.exports = PRItemOverview;

var styles = StyleSheet.create({
    overview: {
        backgroundColor: 'grey',
        borderRadius: 4,
        padding: 10,
        marginTop: 20,
        marginBottom: 20
    },
    totalAmount: {
        textAlign: 'right'
    }
});
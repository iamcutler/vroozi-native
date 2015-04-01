'use strict';

var React = require('react-native'),
    {
        Component,
        View,
        Text
    } = React;

class WithLabel extends Component {
    render() {
        return (
          <View>
            <View>
              <Text>{this.props.label}</Text>
            </View>
            {this.props.children}
          </View>
        );
    }
}

module.exports = WithLabel;
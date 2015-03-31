'use strict';
var React = require('react-native'),
	Login = require('./../components/Login'),
	{
	  Text,
	  View,
	  StyleSheet
	} = React;

var HelloWorld = React.createClass({
  render: function() {
    return (
      <View>
        <Login/>
      </View>
    );
  }
});

module.exports = HelloWorld;
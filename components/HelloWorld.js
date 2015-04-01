'use strict';
var React = require('react-native'),
  Login = require('./../components/Login'),
  PurchaseRequest = require('./../components/PurchaseRequest'),
  {
    Text,
    View,
    NavigatorIOS,
    StyleSheet
  } = React;

var HelloWorld = React.createClass({
  render: function() {
    return (
      <PurchaseRequest/>
    );
  }
});

module.exports = HelloWorld;
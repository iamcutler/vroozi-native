//<Image source={{uri: 'http://vroozi.com/wp-content/uploads/2014/12/vroozi-logo-500-footer.png'}} style={styles.logo} />
//<Image source={require('image!vroozi-logo-white')} style={styles.logo} />
'use strict';

var React = require('react-native'),
	LoginButton = require('./../components/LoginButton'),
	{
		Image,
		View,
		Text,
		TextInput,
		StyleSheet
	} = React;

var Login = React.createClass({
	render: function() {
		return (
			<View style={styles.container}>
				<View style={styles.loginContainer}>
					<Image source={{uri: 'http://acmd-launch-pad.com/vroozi/vroozi-logo-white.png'}} style={styles.logo} />
					<TextInput style={styles.input} placeholder='Username' ref='login-username' autoFocus='true' clearButtonMode='while-editing' />
					<TextInput style={styles.input} placeholder='Password' ref='login-password' clearButtonMode='while-editing' />
					<LoginButton/>
				</View>
			</View>
		);
	}
});

var styles = StyleSheet.create({
	container: {
		backgroundColor: '#fdcc07',
		flex: 1,
		padding: 40,
		flexDirection: 'column'
	},
	loginContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		resizeMode: 'contain',
		height: 600
	},
	input: {
		height: 40,
		padding: 10,
		color: 'black',
		backgroundColor: '#FFFFFF',
		borderRadius: 4,
		marginBottom: 20
	},
	logo: {
		width: 210,
		height: 40,
		marginBottom: 14
	}
});

module.exports = Login;
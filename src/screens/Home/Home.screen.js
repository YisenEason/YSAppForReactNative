import { useNavigation } from '@react-navigation/native';
import React, { useReducer } from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useStore } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../stores/actions/user.action';
import styles from './Home.style';

const Home = () => {

	console.log('render Home');
	const dispatch = useDispatch();
	const loginTs = useSelector(state=>{
		return state.userReducer.loginTs;
	});

	const nav = useNavigation();

	function login() {
		console.log('登入');
		// dispatch(loginAction());
		nav.navigate('Info');
	}

	function loading() {
		nav.navigate('LoadingView');
	}

	return (
		<SafeAreaView>
			<View style={{}}>
				<Text>Home页面</Text>
				<Text>登陆时间：{loginTs}</Text>
				<Button title='登入' onPress={login}></Button>
				<Button title='loading' onPress={loading}></Button>
			</View>
		</SafeAreaView>
	);
}

export default Home;
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import CustomHeader from '../../components/Header';
import { push } from '../../navigation/RootNavigation';
import styles from './Home.style';
import { showConfirmModal, showLoading } from '../../utils/ModalUtil';
import LangUtil from '../../utils/LangUtil';

const Home = () => {

  const nav = useNavigation();
  useLayoutEffect(()=>{
    nav.setOptions({
      header: ()=>(<CustomHeader backgroundColor={'white'} title='Home'></CustomHeader>)
    })
  }, []);

	function login() {
		console.log('登入');
    push('Info');
	}

	return (
		<SafeAreaView>
			<View style={{}}>
				<Text>Home页面</Text>
				<Text>登陆时间：{''}</Text>
        <Text>{LangUtil.t('hello world!!!')}</Text>
				<Button title='登入' onPress={login}></Button>
			</View>
		</SafeAreaView>
	);
}

export default Home;
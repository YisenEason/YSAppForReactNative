import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect } from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import CustomHeader from '../../components/Header';
import { hideLoading, showLoading } from '../../utils/ModalUtil';
import NetworkUtil from '../../utils/NetworkUtil';

const Info = () => {

  const nav = useNavigation();
  useLayoutEffect(()=>{
    nav.setOptions({
      header: ()=>(<CustomHeader backgroundColor={'white'} title='Info22'></CustomHeader>)
    })
  }, []);

	return (
		<SafeAreaView>
			<Text>Info</Text>
      <Button title='loading' onPress={()=>{
        showLoading();

        // NetworkUtil.get('/mock').then(()=>{
        //   console.log('success');
        //   hideLoading();
        // }).catch(()=>{
        //   console.log('fail');
        //   hideLoading();
        // })
      }}></Button>
		</SafeAreaView>
	);
}

export default Info;
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect } from 'react';
import { Button, Dimensions, Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import CustomHeader from '../../components/Header';
import { hideLoading, showLoading } from '../../utils/ModalUtil';
import NetworkUtil from '../../utils/NetworkUtil';
 
const Info = () => {

  const nav = useNavigation();
  useLayoutEffect(()=>{
    nav.setOptions({
      header: ()=>(<CustomHeader backgroundColor={'white'} title='Info'></CustomHeader>)
    })
  }, []);

	return (
    <>
      <ScrollView style={{ flex: 1}}>
      </ScrollView>
    </>
	);
}

export default Info;
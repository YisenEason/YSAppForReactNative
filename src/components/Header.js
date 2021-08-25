import React, { useEffect, useLayoutEffect } from "react";
import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { Header, useHeaderHeight } from '@react-navigation/elements';
import { getStatusBarHeight } from "react-native-iphone-x-helper";

const CustomHeader = ({children, title, backgroundColor, backHandle}) => {
  
  const headerH = useHeaderHeight();

  useLayoutEffect(()=>{
    StatusBar.setBarStyle('dark-content');
    if (Platform.OS === "android") {
      StatusBar.setTranslucent(true);
      backgroundColor && StatusBar.setBackgroundColor('#fff')
    }
    
  }, [])

  if (children) {
    return (
      <View style={{backgroundColor: backgroundColor, paddingTop: getStatusBarHeight(true)}}>
        {children}
      </View>
    );
  }

  let backView = null;
  if (backHandle) {
    backView = (
      <TouchableOpacity onPress={backHandle}>
        <View style={{height: '100%', paddingHorizontal: 10, justifyContent: 'center'}} >
          <Text>back</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <>
    <Header 
      title={title || 'undefine'} 
      headerStyle={{height: headerH, backgroundColor: backgroundColor}} 
      headerStatusBarHeight={getStatusBarHeight(true)} 
      headerTitleAlign='center'
      headerLeft={()=>backView} />
    </>
  );
};

const styles = StyleSheet.create({
});

export default CustomHeader;
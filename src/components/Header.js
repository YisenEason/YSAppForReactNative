import React, { useEffect } from "react";
import { StatusBar, StyleSheet, Text, View, ViewStyle } from "react-native";
import { Header, useHeaderHeight } from '@react-navigation/elements';
import { getStatusBarHeight } from "react-native-iphone-x-helper";

const CustomHeader = ({children, title, backgroundColor}) => {

  const headerH = useHeaderHeight();

  useEffect(()=>{
    // console.log('自定义状态栏');
    StatusBar.setBarStyle('dark-content');
  }, []);

  if (children) {
    return (
      <View style={{backgroundColor: backgroundColor, paddingTop: getStatusBarHeight(true)}}>
        {children}
      </View>
    );
  }
  return (
    <Header title={title || 'undefine'} headerStyle={{height: headerH, backgroundColor: backgroundColor}} headerStatusBarHeight={getStatusBarHeight(true)} />
  );
};

const styles = StyleSheet.create({
});

export default CustomHeader;
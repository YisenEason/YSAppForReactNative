import React, { useEffect } from 'react';
import { View, Text } from "react-native";

const Splash = () => {

  // const nav = use
  useEffect(()=>{
    console.log('初始化完成');
    setTimeout(() => {
      
    }, 1000);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>启动页面加载，用于初始化部分数据和配置</Text>
    </View>
  );
}

export default Splash;
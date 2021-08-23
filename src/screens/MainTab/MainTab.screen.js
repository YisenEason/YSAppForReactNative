import React, { useEffect } from 'react';
import { View, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const MainTab = () => {

  useEffect(()=>{
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen component={HomeScreen} name='HomeScreen'></Tab.Screen>
      <Tab.Screen component={SettingsScreen} name='SettingsScreen'></Tab.Screen>
    </Tab.Navigator>
  );
}

export default MainTab;
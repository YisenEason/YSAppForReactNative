import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home.screen';
import Info from '../screens/Info/Info.screen';
import LoadingView from '../components/LoadingView';
import Splash from '../screens/Splash/Splash.screen';
import { navigationRef } from './RootNavigation';
import MainTab from '../screens/MainTab/MainTab.screen';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Group screenOptions={{}}>
          <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
          <Stack.Screen name="Home" component={Home} options={{}} />
          <Stack.Screen name="Info" component={Info} options={{}} />
          <Stack.Screen name="MainTab" component={MainTab} options={{headerShown: false}} />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'transparentModal', headerShown: false, animation:'fade'}}>
          <Stack.Screen name="LoadingView" component={LoadingView}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation;
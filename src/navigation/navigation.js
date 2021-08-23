import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home.screen';
import Info from '../screens/Info/Info.screen';
import LoadingView from '../components/LoadingView';

const Stack = createNativeStackNavigator();

export let navigationRef;

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator ref={(ref)=>{navigationRef = ref}} initialRouteName='Home'>
        <Stack.Group >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Info" component={Info} />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'transparentModal', headerShown: false, animation:'fade'}}>
          <Stack.Screen name="LoadingView" component={LoadingView}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation;
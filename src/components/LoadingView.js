import React from 'react';
import { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Button } from 'react-native';
import { navigationRef } from '../navigation/navigation';

const LoadingView = (props) => {
  console.log(props);

  useEffect(()=>{
    console.log(navigationRef);
    setTimeout(() => {
      // navigationRef.pop();
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={{padding: 30, backgroundColor: 'white', borderRadius: 10, elevation: 0.3}}>
        <ActivityIndicator size='large' color='black'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
})

export default LoadingView;
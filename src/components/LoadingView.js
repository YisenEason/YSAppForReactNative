import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { push } from '../navigation/RootNavigation';

const LoadingView = (props) => {

  useEffect(()=>{
    setTimeout(() => {
      push('Home');
    }, 1000);
  }, [])

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
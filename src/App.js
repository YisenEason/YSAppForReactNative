import React from 'react';
import { Button, SafeAreaView, View } from 'react-native';
import { Provider } from 'react-redux';
import Home from './screens/Home/Home.screen';
import Splash from './screens/Splash/Splash.screen';
import { store, persistore } from './stores'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Splash />
      </Provider>
    </>
  );
};

export default App;
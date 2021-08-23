import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import MainNavigation from './navigation/navigation';
import { store } from './stores'
import LangUtil from './utils/LangUtil';
import StatusBar from './utils/StatusBarUtil'
import WebSocketClient from './utils/WebSocketUtil';

LangUtil.setup();

const App = () => {

  useEffect(()=>{
  }, []);

  return (
    <>
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    </>
  );
};

export default App;
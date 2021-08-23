
class BackHandler {

  static getInstace() {
    if (!this.instace) {
      this.instace = new BackHandle();
    }
    return this.instace;
  }
  
  static setup = () => {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', BackHandler.getInstace().onBackAndroid);
    }
  }

  static remove = () => {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', ()=>{});
    }
  }

  onBackAndroid() {
    console.log('监听到点击返回键');
    // 处理，需要哪些页面进行哪些逻辑处理可在这里进行
    // 允许执行系统返回逻辑，return false;
    // 禁止系统返回逻辑，return true;
    return false;
  }

}

export default BackHandler;
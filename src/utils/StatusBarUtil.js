import { Platform, NativeModules } from "react-native";
const { StatusBarManager } = NativeModules


class StatusBar {
  
  statusHeight;

  constructor() {
    console.log('状态栏高度初始化');
    if (Platform.OS === 'android') {
      this.statusHeight = StatusBar.currentHeight;
    }else {
      StatusBarManager.getHeight(response =>
        this.statusHeight = response.height
      )
    }
  }

  init() {
  }

}

const statusBar = new StatusBar();

export default statusBar;
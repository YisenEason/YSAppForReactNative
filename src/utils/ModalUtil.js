import { Alert } from "react-native";
import { navigate, navigationRef, pop } from "../navigation/RootNavigation";

export function showLoading() {
  navigate('LoadingView');
}

export function hideLoading() {
  const route = navigationRef.getState().routes[navigationRef.getState().index];
  if (route.name === 'LoadingView') {
    pop();
  }
}

export function showConfirmModal(title, msg, comfirmHandle) {
  Alert.alert(title, msg, [{
    text: '取消',
    onPress:()=>{
      console.log('取消');
      
    }},{
    text: '确认',
    onPress:()=>{
      console.log('确认');
      comfirmHandle();
    }
  }])
}

export const USER_ACTION_LOGIN_START = "USER_ACTION_LOGIN_START";
export const USER_ACTION_LOGIN_SUCCESS = "USER_ACTION_LOGIN_SUCCESS";
export const USER_ACTION_LOGIN_FAIL = "USER_ACTION_LOGIN_FAIL";

export const loginWithStart = () => {
  return {
    type: USER_ACTION_LOGIN_START,
    isLoggingIn: true
  }
}

export const loginWithSuccess = (loginTs) => {
  return {
    type: USER_ACTION_LOGIN_SUCCESS,
    payload: loginTs,
    isLoggingIn: false
  }
}

export const loginWithFail = () => {
  return {
    type: USER_ACTION_LOGIN_START,
    isLoggingIn: false
  }
}

export const loginAction = () => async dispatch => {
  dispatch(loginWithStart);
  setTimeout(() => {
    dispatch(loginWithSuccess(new Date().getTime()));
    // dispatch(loginWithFail());
  }, 300);
}
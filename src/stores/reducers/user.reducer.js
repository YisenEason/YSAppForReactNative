import { USER_ACTION_LOGIN_FAIL, USER_ACTION_LOGIN_START, USER_ACTION_LOGIN_SUCCESS } from "../actions/user.action"

const initialState = {
  loginTs: [],
  isLoggingIn: false
}

const userReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case USER_ACTION_LOGIN_START:
      return {
        ...state,
        isLoggingIn: true
      }

    case USER_ACTION_LOGIN_SUCCESS:
      return {
        ...state,
        loginTs: payload,
        isLoggingIn: false
      }
    case USER_ACTION_LOGIN_FAIL:
      return {
        ...state,
        isLoggingIn: false
      }

    default:
      return state
  }
}

export default userReducer

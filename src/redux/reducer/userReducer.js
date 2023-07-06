// Handle User Sign-In
export const userReducerSignIn = (state = {}, action) => {
  switch (action.type) {
    case "USER_SIGNIN_REQUEST":
      return { loading: true, userInfo: null, isAuthenticated: false }

    case "USER_SIGNIN_FAIL":
      return {
        loading: false,
        userInfo: null,
        isAuthenticated: false,
        error: action.payload
      }

    case "USER_SIGNIN_RESET":
      return {}

    case "USER_SIGNIN_SUCCESS":
      return {
        loading: true,
        userInfo: action.payload,
        isAuthenticated: true
      }

    default:
      return state;
  }
};

export const userReducerSignUp = (state = {}, action) => {
  switch (action.type) {
    case "USER_SIGNUP_REQUEST":
      return { loading: true, userInfo: null, isAuthenticated: false }

    case "USER_SIGNUP_FAIL":
      return {
        loading: false,
        userInfo: null,
        isAuthenticated: false,
        error: action.payload
      }

    case "USER_SIGNUP_RESET":
      return {}

    case "USER_SIGNUP_SUCCESS":
      return {
        loading: false,
        userInfo: action.payload,
        isAuthenticated: false
      }

    default:
      return state;
  }
};

// Handle User Profile
export const userReducerProfile = (state = { user: null }, action) => {
  switch (action.type) {
    case "USER_LOAD_REQUREST":
      return { loading: true, user: null, error: null }

    case "USER_LOAD_FAIL":
      return { loading: false, user: null, error: action.payload }

    case "USER_LOAD_RESET":
      return {}

    case "USER_LOAD_SUCCESS":
      return { loading: false, user: action.payload.user, error: null }

    default:
      return state;
  }
};

//log out reducer
export const userReducerLogout = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGOUT_REQUEST":
      return { loading: true, user: null, error: null }

    case "USER_LOGOUT_FAIL":
      return { loading: false, user: null, error: action.payload }

    case "USER_LOGOUT_RESET":
      return {}

    case "USER_LOGOUT_SUCCESS":
      return { loading: false, user: action.payload, error: null }

    default:
      return state;
  }
};

//Apply Job reducer
export const userReducerApplyJob = (state = {}, action) => {
  switch (action.type) {
    case "USER_APPLY_REQUEST":
      return { loading: true, userJob: null, error: null }

    case "USER_APPLY_FAIL":
      return { loading: false, userJob: null, error: action.payload }

    case "USER_APPLY_RESET":
      return {}

    case "USER_APPLY_SUCCESS":
      return { loading: false, userJob: action.payload, error: null }

    default:
      return state;
  }
};

//Get All User reducer
export const getAllUserReducer = (state = {users:[]}, action) => {
  switch (action.type) {
    case "GET_ALLUSERS_REQUEST":
      return { loading: true, users: [], error: null }

    case "GET_ALLUSERS_FAIL":
      return { loading: false, users: [], error: action.payload }

    case "GET_ALLUSERS_RESET":
      return {}

    case "GET_ALLUSERS_SUCCESS":
      return { loading: false, users: action.payload, error: null }

    default:
      return state;
  }
};
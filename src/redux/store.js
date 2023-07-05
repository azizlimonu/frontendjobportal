import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import {
  getAllUserReducer,
  userReducerApplyJob,
  userReducerLogout,
  userReducerProfile,
  userReducerSignIn
} from "./reducer/userReducer";
import {
  createJobReducer,
  deleteJobReducer,
  loadJobReducer,
  loadSingleJobReducer
} from "./reducer/jobReducer";
import {
  createJobTypeReducer,
  deleteJobTypeReducer,
  loadJobTypeReducer,
  updateJobTypeReducer
} from "./reducer/jobtypeReducer";

const reducer = combineReducers({
  // user reducer
  signIn: userReducerSignIn,
  logOut: userReducerLogout,
  userProfile: userReducerProfile,
  userJobApplication: userReducerApplyJob,
  getAllUsers: getAllUserReducer,
  // job reducer
  getAllJobs: loadJobReducer,
  getSingleJob: loadSingleJobReducer,
  createSingleJob: createJobReducer,
  deleteSingleJob: deleteJobReducer,
  // job type reducer
  getAllJobType: loadJobTypeReducer,
  createJobType: createJobTypeReducer,
  updateJobType: updateJobTypeReducer,
  deleteJobType: deleteJobTypeReducer,
});

let initialState = {
  signIn: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null
  },
  // mode:"lightmode"
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
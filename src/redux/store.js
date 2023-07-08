import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import {
  getAllUserReducer,
  userReducerApplyJob,
  userReducerLogout,
  userReducerProfile,
  userReducerSignIn,
  userReducerSignUp
} from "./reducer/userReducer";
import {
  createJobReducer,
  deleteJobReducer,
  findApplicantReducer,
  loadJobReducer,
  loadSingleJobReducer,
  updateApplicantReducer,
  updateJobReducer
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
  signUp: userReducerSignUp,
  logOut: userReducerLogout,
  userProfile: userReducerProfile,
  userJobApplication: userReducerApplyJob,
  getAllUsers: getAllUserReducer,
  // job reducer
  getAllJobs: loadJobReducer,
  getSingleJob: loadSingleJobReducer,
  createSingleJob: createJobReducer,
  deleteSingleJob: deleteJobReducer,
  updateJob: updateJobReducer,
  // job type reducer
  getAllJobType: loadJobTypeReducer,
  createJobType: createJobTypeReducer,
  updateJobType: updateJobTypeReducer,
  deleteJobType: deleteJobTypeReducer,
  // applicant reducer
  findApplicant: findApplicantReducer,
  updateApplicant: updateApplicantReducer,
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
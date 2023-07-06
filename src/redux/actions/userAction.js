import axios from "axios";
import { toast } from 'react-toastify';

// SignIn Action
export const userSignInAction = (user) => async (dispatch) => {
  dispatch({ type: "USER_SIGNIN_REQUEST" });
  try {
    const { data } = await axios.post("/api/auth/signin", user);
    localStorage.setItem("userInfo", JSON.stringify(data));
    dispatch({
      type: "USER_SIGNIN_SUCCESS",
      payload: data
    });
    toast.success("Login Successfully");
  } catch (error) {
    dispatch({
      type: "USER_SIGNIN_FAIL",
      payload: error.response.data.error
    });
    toast.error("Something Wrong With The Server");
  }
};

// SignUn Action
export const userSignUpAction = (user) => async (dispatch) => {
  dispatch({ type: "USER_SIGNUP_REQUEST" });
  try {
    const { data } = await axios.post("/api/auth/signup", user);
    dispatch({
      type: "USER_SIGNUP_SUCCESS",
      payload: data
    });
    toast.success("SignUp Successfully");
  } catch (error) {
    dispatch({
      type: "USER_SIGNUP_FAIL",
      payload: error.response.data.error
    });
    toast.error("Something Wrong With The Server");
  }
};

// Logout Action
export const userLogoutAction = () => async (dispatch) => {
  dispatch({ type: "USER_LOGOUT_REQUEST" });
  try {
    const { data } = await axios.get("/api/auth/logout");
    localStorage.removeItem("userInfo");
    dispatch({
      type: "USER_LOGOUT_SUCCESS",
      payload: data
    });
    toast.success("Logout Success");
  } catch (error) {
    dispatch({
      type: "USER_LOGOUT_FAIL",
      payload: error.response.data.error
    });
    toast.error("Logout Error, Something wrong");
  }
};

// Profile Action
export const userProfileAction = () => async (dispatch) => {
  dispatch({ type: "USER_LOAD_REQUREST" });
  try {
    const { data } = await axios.get("/api/auth/profile");
    dispatch({
      type: "USER_LOAD_SUCCESS",
      payload: data
    });
    toast.success("Profile Loaded");
  } catch (error) {
    console.log(error);
    dispatch({
      type: "USER_LOAD_FAIL",
      payload: error.response.data.error
    });
    toast.error("Error While Load Profile");
  }
};

// GetAll Action
export const userGetAllAction = () => async (dispatch) => {
  dispatch({ type: "GET_ALLUSERS_REQUEST" });
  try {
    const { data } = await axios.get("/api/user/allusers");
    dispatch({
      type: "GET_ALLUSERS_SUCCESS",
      payload: data
    });
    toast.success("All Users Loaded");
  } catch (error) {
    console.log(error);
    dispatch({
      type: "GET_ALLUSERS_FAIL",
      payload: error.response.data.error
    });
    toast.error("Error While Load AllUsers");
  }
};

// ApplyJob Action
export const userApplyJobAction = (job) => async (dispatch) => {
  dispatch({ type: "USER_APPLY_REQUEST" });
  try {
    const { data } = await axios.post("/api/user/jobhistory",job);
    dispatch({
      type: "USER_APPLY_SUCCESS",
      payload: data
    });
    toast.success("Job Successfully Applied");
  } catch (error) {
    console.log(error);
    dispatch({
      type: "USER_APPLY_FAIL",
      payload: error.response.data.error
    });
    toast.error("Server Error");
  }
};
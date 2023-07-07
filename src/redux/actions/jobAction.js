import axios from "axios";
import { toast } from "react-toastify";

// get all the job with pagination
export const jobLoadAction = (
  pageNumber,
  keyword = "",
  cat = "",
  location = ""
) => async (dispatch) => {
  dispatch({ type: "JOB_LOAD_REQUEST" });
  try {
    const { data } = await axios.get(`/api/job/show/?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&location=${location}`)
    dispatch({
      type: "JOB_LOAD_SUCCESS",
      payload: data
    });
  } catch (error) {
    dispatch({
      type: "JOB_LOAD_FAIL",
      payload: error.response.data.error
    });
    console.log(error);
  }
};

// get singleJob Description
export const jobLoadSingleAction = (id) => async (dispatch) => {
  dispatch({ type: "JOB_LOAD_SINGLE_REQUEST" });
  try {
    // JOB_LOAD_SINGLE_SUCCESS
    // JOB_LOAD_SINGLE_FAIL
    const { data } = await axios.get(`/api/job/${id}`);
    dispatch({
      type: "JOB_LOAD_SINGLE_SUCCESS",
      payload: data
    });
  } catch (error) {
    dispatch({
      type: "JOB_LOAD_SINGLE_FAIL",
      payload: error.response.data.error
    });
    console.log(error);
  }
};

// create job

// update job

// delete job
export const deleteJobAction = (id) => async (dispatch) => {
  dispatch({ type: "DELETE_JOB_REQUEST" });
  try {
    await axios.delete(`/api/job/${id}`);
    dispatch({
      type: "DELETE_JOB_SUCCESS",
      payload: id
    });
    toast.success("Job deleted successfully");
  } catch (error) {
    dispatch({
      type: "DELETE_JOB_FAIL",
      payload: error.response.data.error
    });
    toast.error("Failed to delete job");
  }
};

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
export const createJobAction = (job) => async (dispatch) => {
  dispatch({ type: "CREATE_JOB_REQUEST" })

  try {
    const { data } = await axios.post("/api/job/create", job)
    dispatch({
      type: "CREATE_JOB_SUCCESS",
      payload: data
    })
    toast.success("Job created successfully");


  } catch (error) {
    dispatch({
      type: "CREATE_JOB_FAIL",
      payload: error.response.data.error
    })
    toast.error(error.response.data.error);

  }
}

// update job
export const updateJobAction = (job_id, jobData) => async (dispatch) => {
  dispatch({ type: "UPDATE_JOB_REQUEST" });
  try {
    const { data } = await axios.put(`/api/job/update/${job_id}`, jobData);
    dispatch({
      type: "UPDATE_JOB_SUCCESS",
      payload: data.job
    });
    toast.success("Job deleted successfully");
  } catch (error) {
    dispatch({
      type: "UPDATE_JOB_FAIL",
      payload: error.response.data.error
    });
    toast.error("Failed to update job");
  }
};

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

// Find Applicant
export const findApplicantAction = (job_id) => async (dispatch) => {
  dispatch({ type: "FIND_APPLICANT_REQUEST" });
  try {
    const { data } = await axios.get(`/api/job/applicant/${job_id}`);
    dispatch({
      type: "FIND_APPLICANT_SUCCESS",
      payload: data.applicants
    });
    // toast.success("Job deleted successfully");
  } catch (error) {
    dispatch({
      type: "FIND_APPLICANT_FAIL",
      payload: error.response.data.error
    });
    toast.error("Failed to fetch applicant");
  }
};

// update status applicant
export const updateApplicantAction = (applicant_data) => async (dispatch) => {
  dispatch({ type: "UPDATE_APPLICANT_REQUEST" });
  try {
    const { data } = await axios.put(`/api/job/applicant/status`, applicant_data);
    dispatch({
      type: "UPDATE_APPLICANT_SUCCESS",
      payload: data
    });
    toast.success("Update Applicant successfully");
  } catch (error) {
    dispatch({
      type: "UPDATE_APPLICANT_FAIL",
      payload: error.response.data.error
    });
    toast.error("Failed to update applicant");
  }
};

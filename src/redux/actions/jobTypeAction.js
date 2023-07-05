import axios from "axios";
export const loadJobTypeAction = () => async (dispatch) => {
  dispatch({ type: "JOB_TYPE_LOAD_REQUEST" });
  try {
    const { data } = await axios.get("/api/jobtype/alljobtype");
    dispatch({
      type: "JOB_TYPE_LOAD_SUCCESS",
      payload: data
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "JOB_TYPE_LOAD_FAIL",
      payload: error.response.data.error
    });
  }
};

export const createJobTypeAction = (jobtype) => async (dispatch) => {
  dispatch({ type: "CREATE_JOB_TYPE_REQUEST" });
  try {
    const { data } = await axios.post("/api/jobtype/create", jobtype);
    dispatch({
      type: "CREATE_JOB_TYPE_SUCCESS",
      payload: data
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "CREATE_JOB_TYPE_FAIL",
      payload: error.response.data.error
    });
  }
};

export const updateJobTypeAction = (type_id) => async (dispatch) => {
  dispatch({ type: "UPDATE_JOB_TYPE_REQUEST" });
  try {
    const { data } = await axios.put(`/api/jobtype/update/${type_id}`);
    dispatch({
      type: "UPDATE_JOB_TYPE_SUCCESS",
      payload: data
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "UPDATE_JOB_TYPE_FAIL",
      payload: error.response.data.error
    });
  }
};

export const deleteJobTypeAction = (type_id) => async (dispatch) => {
  dispatch({ type: "DELETE_JOB_TYPE_REQUEST" });
  try {
    const { data } = await axios.delete(`/api/jobtype/delete/${type_id}`);
    dispatch({
      type: "DELETE_JOB_TYPE_SUCCESS",
      payload: data
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "DELETE_JOB_TYPE_FAIL",
      payload: error.response.data.error
    });
  }
};

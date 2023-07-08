export const loadJobReducer = (state = { jobs: [] }, action) => {
  switch (action.type) {
    case 'JOB_LOAD_REQUEST':
      return {
        loading: true,
        error: null,
        success: "",
        page: 0,
        pages: 0,
        count: 0,
        setUniqueLocation: [],
        jobs: []
      }

    case "JOB_LOAD_FAIL":
      return {
        loading: false,
        error: action.payload
      }

    case "JOB_LOAD_RESET":
      return {}

    case "JOB_LOAD_SUCCESS":
      return {
        loading: false,
        success: action.payload.success,
        page: action.payload.page,
        pages: action.payload.pages,
        count: action.payload.count,
        setUniqueLocation: action.payload.setUniqueLocation,
        jobs: action.payload.jobs
      }

    default:
      return state;
  }
};

export const loadSingleJobReducer = (state = { job: {} }, action) => {
  switch (action.type) {
    case "JOB_LOAD_SINGLE_REQUEST":
      return { loading: true, error: null }

    case "JOB_LOAD_SINGLE_SUCCESS":
      return {
        loading: false,
        success: action.payload.success,
        singleJob: action.payload.job,
      }

    case "JOB_LOAD_SINGLE_FAIL":
      return { loading: false, error: action.payload }

    case "JOB_LOAD_SINGLE_RESET":
      return {}

    default:
      return state;
  }
};

export const createJobReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_JOB_REQUEST":
      return { loading: true, error: null }

    case "CREATE_JOB_SUCCESS":
      return {
        loading: false,
        success: action.payload.success,
        payload: action.payload,
      }

    case "CREATE_JOB_FAIL":
      return { loading: false, error: action.payload }

    case "CREATE_JOB_RESET":
      return {}

    default:
      return state;
  }
};

export const deleteJobReducer = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_JOB_REQUEST":
      return { loading: true, error: null }

    case "DELETE_JOB_SUCCESS":
      return {
        loading: false,
        payload: action.payload,
      }

    case "DELETE_JOB_FAIL":
      return { loading: false, error: action.payload }

    case "DELETE_JOB_RESET":
      return {}

    default:
      return state;
  }
};

export const updateJobReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_JOB_REQUEST":
      return { loading: true, error: null }

    case "UPDATE_JOB_SUCCESS":
      return {
        loading: false,
        error: null,
        payload: action.payload,
      }

    case "UPDATE_JOB_FAIL":
      return { loading: false, error: action.payload }

    case "UPDATE_JOB_RESET":
      return {}

    default:
      return state;
  }
};

export const findApplicantReducer = (state = {}, action) => {
  switch (action.type) {
    case "FIND_APPLICANT_REQUEST":
      return { loading: true, error: null }

    case "FIND_APPLICANT_SUCCESS":
      return {
        loading: false,
        error: null,
        applicants: action.payload,
      }

    case "FIND_APPLICANT_FAIL":
      return { loading: false, error: action.payload }

    case "FIND_APPLICANT_RESET":
      return {}

    default:
      return state;
  }
};

export const updateApplicantReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_APPLICANT_REQUEST":
      return { loading: true, error: null }

    case "UPDATE_APPLICANT_SUCCESS":
      return {
        loading: false,
        error: null,
        payload: action.payload,
      }

    case "UPDATE_APPLICANT_FAIL":
      return { loading: false, error: action.payload }

    case "UPDATE_APPLICANT_RESET":
      return {}

    default:
      return state;
  }
};
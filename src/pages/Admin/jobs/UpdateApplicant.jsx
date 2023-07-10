import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findApplicantAction, jobLoadSingleAction, updateApplicantAction } from '../../../redux/actions/jobAction';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import LoadingBox from '../../../component/LoadinBox';
import CardElement from '../../../component/CardElement';
import { Box, Button, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const UpdateApplicant = () => {
  const dispatch = useDispatch();
  const { jobId } = useParams();

  useEffect(() => {
    // fetch All Applicant for the Job
    dispatch(findApplicantAction(jobId));
    // fetch the job details
    dispatch(jobLoadSingleAction(jobId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { applicants, loading: loadingApplicant } = useSelector(state => state.findApplicant);
  console.log("STATE", applicants);
  const { singleJob, loading: loadingJob } = useSelector(state => state.getSingleJob);
  // console.log("SingleJob", singleJob);

  const updateApplicantStatus = (userId, applicantId, applicationStatus) => {
    const applicant_data = { userId, applicationId: applicantId, applicationStatus };
    dispatch(updateApplicantAction(applicant_data))
      .then(() => {
        // fetch All Applicant for the Job
        dispatch(findApplicantAction(jobId));
        // fetch the job details
        dispatch(jobLoadSingleAction(jobId));
      })
      .catch((error) => {
        console.log(error);
        toast.error("Server Error");
      });
  };
  const userData = applicants !== undefined && applicants.length > 0 ? applicants.map((user, index) => {
    const { _id, firstName, lastName, email, jobsHistory } = user;
    const fullName = `${firstName} ${lastName}`;

    const jobHistory = jobsHistory.find(history => history.job === jobId);
    const applicantId = jobHistory ? jobHistory._id : null;
    const applicationStatus = jobHistory ? jobHistory.applicationStatus : null;

    return {
      key: index + 1,
      name: fullName,
      userId: _id,
      email,
      applicantId,
      applicationStatus
    };
  }) : [];

  console.log("USER DATA", userData);

  let data = [];
  data = (applicants !== undefined && applicants.length > 0) ? userData : [];
  console.log("DATA", data);

  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      width: 200,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
    },
    {
      field: 'applicantId',
      headerName: 'ApplicantId',
      width: 200,
    },
    {
      field: 'applicationStatus',
      headerName: 'Status',
      width: 150, 
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 300,
      renderCell: (params) => (
        <div>
          <Button
            variant="contained"
            onClick={() => updateApplicantStatus(params.row.userId, params.row.applicantId, 'rejected')}
            style={{ marginRight: 8 }}
          >
            Reject
          </Button>
          <Button
            variant="contained"
            onClick={() => updateApplicantStatus(params.row.userId, params.row.applicantId, 'interview')}
            style={{ marginRight: 8 }}
          >
            Interview
          </Button>
          <Button
            variant="contained"
            onClick={() => updateApplicantStatus(params.row.userId, params.row.applicantId, 'accepted')}
          >
            Accept
          </Button>
        </div>
      ),
    },
  ];


  return (
    <div>
      <div>
        <div>
          {loadingJob ? (
            <LoadingBox />
          ) : (
            <CardElement
              jobTitle={singleJob?.title || ""}
              description={singleJob?.description || ""}
              category={singleJob?.jobType?.jobTypeName || ""}
              location={singleJob?.location || ""}
              id={singleJob?._id || ""}
            />
          )}
        </div>

        <div>
          {loadingApplicant ? (
            <LoadingBox />
          ) : (
            <Paper sx={{ bgcolor: "secondary.midNightBlue" }}>
              <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                  sx={{
                    color: "white"
                  }}
                  getRowId={(row) => row.key}
                  rows={data}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  checkboxSelection
                />
              </Box>
            </Paper>
          )}
        </div>
      </div>
    </div>
  )
}

export default UpdateApplicant;
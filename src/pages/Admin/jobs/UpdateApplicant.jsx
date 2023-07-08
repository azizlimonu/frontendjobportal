import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findApplicantAction, updateApplicantAction } from '../../../redux/actions/jobAction';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import LoadingBox from '../../../component/LoadinBox';

const UpdateApplicant = () => {
  const dispatch = useDispatch();

  const { jobId } = useParams();
  useEffect(() => {
    dispatch(findApplicantAction(jobId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { applicants, loading } = useSelector(state => state.findApplicant);
  console.log("STATE", applicants);

  const updateApplicantStatus = (applicant_data) => {
    dispatch(updateApplicantAction(applicant_data))
      .then(() => {
        dispatch(findApplicantAction());
      })
      .catch((error) => {
        console.log(error);
        toast.error("Server Error");
      });
  };

  const transformedData = applicants && applicants.map(applicant => {
    const fullName = `${applicant.firstName} ${applicant.lastName}`;
    const email = applicant.email;
    const applicantId = applicant.jobsHistory
      .filter(history => history.job === jobId)
      .map(history => history._id);

    return {
      Name: fullName,
      Email: email,
      ApplicantId: applicantId
    };
  });

  console.log("TRANSFORMED DATA", transformedData);

  return (
    <div>
      <div>
        <div>
          <p>INI UNTUK JOB CARD NYA</p>
        </div>

        <div>
          {loading ? (
            <LoadingBox />
          ) : (
            <>
              <p>INI UNTUK TABELNYA</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default UpdateApplicant;
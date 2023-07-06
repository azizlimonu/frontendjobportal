import { Box, Button, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Navbar from '../component/Navbar'
import LoadingBox from '../component/LoadinBox'
import Footer from '../component/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { jobLoadSingleAction } from '../redux/actions/jobAction'
import { userApplyJobAction } from '../redux/actions/userAction'

const JobDetails = () => {
  const dispatch = useDispatch();
  const { singleJob, loading } = useSelector(state => state.getSingleJob)
  const { id } = useParams();
  console.log(singleJob);
  useEffect(() => {
    dispatch(jobLoadSingleAction(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleApplyJob = () => {
    dispatch(userApplyJobAction({
      title: singleJob && singleJob.title,
      description: singleJob && singleJob.description,
      salary: singleJob && singleJob.salary,
      location: singleJob && singleJob.location,
      jobId: singleJob && singleJob._id
    }));
  };

  return (
    <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>
      <Box sx={{ bgcolor: "#fafafa" }}>
        <Navbar />
        <Box sx={{ height: '85vh' }}>
          <Container sx={{ pt: '30px' }}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <Box sx={{ flex: 4, p: 2 }}>
                {
                  loading ? (
                    <LoadingBox />
                  ) : (
                    <Card>
                      <CardContent>
                        <Typography variant="h5" component="h3">
                          {singleJob && singleJob.title}
                        </Typography>
                        <Typography variant="body2">
                          <Box
                            component="span"
                            sx={{ fontWeight: 700 }}
                          >
                            Salary
                          </Box>
                          : {
                            singleJob && new Intl.NumberFormat('id-ID', {
                              style: 'currency',
                              currency: 'IDR',
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0
                            }).format(singleJob.salary)
                          }

                        </Typography>

                        <Typography variant="body2">
                          <Box
                            component="span"
                            sx={{ fontWeight: 700 }}
                          >
                            Category
                          </Box>
                          : {
                            singleJob && singleJob.jobType
                              ? singleJob.jobType.jobTypeName
                              : "No category"
                          }
                        </Typography>

                        <Typography variant="body2">
                          <Box
                            component="span"
                            sx={{ fontWeight: 700 }}
                          >
                            Location
                          </Box>
                          : {singleJob && singleJob.location}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{ pt: 2 }}
                        >
                          {singleJob && singleJob.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  )}
              </Box>

              <Box sx={{ flex: 1, p: 2 }}>
                <Card sx={{ p: 2 }}>
                  <Button
                    onClick={handleApplyJob}
                    sx={{ fontSize: "13px" }}
                    variant='contained'
                  >
                    Applied for this Job
                  </Button>
                </Card>
              </Box>

            </Stack>

          </Container>
        </Box>
      </Box>

      <Footer />
    </Box>
  )
}

export default JobDetails
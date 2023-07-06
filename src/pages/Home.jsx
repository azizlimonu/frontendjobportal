import { Box, Card, Container, ListItemIcon, ListItemText, MenuItem, MenuList, Pagination, Stack, Typography, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { jobLoadAction } from '../redux/actions/jobAction'
import { loadJobTypeAction } from '../redux/actions/jobTypeAction'
import SelectComponent from '../component/SelectComponent'
import CardElement from '../component/CardElement'
import LoadingBox from '../component/LoadinBox'

const Home = () => {
  const {
    jobs,
    setUniqueLocation,
    pages,
    loading
  } = useSelector(state => state.getAllJobs);

  const { palette } = useTheme();
  const dispatch = useDispatch();
  const { keyword, location } = useParams();

  const [page, setPage] = useState(1);
  const [cat, setCat] = useState('');

  useEffect(() => {
    dispatch(jobLoadAction(page, keyword, cat, location));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, keyword, cat, location]);

  useEffect(() => {
    dispatch(loadJobTypeAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeCategory = (e) => {
    setCat(e.target.value);
  };

  return (
    <>
      <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>

        <Navbar />
        <Header />

        <Container>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <Box sx={{ flex: 2, p: 2 }}>
              <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
                <Box sx={{ pb: 2 }}>
                  <Typography
                    component="h4"
                    sx={{
                      color: palette.secondary.main,
                      fontWeight: 600
                    }}
                  >
                    Filter job by category
                  </Typography>
                </Box>

                <SelectComponent
                  handleCategory={handleChangeCategory}
                  cat={cat}
                />
              </Card>

              {/* jobs by location */}
              <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
                <Box sx={{ pb: 2 }}>
                  {/* <h4>Filter by category</h4> */}
                  <Typography
                    component="h4"
                    sx={{
                      color: palette.secondary.main,
                      fontWeight: 600
                    }}
                  >
                    Filter job by location
                  </Typography>

                  <MenuList>
                    {
                      setUniqueLocation?.map((location, i) => (
                        <MenuItem key={i}>
                          <ListItemIcon>
                            <LocationOnIcon
                              sx={{
                                color: palette.secondary.main,
                                fontSize: 18
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText>
                            <Link
                              style={{
                                textDecoration: "none"
                              }}
                              to={`/search/location/${location}`}
                            >
                              {location}
                            </Link>
                          </ListItemText>
                        </MenuItem>
                      ))
                    }
                  </MenuList>
                </Box>
              </Card>
            </Box>

            <Box sx={{ flex: 5, p: 2 }}>
              {loading ? (
                <LoadingBox />
              ) : jobs && jobs.length === 0 ? (
                <Box
                  sx={{
                    minHeight: '350px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <h2>No results found!</h2>
                </Box>
              ) : (
                jobs && jobs.map((job) => (
                  <CardElement
                    key={job._id}
                    id={job._id}
                    jobTitle={job.title}
                    description={job.description}
                    category={job.jobType?.jobTypeName || "No category"}
                    location={job.location}
                  />
                ))
              )}

              {/* ////////card element loading etc///// */}
              <Stack spacing={2} >
                <Pagination
                  page={page}
                  count={pages === 0 ? 1 : pages}
                  onChange={(event, value) => setPage(value)}
                />
              </Stack>
            </Box>

          </Stack>
        </Container>
      </Box>
      <Footer />

    </>
  )
}

export default Home
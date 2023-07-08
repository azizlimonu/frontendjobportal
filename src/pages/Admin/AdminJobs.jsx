import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteJobAction, jobLoadAction } from '../../redux/actions/jobAction';
import LoadingBox from '../../component/LoadinBox';
import { Box, Button, Paper, Typography, gridClasses } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminJobs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(jobLoadAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { jobs, loading } = useSelector(state => state.getAllJobs);
  let data = [];
  data = (jobs !== undefined && jobs.length > 0) ? jobs : []

  const deleteJobById = (id) => {
    dispatch(deleteJobAction(id))
      .then(() => {
        dispatch(jobLoadAction());
      })
      .catch((error) => {
        console.log(error);
        toast.error("Server Error");
      });
  };

  const columns = [
    {
      field: '_id',
      headerName: 'Job ID',
      width: 100,
      editable: true,
    },
    {
      field: 'title',
      headerName: 'Job name',
      width: 200,
    },
    {
      field: 'jobType',
      headerName: 'Category',
      width: 150,
      valueGetter: (data) => data.row.jobType.jobTypeName
    },
    {
      field: 'available',
      headerName: 'available',
      width: 150,
      renderCell: (values => (
        values.row.available ? "Yes" : "No"
      ))
    },
    {
      field: 'salary',
      headerName: 'Salary',
      type: Number,
      width: 150,
      renderCell: (values => (
        "Rp. " + (Number(values.row.salary)).toLocaleString("id-ID")
      ))
    },
    {
      field: "Actions",
      width: 300,
      renderCell: (values) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <Button
            variant="contained"
          >
            <Link
              style={{
                color: "white",
                textDecoration: "none"
              }}
              to={`/admin/jobs/${values.row._id}/edit`}
            >
              Edit
            </Link>
          </ Button>

          <Button
            onClick={(e) => deleteJobById(values.row._id)}
            variant="contained"
            color="error"
          >
            Delete
          </ Button>

          <Button
            onClick={() => navigate(`/admin/jobs/applicant/${values.row._id}`)}
            variant="contained"
          >
            Details
          </ Button>
        </Box>
      )
    }
  ];

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ color: "white", pb: 3 }}
      >
        Jobs list
      </Typography>

      {loading ? (
        <LoadingBox />
      ) : (
        <>
          <Box
            sx={{
              pb: 2,
              display: "flex",
              justifyContent: "right"
            }}
          >
            <Button
              variant='contained'
              color="success"
              startIcon={<AddIcon />}
            >
              <Link
                style={{
                  color: "white",
                  textDecoration: "none"
                }}
                to="/admin/jobs/create"
              >
                Create Job
              </Link>
            </Button>
          </Box>

          <Paper
            sx={{ bgcolor: "secondary.midNightBlue" }}
          >
            <Box
              sx={{ height: 400, width: '100%' }}
            >
              <DataGrid
                getRowId={(row) => row._id}
                sx={{
                  '& .MuiTablePagination-displayedRows': {
                    color: 'white',
                  },
                  color: 'white',
                  [`& .${gridClasses.row}`]: {
                    bgcolor: (theme) =>
                      theme.palette.secondary.main
                  },
                  '& .MuiTablePagination-selectLabel': {
                    color: 'white',
                  },
                  '& .MuiTablePagination-select': {
                    color: 'white',
                  },
                  '& .MuiTablePagination-actions': {
                    color: 'white',
                  },
                  '& .MuiTablePagination-selectIcon': {
                    color: 'white',
                  },
                  '& .css-i4bv87-MuiSvgIcon-root': {
                    color: 'white',
                  },
                  button: {
                    color: '#ffffff'
                  }
                }}
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
              />
            </Box>
          </Paper>
        </>
      )}
    </Box>
  )
}

export default AdminJobs
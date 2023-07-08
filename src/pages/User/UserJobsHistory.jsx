import { Paper, Typography, gridClasses } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { DataGrid } from '@mui/x-data-grid'
import moment from 'moment'

const UserJobsHistory = () => {
  const { user } = useSelector(state => state.userProfile);

  if (user !== null) {
    console.log("User Here", user.jobsHistory)
  }

  let data = [];
  data = (user !== null && user.jobsHistory.length > 0)
    ? user.jobsHistory
    : [];

  console.log("MY DATA", data);
  const columns = [
    {
      field: '_id',
      headerName: 'Applicant ID',
      width: 150,
      editable: true,
    },
    {
      field: 'jobTitle',
      headerName: 'Job Title',
      width: 150,
      valueGetter: (params) => params.row.job.title,
    },
    {
      field: 'jobType',
      headerName: 'Category',
      width: 150,
      valueGetter: (params) => params.row.job.jobType.jobTypeName,
    },
    {
      field: 'appliedStatus',
      headerName: 'Status',
      width: 150,
      valueGetter: (params) => params.row.applicationStatus,
    },
    {
      field: 'createdAt',
      headerName: 'Create At',
      width: 150,
      renderCell: (params) => (
        moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS')
      )
    },
    {
      field: 'salary',
      headerName: 'Salary',
      type: Number,
      width: 150,
      valueGetter: (params) => params.row.job.salary,
      renderCell: (params) => (
        `Rp. ${Number(params.row.job.salary).toLocaleString("id-ID")}`
      )
    },
  ];
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ color: "#fafafa" }}
      >
        Jobs History
      </Typography>

      <Box>
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
      </Box>
    </Box>
  )
};

export default UserJobsHistory;
import React, { useEffect } from 'react'
import { Box, Button, Paper, Typography } from '@mui/material'
import { DataGrid, gridClasses, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'
import LoadingBox from '../../component/LoadinBox';
import { userGetAllAction } from '../../redux/actions/userAction';

const AdminUsers = () => {
  const { users, loading } = useSelector(state => state.getAllUsers);
  let data = [];
  data = (users !== undefined && users.length > 0) ? users : []

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userGetAllAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteUserById = (id) => {
    console.log("Deleted User => ", id);
  };


  const columns = [
    {
      field: '_id',
      headerName: 'User ID',
      width: 200,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'E_mail',
      width: 250,
    },
    {
      field: 'role',
      headerName: 'User status',
      width: 150,
      renderCell: (params) => (
        params.row.role === 1 ? "Admin" : "Regular user"
      )
    },
    {
      field: 'createdAt',
      headerName: 'Creation date',
      width: 150,
      renderCell: (params) => (
        moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS')
      )
    },
    {
      field: "Actions",
      width: 200,
      renderCell: (values) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "170px"
          }}
        >
          <Button
            variant="contained">
            <Link
              style={{
                color: "white",
                textDecoration: "none"
              }}
              to={`/admin/edit/user/${values.row._id}`}
            >
              Edit
            </Link>
          </ Button>

          < Button
            onClick={() => deleteUserById(values.row._id)}
            variant="contained" color="error">Delete</ Button>
        </Box>
      )
    }
  ];

  return (
    <>
      <Box >
        <Typography
          variant="h4"
          sx={{ color: "white", pb: 3 }}
        >
          All users
        </Typography>
        {loading ? (
          <LoadingBox />
        ) : (
          <>
            <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
              <Button variant='contained' color="success" startIcon={<AddIcon />}> Create user</Button>
            </Box>
            <Paper sx={{ bgcolor: "secondary.midNightBlue" }} >

              <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
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
                  getRowId={(row) => row._id}
                  rows={data}
                  columns={columns}
                  pageSize={3}
                  rowsPerPageOptions={[3]}
                  checkboxSelection
                  slots={{ toolbar: GridToolbar }}
                />
              </Box>
            </Paper>
          </>
        )}
      </Box>
    </>
  )
}

export default AdminUsers
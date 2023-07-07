import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import StatComponent from '../../component/Dashboard/StatComponent'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import CategoryIcon from '@mui/icons-material/Category';
import ChartComponent from '../../component/Dashboard/ChartComponent';
import Chart from 'react-google-charts';
import { data, options } from '../../utils/data';

const AdminDashboard = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ color: "white", pb: 3 }}
      >
        Dashboard
      </Typography>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >

        <StatComponent
          value="200"
          icon={
            <SupervisorAccountIcon
              sx={{ color: "#fafafa", fontSize: 30 }}
            />
          }
          description="Administrators"
          money=''
        />

        <StatComponent
          value="100"
          icon={
            <WorkIcon
              sx={{ color: "#fafafa", fontSize: 30 }}
            />
          }
          description="Jobs"
          money=''
        />

        <StatComponent
          value="50"
          icon={
            <CategoryIcon
              sx={{ color: "#fafafa", fontSize: 30 }}
            />
          }
          description="Jobs categories"
          money=''
        />

      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ mt: 3 }}
        spacing={{ xs: 1, sm: 2, md: 4 }}>
        <ChartComponent>
          <Chart
            chartType="Bar"
            data={data}
            options={options}
            width="100%"
            height="300px"
            legendToggle
          />
        </ChartComponent>
      </Stack>
    </Box>
  )
}

export default AdminDashboard
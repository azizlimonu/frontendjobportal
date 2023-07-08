import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import JobDetails from './pages/JobDetails';
import NotFound from './pages/NotFound';

import DashboardLayout from './component/DashboardLayout';

import AdminRoute from './pages/Admin/AdminRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminJobs from './pages/Admin/AdminJobs';
import CreateJob from './pages/Admin/jobs/CreateJob';
import EditJob from './pages/Admin/jobs/EditJob';
import AdminUsers from './pages/Admin/AdminUsers';
import CreateJobType from './pages/Admin/jobs/CreateJobType';
import UserDashboard from './pages/User/UserDashboard';
import UserJobsHistory from './pages/User/UserJobsHistory';
import UserInfoDashboard from './pages/User/UserInfo';
import UserRoute from './pages/User/UserRoute';
import UpdateApplicant from './pages/Admin/jobs/UpdateApplicant';

// Custom HOC
const AdminDashboardPage = DashboardLayout(AdminDashboard);

const AdminJobsDashboard = DashboardLayout(AdminJobs);
const AdminCreateJobDashboard = DashboardLayout(CreateJob);
const AdminCreateJobTypeDashboard = DashboardLayout(CreateJobType);
const AdminEditJobDashboard = DashboardLayout(EditJob);
const AdminUsersDashboard = DashboardLayout(AdminUsers);
const AdminUpdateApplicantDashboard = DashboardLayout(UpdateApplicant);

const UserDashboardPage = DashboardLayout(UserDashboard);
const UserDashboardJobs = DashboardLayout(UserJobsHistory);
const UserDashboardInfo = DashboardLayout(UserInfoDashboard);

function App() {
  return (
    <>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/search/:keyword' element={<Home />} />
              <Route path='/search/location/:location' element={<Home />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path="/job/:id" element={<JobDetails />} />
              {/* ADMIN DASHBOARD */}
              <Route path='/admin/dashboard'
                element={
                  <AdminRoute>
                    <AdminDashboardPage />
                  </AdminRoute>
                }
              />
              <Route path='/admin/users'
                element={
                  <AdminRoute>
                    <AdminUsersDashboard />
                  </AdminRoute>
                }
              />
              <Route path='/admin/jobs'
                element={
                  <AdminRoute>
                    <AdminJobsDashboard />
                  </AdminRoute>
                }
              />
              <Route path='/admin/jobs/:id/edit'
                element={
                  <AdminRoute>
                    <AdminEditJobDashboard />
                  </AdminRoute>
                }
              />
              <Route path='/admin/jobs/create'
                element={
                  <AdminRoute>
                    <AdminCreateJobDashboard />
                  </AdminRoute>
                }
              />
              <Route path='/admin/jobs/createjobtype'
                element={
                  <AdminRoute>
                    <AdminCreateJobTypeDashboard />
                  </AdminRoute>
                }
              />
              <Route path='/admin/jobs/applicant/:jobId'
                element={
                  <AdminRoute>
                    <AdminUpdateApplicantDashboard />
                  </AdminRoute>
                }
              />
              {/*END ADMIN DASHBOARD */}
              {/* USER DASHBOARD */}
              <Route path='/user/dashboard'
                element={
                  <UserRoute>
                    <UserDashboardPage />
                  </UserRoute>
                }
              />
              <Route path='/user/jobs'
                element={
                  <UserRoute>
                    <UserDashboardJobs />
                  </UserRoute>
                }
              />
              <Route path='/user/info'
                element={
                  <UserRoute>
                    <UserDashboardInfo />
                  </UserRoute>
                }
              />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ProSidebarProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

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

// Custom HOC
const AdminDashboardHOC = DashboardLayout(AdminDashboard);

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
              <Route path='/admin/dashboard' element={
                <AdminRoute>
                  <AdminDashboardHOC />
                </AdminRoute>
              } />
              <Route path='/admin/users' element={
                <AdminRoute>
                  {/* Userss */}
                </AdminRoute>
              } />
              <Route path='/admin/jobs' element={
                <AdminRoute>
                  {/* Jobss */}
                </AdminRoute>
              } />

              <Route path='*' element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ProSidebarProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

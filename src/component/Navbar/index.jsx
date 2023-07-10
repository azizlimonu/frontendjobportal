import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';

import WorkIcon from '@mui/icons-material/Work';
import MenuIcon from '@mui/icons-material/Menu';
import { userLogoutAction } from '../../redux/actions/userAction';
import { toast } from 'react-toastify';

const pages = ["Home", "Login", "Register"];

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.signIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { palette } = useTheme();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNav = (e) => {
    setAnchorElNav(e.currentTarget);
  };
  const handleOpenUser = (e) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleCloseNav = () => {
    setAnchorElNav(null);
  };

  const handleCloseUser = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    dispatch(userLogoutAction())
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };


  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <WorkIcon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          />
          {/* for dekstop */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            JOB SEEKER
          </Typography>

          {/* Menu Toggle when mobile */}
          <Box
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNav}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            {/* toggle bar show menu */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNav}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, idx) => (
                <MenuItem key={idx} onClick={handleCloseNav}>
                  <Typography textAlign="center">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <WorkIcon
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
          />

          {/* for mobile */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            JOB SEEKER
          </Typography>

          {/* for desktop */}
          <Box
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >

            <Button
              onClick={handleCloseNav}
              sx={{ my: 2, color: 'white', display: 'block' }}>
              <Link
                to="/"
                style={{
                  color: 'white', textDecoration: "none"
                }}
              >
                Home
              </Link>
            </Button>

            {!userInfo && (
              <>
                <Button
                  onClick={handleCloseNav}
                  sx={{ my: 2, color: 'white', display: 'block' }}>
                  <Link
                    to="/register"
                    style={{
                      color: 'white', textDecoration: "none"
                    }}
                  >
                    Register
                  </Link>
                </Button>

                <Button
                  onClick={handleCloseNav}
                  sx={{ my: 2, color: 'white', display: 'block' }}>
                  <Link
                    to="/login"
                    style={{
                      color: 'white', textDecoration: "none"
                    }}
                  >
                    Login
                  </Link>
                </Button>
              </>
            )}

          </Box>

          {/* Toggle Profile */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUser} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="" />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUser}
            >
              {userInfo && userInfo.role !== 0 && (
                <MenuItem onClick={handleCloseUser}>
                  <Typography textAlign="center">
                    <Link
                      style={{
                        textDecoration: "none",
                        color: palette.primary.main
                      }}
                      to="/admin/dashboard"
                    >
                      Admin Dashboard
                    </Link>
                  </Typography>
                </MenuItem>
              )}

              {
                !userInfo ? (
                  <>
                    <MenuItem onClick={handleCloseUser}>
                      <Typography textAlign="center">
                        <Link
                          style={{
                            textDecoration: "none",
                            color: palette.primary.main
                          }}
                          to="/login"
                        >
                          Log In
                        </Link>
                      </Typography>
                    </MenuItem>

                    <MenuItem onClick={handleCloseUser}>
                      <Typography textAlign="center">
                        <Link
                          style={{
                            textDecoration: "none",
                            color: palette.primary.main
                          }}
                          to="/register"
                        >
                          Register
                        </Link>
                      </Typography>
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem onClick={handleLogout}>
                      <Typography
                        style={{
                          textDecoration: "none",
                          color: palette.primary.main
                        }}
                        textAlign="center"
                      >
                        Log Out
                      </Typography>
                    </MenuItem>

                    <MenuItem onClick={handleCloseUser}>
                      <Typography textAlign="center">
                        <Link
                          style={{
                            textDecoration: "none",
                            color: palette.primary.main
                          }}
                          to="/user/dashboard"
                        >
                          User Dashboard
                        </Link>
                      </Typography>
                    </MenuItem>
                  </>
                )
              }
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
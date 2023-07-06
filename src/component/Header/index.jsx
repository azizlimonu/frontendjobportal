import { Box, Button, InputBase, styled } from '@mui/material';
import React from 'react';
import HeaderImage from '../../images/images1.jpg';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';

const StyleHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 400,
  backgroundImage: `url(${HeaderImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundColor: theme.palette.secondary.main,
}));

const Header = () => {
  const navigate = useNavigate();

  const validationSchema = yup.object({
    search: yup.string('Enter your search query').required('This field cannot be empty'),
  });

  const onSubmit = async (values, actions) => {
    const { search } = values;
    if (search.trim()) {
      navigate(`/search/${search}`);
    } else {
      navigate('/');
    }
    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      search: '',
    },
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <StyleHeader>
      <form
        onSubmit={handleSubmit}
        style={{ width: '50%' }}
      >
        <Box sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}
        >
          {/* <Search> */}

          <InputBase sx={{ bgcolor: 'white', padding: '10px' }}
            fullWidth={true}
            id="search"
            name="search"
            label="search"
            placeholder='ex: developer, front end'
            value={values.search}
            onChange={handleChange}
            error={touched.search && Boolean(errors.search)}
          // helperText={touched.search && errors.search}
          />

          <Button
            color="primary"
            variant="contained"
            type="submit"
            disabled={isSubmitting}
          >
            Search
          </Button>
        </Box>

        <Box
          component='span'
          sx={{ color: 'red' }}
        >
          {touched.search && errors.search}
        </Box>
      </form>
    </StyleHeader>
  );
};

export default Header;

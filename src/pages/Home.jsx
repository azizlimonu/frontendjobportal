import { Box, Container } from '@mui/material'
import React from 'react'
import Footer from '../component/Footer/Footer'
import Navbar from '../component/Navbar'

const Home = () => {
  return (
    <>
      <Box sx={{ bgColor: "#fafafa", minHeight: "100vh" }}>
        <Navbar />
        <Container>
          <p>HOMEEEE</p>
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export default Home
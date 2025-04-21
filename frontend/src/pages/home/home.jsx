import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Box, Container, Button, Stack, Typography } from '@mui/material';

function Home() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundImage: 'url(/assets/images/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Container>
          <Stack spacing={4} alignItems="start" textAlign="start">
            <Typography variant="h1" sx={{ color: 'white', fontWeight: 'bolder' }}>
              SIAKAD
            </Typography>
            <Typography variant="p" sx={{ color: 'white'}}>
              Welcome to the Student Academic
              <br/>
              Information System
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" color="primary">
                Login
              </Button>
              <Button variant="outlined" color="primary">
                Daftar
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default Home;

import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Box, Container, Button, Stack, Typography } from '@mui/material';

function Home() {
  const [hoverLogin, setHoverLogin] = useState(false);
  const [hoverDaftar, setHoverDaftar] = useState(false);
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
          <Stack spacing={2} alignItems="start" textAlign="start">
            <Typography variant="h1" sx={{ color: 'white', fontWeight: 'bolder' }}>
              SIAKAD
            </Typography>
            <Typography variant="p" sx={{ color: 'white'}}>
              Welcome to the Student Academic
              <br/>
              Information System
            </Typography>
            <Stack direction="row" spacing={2}>
                <Button
                    variant={hoverLogin ? 'outlined' : 'contained'}
                    color="primary"
                    onMouseEnter={() => setHoverLogin(true)}
                    onMouseLeave={() => setHoverLogin(false)}
                    >
                    Login
                </Button>
                <Button
                variant={hoverDaftar ? 'contained' : 'outlined'}
                color="primary"
                onMouseEnter={() => setHoverDaftar(true)}
                onMouseLeave={() => setHoverDaftar(false)}
                sx={{ ml: 2 }}
            >
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

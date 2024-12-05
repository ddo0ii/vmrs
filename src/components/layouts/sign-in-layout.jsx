import { Box, Container, Typography } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import React, { Suspense } from 'react';
import { Path } from '@/constants/path';
import Logo from '@/assets/images/logo.png';

export const SignInLayout = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography onClick={() => navigate(Path.HOME)} sx={{ mb: 5 }}>
        <img src={Logo} alt="VCP-X 로고" style={{ cursor: 'pointer' }} />
      </Typography>
      <Container sx={{ width: '550px' }}>
        <Suspense fallback={<div />}>
          <Outlet />
        </Suspense>
      </Container>
    </Box>
  );
};

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AdbIcon from '@mui/icons-material/Adb';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: '#0081a7', padding: '1rem' }}
      >
        <Toolbar>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
            BREWERIES
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>

          <Typography
            textAlign="center"
            href="/"
            component="a"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              marginRight: '2rem',
            }}
          >
            HOME
          </Typography>
          <Typography
            textAlign="center"
            href="/search"
            component="a"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              marginRight: '2rem',
            }}
          >
            SEARCH
          </Typography>
          <Typography
            textAlign="center"
            href="/about"
            component="a"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              marginRight: '2rem',
            }}
          >
            ABOUT
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

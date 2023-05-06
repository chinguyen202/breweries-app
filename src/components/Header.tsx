import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const Header = () => {
  const handleNavMenu = (event: React.MouseEvent<HTMLElement>) => {};

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
          <MenuItem onClick={handleNavMenu}>
            <Typography textAlign="center">HOME</Typography>
          </MenuItem>
          <MenuItem onClick={handleNavMenu}>
            <Typography textAlign="center">SEARCH</Typography>
          </MenuItem>
          <MenuItem onClick={handleNavMenu}>
            <Typography textAlign="center">ABOUT</Typography>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

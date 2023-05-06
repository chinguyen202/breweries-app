import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ background: '#0081a7', padding: '1rem', top: 'auto', bottom: 0 }}
    >
      <Toolbar>
        <Typography
          noWrap
          component="a"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 500,
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          &copy;2023 Breweries App. All rights reserved.
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        <TwitterIcon sx={{ marginRight: '1rem' }} />
        <FacebookIcon sx={{ marginRight: '1rem' }} />
        <InstagramIcon sx={{ marginRight: '1rem' }} />
        <LinkedInIcon sx={{ marginRight: '1rem' }} />
      </Toolbar>
    </AppBar>
  );
};

export default Footer;

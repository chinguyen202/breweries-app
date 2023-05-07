import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import business from '../assets/business.jpg';
import { CompanyProps } from '../types/types';

// Company card
const Company = ({ company }: CompanyProps) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" sx={{ padding: '2rem' }}>
        <CardMedia
          component="img"
          height="140"
          image={business}
          alt="business logo"
        />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {company.brewery_type.toUpperCase()} | {company.country}
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5" component="div">
            {company.name}
          </Typography>
          <a
            href={`/detail/${company.id}`}
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <Typography
              textAlign="center"
              sx={{
                marginRight: '2rem',
                padding: '0.5rem 1.5rem',
                borderRadius: '1rem',
                backgroundColor: '#0081a7',
              }}
            >
              MORE...
            </Typography>
          </a>
        </div>
      </Card>
    </Box>
  );
};

export default Company;

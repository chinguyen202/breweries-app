import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import fetchCompany from '../services/fetchCompany';
import { Box, CardMedia, Typography, Grid } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import business from '../assets/business.jpg';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import useDetail from '../hooks/useDetail';
import { ICompany } from '../types/APIResponseTypes';

const myIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

const Detail = () => {
  const { id } = useParams();
  if (!id) {
    throw new Error("DEBUG: company's id is not available");
  }
  const result = useQuery(['detail', id], fetchCompany);
  // const { company, loading } = useDetail(id);
  if (result.isLoading) {
    return (
      <>
        <h2>Loading</h2>
      </>
    );
  }
  const company = result.data;
  const latitude = Number(company?.latitude);
  const longitude = Number(company?.longitude);

  return (
    <Box
      sx={{
        margin: '5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <CardMedia
        component="img"
        height="250"
        image={business}
        alt="business logo"
      />
      <Typography variant="h4" sx={{ margin: '2rem', textAlign: 'center' }}>
        {company?.name}
      </Typography>
      <Grid container spacing={2} sx={{ mb: '2rem' }}>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Brewery Type:</Typography>
          <Typography variant="subtitle1">Address:</Typography>
          <Typography variant="subtitle1">Phone: </Typography>
          {company?.website_url && (
            <Typography variant="subtitle1">Website:</Typography>
          )}
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">{company?.brewery_type}</Typography>
          <Typography variant="subtitle1">
            {company?.address_1}, {company?.postal_code} {company?.city},{' '}
            {company?.state_province} , {company?.country}
          </Typography>
          <Typography variant="subtitle1">Phone: {company?.phone}</Typography>
          {company?.website_url && (
            <Typography variant="subtitle1">
              <a
                href={company.website_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {company.website_url}
              </a>
            </Typography>
          )}
        </Grid>
      </Grid>
      {/* if the company has longtitude and latitude, display map */}
      {latitude && longitude ? (
        <MapContainer
          center={[latitude, longitude]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: '50rem', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[latitude, longitude]} icon={myIcon}>
            <Popup>
              <Typography>{company?.name}</Typography>
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default Detail;

import { useState } from 'react';
import { APIResponse } from '../types/APIResponseTypes';
import Company from './Company';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';

type Props = {
  companies: APIResponse;
};

const Results = ({ companies }: Props) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;
  const numPages = Math.ceil(companies.length / itemsPerPage);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const companiesToShow = companies.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      <Grid container spacing={5} sx={{ padding: '5rem' }}>
        {companiesToShow.map((company) => (
          <Grid item key={company.id} xs={12} sm={6} md={4}>
            <Company company={company} />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 5,
        }}
      >
        <Pagination count={numPages} page={page} onChange={handlePageChange} />
      </Box>
    </>
  );
};

export default Results;

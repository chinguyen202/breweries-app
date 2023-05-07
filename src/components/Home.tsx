import { useState, useEffect } from 'react';
import DisplayOptions from './DisplayOptions';
import Results from './Results';
import { APIResponse } from '../types/APIResponseTypes';

const Home = () => {
  const [companies, setCompanies] = useState<APIResponse>();

  useEffect(() => {
    fetchCompanies();
  });

  const fetchCompanies = async (): Promise<void> => {
    const response = await fetch('https://api.openbrewerydb.org/v1/breweries');
    if (response.ok) {
      setCompanies(await response.json());
    }
  };
  return (
    <>{companies ? <Results companies={companies} /> : <p>Loading...</p>}</>
  );
};

export default Home;

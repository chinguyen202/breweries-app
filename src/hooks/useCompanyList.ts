import { useState, useEffect } from 'react';
import { APIResponse, ICompany } from '../types/APIResponseTypes';

const useCompanyList = () => {
  const [companies, setCompanies] = useState<APIResponse>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    setLoading(true);

    try {
      const res = await fetch('https://api.openbrewerydb.org/v1/breweries');
      const data = await res.json();
      setCompanies(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return { companies, loading };
};

export default useCompanyList;

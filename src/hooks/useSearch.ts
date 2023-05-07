import { useState, useEffect } from 'react';
import { APIResponse, ICompany } from '../types/APIResponseTypes';

const localCache: Record<string, ICompany[]> = {};

const useSearch = (search: string) => {
  const [companies, setCompanies] = useState<APIResponse>();

  useEffect(() => {
    const fetchCompaniesByName = async (search: string) => {
      setCompanies([]);
      try {
        const res = await fetch(
          `https://api.openbrewerydb.org/v1/breweries/search?query=${search}`
        );
        const data = await res.json();
        localCache[search] = data;
        setCompanies(localCache[search]);
      } catch (error) {
        console.error(error);
      }
    };

    if (!search) {
      setCompanies([]);
    } else if (localCache[search]) {
      setCompanies(localCache[search]);
    } else {
      fetchCompaniesByName(search);
    }
  }, [search]);

  return { companies };
};

export default useSearch;

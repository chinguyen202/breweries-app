import { useState, useEffect } from 'react';
import { APIResponse, ICompany } from '../types/APIResponseTypes';

const localCache: Record<string, ICompany[]> = {};

const useSearch = (search: string) => {
  const [companies, setCompanies] = useState<APIResponse>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCompaniesByName = async (search: string) => {
      setCompanies([]);
      setLoading(true);
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
      setLoading(false);
    };

    if (!search) {
      setCompanies([]);
    } else if (localCache[search]) {
      setCompanies(localCache[search]);
    } else {
      fetchCompaniesByName(search);
    }
  }, [search]);

  return { companies, loading };
};

export default useSearch;

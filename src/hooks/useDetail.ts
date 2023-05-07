import { useState, useEffect } from 'react';
import { ICompany } from '../types/APIResponseTypes';

const localCache: Record<string, ICompany> = {};

const useDetail = (id: string) => {
  const [company, setCompany] = useState<ICompany>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCompanyById = async (id: string) => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.openbrewerydb.org/v1/breweries/${id}`
        );
        const data = await res.json();
        localCache[id] = data;
        setCompany(localCache[id]);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    if (id) {
      fetchCompanyById(id);
    } else if (localCache[id]) {
      setCompany(localCache[id]);
    }
  }, [id]);

  return { company, loading };
};

export default useDetail;

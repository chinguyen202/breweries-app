import { useEffect, useState } from 'react';
import Results from './Results';
import SearchParams from './SearchParams';
import { APIResponse, ICompany } from '../types/APIResponseTypes';

const Search = () => {
  const [companies, setCompanies] = useState<APIResponse>();
  const [search, setSearch] = useState('');
  const handleSearch = () => {
    fetchCompaniesByName(search);
  };

  useEffect(() => {
    handleSearch();
  }, [search]);

  const fetchCompaniesByName = async (search: string): Promise<void> => {
    const res = await fetch(
      `https://api.openbrewerydb.org/v1/breweries/search?query=${search}`
    );
    if (res.ok) {
      setCompanies(await res.json());
    }
  };

  return (
    <>
      <SearchParams
        search={search}
        setSearch={setSearch}
        onSearch={handleSearch}
      />
      {companies ? <Results companies={companies} /> : <p>No company found</p>}
    </>
  );
};

export default Search;

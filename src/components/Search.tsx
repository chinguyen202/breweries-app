import { useState } from 'react';
import Results from './Results';
import SearchParams from './SearchParams';
import useSearch from '../hooks/useSearch';
import useDebounce from '../hooks/useDebounce';

// Search page
const Search = () => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  const { companies } = useSearch(debouncedSearch);

  return (
    <>
      {!search ? (
        <SearchParams search={search} setSearch={setSearch} />
      ) : (
        <>
          <SearchParams search={search} setSearch={setSearch} />
          {companies && companies.length > 0 ? (
            <Results companies={companies} />
          ) : (
            <h3 style={{ textAlign: 'center' }}>No company found</h3>
          )}
        </>
      )}
    </>
  );
};

export default Search;

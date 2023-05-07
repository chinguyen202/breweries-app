import { useRef, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { SearchParamsProps } from '../types/types';

const SearchParams = ({ search, setSearch }: SearchParamsProps) => {
  const searchRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      {/* <form
        style={{
          display: 'flex',
          width: '70%',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '0.5rem',
          borderRadius: '5px',
          border: '1px solid #0081a7',
          backgroundColor: '#fff',
        }}
      > */}
      <TextField
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        variant="outlined"
        placeholder="Search breweries by name"
        sx={{
          width: '70%',
          border: 'none',
          marginLeft: '5rem',
          marginRight: '5rem',
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          style: {
            padding: '0.5rem',
            fontSize: '1.2rem',
            borderRadius: '5px',
            border: 'none',
            width: '100%',
          },
        }}
        inputRef={searchRef}
      />
      {/* </form> */}
    </div>
  );
};

export default SearchParams;

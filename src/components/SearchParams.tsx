import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { SearchParamsProps } from '../types/types';

const SearchParams = ({ search, setSearch }: SearchParamsProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <form
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
      >
        <TextField
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          variant="standard"
          placeholder="Search breweries by name"
          sx={{ width: '100%', border: 'none' }}
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
        />
      </form>
    </div>
  );
};

export default SearchParams;

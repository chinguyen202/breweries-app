import Results from './Results';
import useCompanyList from '../hooks/useCompanyList';

const Home = () => {
  const { companies, loading } = useCompanyList();

  return (
    <>
      {!loading && companies ? (
        <Results companies={companies} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Home;

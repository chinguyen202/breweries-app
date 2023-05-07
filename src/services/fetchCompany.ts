import { ICompany } from '../types/APIResponseTypes';

const fetchCompany = async ({ queryKey }: any): Promise<ICompany> => {
  const id = queryKey[1];

  const apiRes = await fetch(
    `https://api.openbrewerydb.org/v1/breweries/${id}`
  );
  if (!apiRes.ok) {
    throw new Error(`DEBUG: not able to fetch the company with id ${id}`);
  }
  return apiRes.json();
};

export default fetchCompany;

import { ICompany } from './APIResponseTypes';

export type CompanyProps = {
  company: ICompany;
};

export type SearchParamsProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

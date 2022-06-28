import { CompanyFormEnum, CompanyTypeEnum, PhotoType, ContractType } from './types';

export const initialStateCompany = {
  id: '',
  contactId: '',
  shortName: '',
  name: '',
  businessEntity: '' as CompanyFormEnum,
  contract: {
    no: '',
    issue_date: ''
  } as ContractType,
  type: [] as CompanyTypeEnum[],
  status: '',
  photos: [] as PhotoType[],
  createdAt: '',
  updatedAt: ''
}

export const initialStateContacts = {
  id: '',
  lastname: '',
  firstname: '',
  patronymic: '',
  phone: '',
  email: '',
  createdAt: '',
  updatedAt: ''
}

export type CompanyTypes = typeof initialStateCompany;
export type ContactTypes = typeof initialStateContacts;

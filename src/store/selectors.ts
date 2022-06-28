import {CompanyTypes, ContactTypes} from '../components/Companies/initial';

export const getCompanySelector = (state: { company: CompanyTypes; contacts: ContactTypes}) => {
  return state.company
}
export const getContactsSelector = (state: { company: CompanyTypes; contacts: ContactTypes}) => {
  return state.contacts
}

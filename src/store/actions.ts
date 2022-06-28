import { CompanyTypes, ContactTypes } from '../components/Companies/initial';

export const SET_COMPANY = 'SET_COMPANY';
export const SET_CONTACTS = 'SET_CONTACTS';
export const EDIT_COMPANY = 'EDIT_COMPANY';
export const ADD_PHOTO = 'ADD_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';

export const setCompany = (company: CompanyTypes) => {
  return {
    type: SET_COMPANY,
    company
  }
}

export const setContacts = (contacts: ContactTypes) => {
  return {
    type: SET_CONTACTS,
    contacts
  }
}

export const editCompany = (id: string, company: CompanyTypes) => {
  return {
    type: EDIT_COMPANY,
    id,
    company
  }
}

export const addPhoto = (file: File) => {
  return {
    type: ADD_PHOTO,
    file
  }
}

export const removePhoto = (imageName: string) => {
  return {
    type: REMOVE_PHOTO,
    imageName
  }
}


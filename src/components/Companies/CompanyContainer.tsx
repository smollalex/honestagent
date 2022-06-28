import React from 'react';
import { connect } from 'react-redux';
import {
  getCompany, editCompany, deleteCompany,
  getContacts, editContacts,
  removePhoto, addPhoto
} from '../../store/thunks';
import { Company } from './Company';
import { CompanyTypes, ContactTypes } from './initial';
import { getCompanySelector, getContactsSelector } from '../../store/selectors';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';

export type CompanyContainerProps = {
  company: CompanyTypes
  contacts: ContactTypes
  getCompany: (id: string) => void
  getContacts: (id: string) => void
  editCompany: (id: string, company: CompanyTypes) => void
  deleteCompany: (id: string) => void
  editContacts: (id: string, contacts: ContactTypes) => void
  removePhoto: (id: string, imageName: string) => void
  addPhoto: (id: string, file: File | undefined) => void
}

export const CompanyContainer: React.FC<CompanyContainerProps> = (props) => {
  const {
    company,
    contacts,
    getCompany,
    getContacts,
    editCompany,
    deleteCompany,
    editContacts,
    removePhoto,
    addPhoto
  } = props;

  let { id } = useParams();
  useEffect(() => {
    if (id) {
      getCompany(id);
    }
  }, [id]);

  useEffect(() => {
    if (company.contactId) {
      getContacts(company.contactId);
    }
  }, [company.contactId]);

  return (
    <Company
      company={company}
      contacts={contacts}
      editCompany={editCompany}
      deleteCompany={deleteCompany}
      editContacts={editContacts}
      removePhoto={removePhoto}
      addPhoto={addPhoto}
    />
  )
}
const mapStateToProps = (state: { company: CompanyTypes, contacts: ContactTypes}) => {
  return {
    company: getCompanySelector(state),
    contacts: getContactsSelector(state)
  }
}

export const CompanyDetails = connect(mapStateToProps, {
  getCompany,
  getContacts,
  editCompany,
  deleteCompany,
  editContacts,
  removePhoto,
  addPhoto
})(CompanyContainer);

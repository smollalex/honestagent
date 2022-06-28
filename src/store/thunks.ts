import moment from 'moment';
import api from '../api/http';
import { CompanyTypes, ContactTypes } from '../components/Companies/initial';
import { setCompany, setContacts, removePhoto as removePhotoAction, addPhoto as addPhotoAction } from "./actions";

export const getCompany = (id: string) => {
  return (dispatch: any) => {
    api.getCompany(id)
      .then(response => response.json())
      .then(json => dispatch(setCompany(json)))
  }
}

export const editCompany = (id: string, company: CompanyTypes) => {
  return (dispatch: any) => {
    const params = {
      name: company.name,
      shortName: company.shortName,
      businessEntity: company.businessEntity,
      contract: {
        no: company.contract.no,
        issue_date: moment(company.contract.issue_date).format('YYYY-MM-DDT[00:00:00Z]')
      },
      type: company.type
    }
    api.pathCompany(id, JSON.stringify(params))
      .then(response => {
        if (response.ok) {
          dispatch(setCompany(company))
        } else {
          console.log(response)
        }
      })
  }
}

export const deleteCompany = (id: string) => {
  return (dispatch: any) => {
    api.deleteCompany(id)
      .then(response => {
        if (response.ok) {
          console.log('Company deleted!')
        }
      })
  }
}

export const getContacts = (id: string) => {
  return (dispatch: any) => {
    api.getContacts(id)
      .then(response => response.json())
      .then(json => dispatch(setContacts(json)))
  }
}

export const editContacts = (id: string, contacts: ContactTypes) => {
  return (dispatch: any) => {
    const params = {
      lastname: contacts.lastname,
      firstname: contacts.firstname,
      patronymic: contacts.patronymic,
      phone: contacts.phone,
      email: contacts.email
    }
    api.pathContacts(id, JSON.stringify(params))
      .then(response => {
        if (response.ok) {
          dispatch(setContacts(contacts))
        }
      });
  }
}

export const removePhoto = (id: string, imageName: string) => {
  return (dispatch: any) => {
    api.removePhoto(id, imageName)
      .then(response => {
        if (response.ok) {
          dispatch(removePhotoAction(imageName))
        }
      })
  }
}

export const addPhoto = (id: string, file: File | undefined) => {
  return (dispatch: any) => {
    if (file) {
      const data = new FormData();
      data.append('file', file)
      api.addPhoto(id, data)
        .then(response => {
          if (response.ok) {
            dispatch(addPhotoAction(file))
          } else {
            console.log('response = ', response)
          }
        })
        .then(
          success => console.log(success) // Handle the success response object
        ).catch(
          error => console.log(error) // Handle the error response object
        );
    }
  }
}

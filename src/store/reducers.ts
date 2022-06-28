import {EDIT_COMPANY, REMOVE_PHOTO, SET_COMPANY, SET_CONTACTS} from './actions';
import { CompanyTypes, ContactTypes, initialStateCompany, initialStateContacts } from '../components/Companies/initial';

export const CompanyReducer = (state: CompanyTypes = initialStateCompany, action: any) => {
  switch (action.type) {
    case SET_COMPANY:
      return action.company;
    case EDIT_COMPANY:
      return {
        ...state,
        company: action.company
      }
    case REMOVE_PHOTO:
      return {
        ...state,
        photos: state.photos.filter(item => item.name !== action.imageName)
      }
    default:
      return state;
  }
}

export const ContactReducer = (state: ContactTypes = initialStateContacts, action: any) => {
  switch (action.type) {
    case SET_CONTACTS:
      return action.contacts;
    default:
      return state;
  }
}

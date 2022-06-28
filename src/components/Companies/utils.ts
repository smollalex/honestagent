import {CompanyTypeEnum} from './types';

const getLocalizationCompanyType = (type: CompanyTypeEnum) => {
  switch (type){
    case CompanyTypeEnum.agent:
      return 'Агент'
    case CompanyTypeEnum.contractor:
      return 'Подрядчик'
    case CompanyTypeEnum.subcontractor:
      return 'Субподрядчик'
    default:
      return null
  }
}

export const getLocalizationCompanyTypeLabel = (type: CompanyTypeEnum) => {
  return {
    label: getLocalizationCompanyType(type)
  }
}

export const getLocalizationCompanyTypePlaceholders = (types: CompanyTypeEnum[]) => {
  const transformArray = types.map(item => {
    return getLocalizationCompanyType(item)
  })

  return transformArray.join(', ');
}

export const getFormattedPhoneNumber = (value: string | undefined) => {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 7) {
    return `${phoneNumber.slice(0,2)}-${phoneNumber.slice(2,4)}-${phoneNumber.slice(4,6)}`;
  }
  return `+${phoneNumber.slice(0,1)} (${phoneNumber.slice(1,4)}) ${phoneNumber.slice(4,7)}-${phoneNumber.slice(7,9)}-${phoneNumber.slice(9,11)}`;
}

export enum CompanyFormEnum {
  ooo = 'ООО',
  ip = 'ИП',
  oao = 'ОАО'
}

export enum CompanyTypeEnum {
  contractor = 'contractor',
  agent = 'agent',
  subcontractor = 'subcontractor'
}

export type PhotoType = {
  name: string
  filepath: string
  thumbpath?: string
}

export type ContractType = {
  no: string,
  issue_date: string
}






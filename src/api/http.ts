const url = 'http://135.181.35.61:2112';
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVVNFUk5BTUUiLCJpYXQiOjE2NTYyMjk0NTMsImV4cCI6MTY1NjgzNDI1M30.XRhCefGPD4dNzWH_fcqaobVAL-LMJEGpyk35y-eOCpk'
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `${token}`
  }
}

const getCompany = (id: string) => {
  return fetch(`${url}/companies/${id}`, options)
}

const getContacts = (id: string) => {
  return fetch(`${url}/contacts/${id}`, options)
}

const pathCompany = (id: string, data: string) => {
  return fetch(`${url}/companies/${id}`, {
    method: 'PATCH',
    body: data,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    }
  })
}

const deleteCompany = (id: string) => {
  return fetch(`${url}/companies/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `${token}`
    }
  })
}

const pathContacts = (id: string, data: string) => {
  return fetch(`${url}/contacts/${id}`, {
    method: 'PATCH',
    body: data,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    }
  })
}

const removePhoto = (id: string, imageName: string) => {
  return fetch(`${url}/companies/${id}/image/${imageName}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `${token}`
    }
  })
}

const addPhoto = (id: string, file: FormData) => {
  console.log(file);
  return fetch(`${url}/companies/${id}/image`, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `${token}`
    },
    body: file
  })
}

export default {
  getCompany,
  pathCompany,
  deleteCompany,
  getContacts,
  pathContacts,
  removePhoto,
  addPhoto
}

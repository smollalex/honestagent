import React, { useState, useEffect } from 'react';

import { Formik, Form, Field, FieldArray } from 'formik';

import { Header, Content, Actions, Back, Section } from '../layouts/common/styled';

import { Arrow, Shared, Refresh, Trash, Edit, Add } from '../../assets/icons';

import { IconButton, MenuItem, FormGroup, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { EditButton } from '../ui/EditButton';


import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import { CompanyTitleWrapper, CompanyTitle, Photos, SectionTitle } from './styled';
import { Select, CheckboxWithLabel } from 'formik-mui';

import moment from 'moment';

import { PhotoType, CompanyFormEnum, CompanyTypeEnum } from './types';

import { Photo } from './Photo';
import { Button, TextField } from '../ui';

import { EditableField } from '../ui/EditableField';

import { DatePicker } from 'formik-mui-lab';

import { Separator } from './Separator';

import { CompanyContainerProps } from './CompanyContainer';

import {
  getFormattedPhoneNumber,
  getLocalizationCompanyTypeLabel,
  getLocalizationCompanyTypePlaceholders
} from './utils';
import { useParams } from 'react-router-dom';


type CompanyProps = Omit<CompanyContainerProps, "getCompany" | "getContacts">

export const Company: React.FC<CompanyProps> = (props) => {
  const {
    company,
    contacts,
    editCompany,
    deleteCompany,
    editContacts,
    removePhoto,
    addPhoto
  } = props;

  let { id } = useParams();

  const [ editField, setEditField ] = useState<string>('');
  const [openModal, setOpenModal] = useState(false);
  const [uploadingImage, setUploadingImage] = useState<File | undefined>();

  // Handlers ==============

  const handleShare = () => {}
  const handleRefresh = () => {}
  const handleEdit = (field: string) => {
    if (editField !== '') {
      if (editField === field) {
        setEditField('');
      } else {
        setEditField('');
        setEditField(field);
      }
    } else {
      setEditField(field);
    }
  }
  const handleDeleteCompany = () => {
    if (id) {
      deleteCompany(id);
    }
    setOpenModal(false)
  }
  const handleDeletePhoto = (remove: any, index: number, imagePhoto: string) => {
    remove(index);
    if (id) {
      removePhoto(id, imagePhoto)
    }
  }
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <main>
        <Header>
          <Back to="/companies">
            <img src={Arrow} alt=""/>
            К списку юридических лиц
          </Back>
          <Actions>
            <IconButton onClick={handleShare}>
              <img src={Shared} alt=""/>
            </IconButton>
            <IconButton onClick={handleRefresh}>
              <img src={Refresh} alt=""/>
            </IconButton>
            <IconButton onClick={handleOpenModal}>
              <img src={Trash} alt=""/>
            </IconButton>
          </Actions>
        </Header>
        <Content>
          <Formik
            enableReinitialize
            initialValues={{ company: company, contacts: contacts }}
            onSubmit={(values, { setTouched }) => {
              if (editField === ('company_name' || 'company_main_info')) {
                editCompany(values.company.id, values.company)
              } else if (editField === 'contacts') {
                editContacts(values.contacts.id, values.contacts);
              }
              setEditField('')

            }}
          >
            {({ values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                initialValues,
                dirty,
            }) => {

              const { company, contacts } = values;

              return (
                <Form>
                  <CompanyTitleWrapper>
                    <EditableField
                      value={<CompanyTitle>{company.shortName}</CompanyTitle>}
                      isEditMode={editField === 'company_name'}
                    >
                      <Field
                        component={TextField}
                        name="company.shortName"
                        label="Название"
                        variant="outlined"
                        autoFocus
                        fullWidth
                      />
                    </EditableField>
                    <EditButton
                      onClick={handleEdit}
                      editField={editField}
                      toggleFieldName='company_name'
                    />
                  </CompanyTitleWrapper>
                  <Separator title="Общая информация">
                    <EditButton
                      onClick={handleEdit}
                      editField={editField}
                      toggleFieldName='company_main_info'
                    />
                  </Separator>
                  <EditableField
                    legend="Полное название"
                    value={company.name}
                    isEditMode={editField === 'company_main_info'}
                  >
                    <Field
                      component={TextField}
                      name="company.name"
                      label="Название"
                      variant="outlined"
                      autoFocus
                      fullWidth
                    />
                  </EditableField>
                  <EditableField
                    legend="Договор"
                    value={company.contract.no + ' от ' + moment(company.contract.issue_date).format('DD/MM/YYYY')}
                    isEditMode={editField === 'company_main_info'}
                  >
                    <div style={{ marginRight: '10px' }}>
                      <Field
                        component={TextField}
                        name="company.contract.no"
                        label="Номер"
                        variant="outlined"
                      />
                    </div>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <Field
                        component={DatePicker}
                        label="От"
                        name="company.contract.issue_date"
                        inputFormat="dd/mm/yyyy"
                        textField={{
                          size: 'small'
                        }}
                      />
                    </LocalizationProvider>
                  </EditableField>
                  <EditableField
                    legend="Форма"
                    value={company.businessEntity}
                    isEditMode={editField === 'company_main_info'}
                  >
                    <Field
                      component={Select}
                      name="company.businessEntity"
                      label="Форма"
                      size="small"
                      value={company.businessEntity}
                    >
                      {Object.values(CompanyFormEnum).map((item) => (
                        <MenuItem key={item} value={item}>{item}</MenuItem>
                      ))}
                    </Field>
                  </EditableField>
                  <EditableField
                    legend="Тип"
                    value={getLocalizationCompanyTypePlaceholders(company.type)}
                    isEditMode={editField === 'company_main_info'}
                  >
                    <FormGroup row>
                      {Object.values(CompanyTypeEnum).map((type, index) => {
                        return (
                          <Field
                            key={type}
                            component={CheckboxWithLabel}
                            type="checkbox"
                            checked={company.type.includes(type)}
                            name="company.type"
                            Label={getLocalizationCompanyTypeLabel(type)}
                            value={type}
                          />
                        )
                      })}
                    </FormGroup>

                  </EditableField>

                  <Separator title="Контактные данные" withSeparator>
                    <EditButton
                      onClick={handleEdit}
                      editField={editField}
                      toggleFieldName='contacts'
                    />
                  </Separator>

                  <EditableField
                    legend="ФИО"
                    value={`${contacts.firstname} ${contacts.lastname} ${contacts.patronymic}`}
                    isEditMode={editField === 'contacts'}
                  >
                    <div style={{ width: '100%', display: 'flex', gap: '10px'}}>
                      <Field
                        component={TextField}
                        name="contacts.lastname"
                        label="Фамилия"
                        variant="outlined"
                        autoFocus
                        fullWidth
                      />
                      <Field
                        component={TextField}
                        name="contacts.firstname"
                        label="Имя"
                        variant="outlined"
                        fullWidth
                      />
                      <Field
                        component={TextField}
                        name="contacts.patronymic"
                        label="Отчество"
                        variant="outlined"
                        fullWidth
                      />
                    </div>
                  </EditableField>
                  <EditableField
                    legend="Телефон"
                    value={getFormattedPhoneNumber(contacts.phone)}
                    isEditMode={editField === 'contacts'}
                  >
                    <Field
                      component={TextField}
                      name="contacts.phone"
                      label="Телефон"
                      variant="outlined"
                      fullWidth
                    />
                  </EditableField>
                  <EditableField
                    legend="Эл. почта"
                    value={contacts.email}
                    isEditMode={editField === 'contacts'}
                  >
                    <Field
                      component={TextField}
                      type="email"
                      name="contacts.email"
                      label="Эл. почта"
                      variant="outlined"
                      fullWidth
                    />
                  </EditableField>

                  <Separator title="Приложенные фото" withSeparator />
                  <FieldArray name="company.photos">
                    {({remove }) => (
                      <Photos>
                        {company.photos.map((item: PhotoType, index: number) => {
                          return (
                            <Photo
                              key={item.name}
                              filepath={item.filepath}
                              name={item.name}
                              onRemove={() => handleDeletePhoto(remove, index, item.name)}
                            />
                          )
                        })}
                      </Photos>
                    )}
                  </FieldArray>

                  <Button variant="outlined" startIcon={<img src={Add} alt=""/>} fullWidth
                  >
                    ДОБАВИТЬ ИЗОБРАЖЕНИЕ
                    <input
                      type="file"
                      style={{
                        position: 'absolute',
                        left: '0',
                        top: '0',
                        width: '100%',
                        height: '40px',
                        opacity: '0',
                        cursor: 'pointer'
                      }}
                      name="myImage"
                      onChange={(event) => {
                        if (event.target.files && event.target.files[0]) {
                          console.log(event.target.files[0]);
                          setUploadingImage(event.target.files[0]);
                          if (id) {
                            addPhoto(id, uploadingImage);
                          }
                        }
                      }}
                    />
                  </Button>

                  {dirty && (
                    <>
                      <Separator withSeparator />
                      <Button variant="contained" type="submit">Сохранить</Button>
                    </>
                  )}
                </Form>
              )}
            }
          </Formik>
        </Content>
      </main>

      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <DialogTitle>
            Удалить карточку
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Отправить карточку организации в архив?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="text" color="inherit" size="large" onClick={handleCloseModal}>Отмена</Button>
            <Button variant="text" size="large" onClick={handleDeleteCompany}>Удалить</Button>
          </DialogActions>
        </>
      </Dialog>
    </>
  )
}

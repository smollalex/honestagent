import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Org } from '../../assets/icons';
import { Sidebar } from '../layouts/Sidebar';
import { CompanyDetails } from './CompanyContainer';
import { CompaniesList } from './CompaniesList';

export const Companies = () => {

  const menu = [
    {
      title: 'Организации',
      icon: Org,
      to: '/companies'
    },
    {
      title: 'События',
      icon: Org,
      to: '/events'
    }
  ]

  return (
    <>
      <Sidebar title="Честный агент" subtitle="Менедреж процесса" menu={menu} />
      <Routes>
        <Route index element={<CompaniesList />} />
        <Route path=":id" element={<CompanyDetails />} />
      </Routes>
    </>
  )
}

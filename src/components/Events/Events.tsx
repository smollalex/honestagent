import React, {useEffect} from 'react';
import { Wrapper } from '../layouts/common/styled';
import { Org } from '../../assets/icons';
import { Sidebar } from '../layouts/Sidebar';

export const Events = () => {

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
    <Wrapper>
      <Sidebar title="Events" subtitle="some text" menu={menu} />
    </Wrapper>
  )
}

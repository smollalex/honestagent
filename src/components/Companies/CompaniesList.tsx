import React, {useEffect} from 'react';
import { Header, Content } from '../layouts/common/styled';
import { Link } from 'react-router-dom';

export const CompaniesList = () => {
  return (
    <main>
      <Header>
        Организации
      </Header>
      <Content>
        <ul>
          <li><Link to="/companies/12">12</Link></li>
        </ul>
      </Content>
    </main>
  )
}

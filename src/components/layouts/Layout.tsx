import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper, Footer } from './common/styled';
import { Nav } from './Nav';

export const Layout = () => {
  return (
    <>
      <Wrapper>
        <Nav />
        <Outlet />
      </Wrapper>
      <Footer>
        © 1992 - 2020 Честный Агент © Все права защищены. <br/> 8 (495) 150-21-12
      </Footer>
    </>
  )
}

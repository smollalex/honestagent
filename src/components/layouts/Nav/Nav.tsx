import React from 'react';
import { Wrapper, Bottom, Link } from './styled';
import { Home, Market, Search, Settings, Chat, Exit } from '../../../assets/icons';

export const Nav = () => {
  return (
    <Wrapper>
      <Link to='/'><img src={Home} alt="" /></Link>
      <Link to='companies'><img src={Market} alt=""/></Link>

      <Link to='search'><img src={Search} alt=""/></Link>
      <Bottom>
        <Link to='settings'><img src={Settings} alt=""/></Link>
        <Link to='chat'><img src={Chat} alt=""/></Link>
        <Link to='exit'><img src={Exit} alt=""/></Link>
      </Bottom>
    </Wrapper>
  )
}

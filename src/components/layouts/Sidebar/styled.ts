import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  min-width: 224px;
  height: 100%;
  background: linear-gradient(90deg, #F7F7F7 82%, rgb(52 41 41 / 7%) 100%);
`;

export const Title = styled.div`
  margin-left: 40px;
  margin-top: 20px;
  font: 16px/25px 'Proxima Nova Bold';
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: #3B3B3B;
`;

export const Subtitle = styled.div`
  margin-left: 40px;
  margin-bottom: 20px;
  font: 12px/19px 'Proxima Nova Regular';
  text-transform: uppercase;
  letter-spacing: 0.2px;
  color: #3B3B3B;
`;

export const Link = styled(NavLink)`
  height: 44px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  transition: .3s;
  font: 16px/20px 'Proxima Nova Regular';
  text-decoration: none;
  
  img {
    margin-right: 10px;
  }
  
  &[aria-current="page"], &:hover, &:focus {
    background-color: #eeeeee;
    color: #82B284;
  }
`;

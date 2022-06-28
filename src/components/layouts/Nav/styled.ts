import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  background-color: #82B284;
  width: 48px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Link = styled(NavLink)`
  width: 48px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s;
  
  &[aria-current="page"], &:hover, &:focus {
    background-color: #A4C7A5;
  }
`

export const Bottom = styled.div`
  margin-top: auto;
`;

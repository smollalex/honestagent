import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: calc(100vh - 60px);
`;

export const Header = styled.div`
  position: static;
  display: flex;
  align-items: center;
  height: 72px;
  padding: 0 40px;
  color: #82B284;
  border-bottom: 1px solid #E5E5E5;
  font: 16px/20px "Proxima Nova Semibold";
  text-transform: uppercase;
`;

export const Content = styled.div`
  height: calc(100% - 113px);
  padding: 20px 40px;
  overflow: auto;
  position: relative;
`;

export const Actions = styled.div`
  margin-left: auto;
`;

export const Back = styled(Link)`
  display: flex;
  align-items: center;
  color: #82B284;
  font: 16px/20px "Proxima Nova Semibold";
  text-decoration: none;
  text-transform: uppercase;
  
  img {
    margin-right: 20px 
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  justify-content: center;
  text-align: center;
  color: #B9B9B9;
  font: 12px/1.5 "Proxima Nova Regular";
`;

export const Section = styled.div<{ withSeparator: boolean | undefined }>`
  display: flex;
  align-items: center;
  margin: 20px 0 10px;
  font: 16px/20px 'Proxima Nova Light';
  color: #3B3B3B;
  text-transform: uppercase;
  
  
  ${({ withSeparator }) => withSeparator === true ? `
    border-top: 1px solid #E5E5E5;
    padding-top: 20px;
  ` : ``}
`;

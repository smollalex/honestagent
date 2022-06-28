import styled from 'styled-components';

export const CompanyTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const CompanyTitle = styled.div`
  font: 20px/24px 'Proxima Nova Regular';
  color: #222222;
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  font: 16px/20px 'Proxima Nova Light';
  color: #3B3B3B;
  margin-bottom: 8px;
`;

export const Photos = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

export const PhotoWrapper = styled.div`
  margin-right: 24px;
`;

export const PhotoImg = styled.div`
  width: 160px;
  height: 160px;
  overflow: hidden;
  border-radius: 2px;
  margin-bottom: 8px;
  position: relative;
`;

export const PhotoTitle = styled.div`
  font: 12px/16px 'Proxima Nova Regular';
  color: #3B3B3B;
  margin-bottom: 4px;
`;

export const PhotoDate = styled.div`
  font: 12px/16px 'Proxima Nova Regular';
  color: #808080;
`;

export const PhotoRemove = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  
`;

import styled from 'styled-components';

export const Wrapper = styled.div<{ isEditMode: boolean }>`
  ${({ isEditMode }) => isEditMode && `
    min-width: calc(100% - 70px);
  `}
  height: ${({ isEditMode }) => isEditMode ? '52px' : '32px'};
  display: flex;
  align-items: center;
  font: 14px/20px "Proxima Nova Regular";
  color: #3B3B3B;
  
  > label {
    min-width: 150px;
    margin-right: 12px;
    font-size: inherit;
    font-family: "Proxima Nova Light";
    text-transform: none;
  }
`;

export const ValuesWrapper = styled.div`
 
`

import React from 'react';
import { InputLabel } from '@mui/material'

import { Wrapper, ValuesWrapper } from './styled';

interface EditableFieldProps {
  legend?: string
  value: string | React.ReactNode | HTMLElement
  isEditMode: boolean
  children: any
}

export const EditableField: React.FC<EditableFieldProps> = (props) => {
  const {
    legend,
    value,
    isEditMode,
    children,
    ...rest
  } = props;

  return (
    <Wrapper isEditMode={isEditMode}>
      {legend && (<InputLabel>{legend}</InputLabel>)}
      {isEditMode ? (
        children
      ) : (
        <>
          {value}
        </>
      )}
    </Wrapper>
  )
};

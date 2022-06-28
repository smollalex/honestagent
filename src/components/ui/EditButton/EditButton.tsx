import React from 'react';
import { IconButton } from '@mui/material';
import { Edit } from '../../../assets/icons';

interface EditButtonProps {
  onClick: (field: string) => void
  editField: string
  toggleFieldName: string
}

export const EditButton: React.FC<EditButtonProps> = (props) => {
  const {
    onClick,
    editField,
    toggleFieldName
  } = props;

  const handleClick = () => {
    onClick(toggleFieldName);
  }

  return (
    <IconButton onClick={handleClick} key="save_button">
      <img src={Edit} alt="" />
    </IconButton>
  )
}

import React, { useMemo } from 'react';
import { Button as ButtonMui, ButtonProps } from '@mui/material';
import styled from 'styled-components';

const Text = styled.span`
  margin: auto;
`;

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    ...rest
  } = props;

  return (
    <ButtonMui
      {...rest}
    >
      <Text>
        {children}
      </Text>
    </ButtonMui>
  );
}

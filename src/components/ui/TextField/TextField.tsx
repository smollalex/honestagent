import React, { useMemo } from 'react';
import { TextField as FormikTextField, TextFieldProps } from 'formik-mui';

export const TextField: React.FC<TextFieldProps> = (props) => {
  const {
    ...rest
  } = props;

  return (
    <FormikTextField {...rest} size="small" />
  );
}

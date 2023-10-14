import * as React from 'react';
import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { IInputProps, Input } from 'components/atoms/Input';

export const InputField: FC<IInputProps> = ({ name, type, placeholder }) => {

  return <Controller
    render={({
      field,
      fieldState: { error },
    }) => {
      return (
        <Input
          hasError={Boolean(error?.message)}
          error={error?.message}
          type={type}
          placeholder={placeholder}
          {...field}
        />
      )
    }} name={name || ''} />;
};

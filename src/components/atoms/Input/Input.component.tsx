import React, { ChangeEvent, FC } from 'react';

import { Hint } from './Hint/Hint'

import * as Styles from './Input.styled';

export interface IInputProps extends React.HTMLProps<HTMLInputElement> {
  suffix?: string;
  elementSize?: 'small' | 'default';
  hasError?: boolean;
  error?: React.ReactNode;
  hint?: React.ReactNode;
  hasSuccess?: boolean;
  reference?: any;
  type?: string;
}

export const Input: FC<IInputProps> = ({
  suffix,
  elementSize,
  error,
  hint,
  hasError,
  hasSuccess,
  type,
  as: _as,
  ...props
}) => {
  return (
    <>
      <Styles.InputWrapper
        elementSize={elementSize}
        hasError={hasError}
        hasSuccess={hasSuccess}
      >
        <Styles.Input {...props} elementSize={elementSize} type={type} />
      </Styles.InputWrapper>
      {hint && <Hint>{hint}</Hint>}
      {error && <Hint>{error}</Hint>}
    </>
  );
};

export const SelectRef = React.forwardRef((props, ref) => {
  return <Input {...props} reference={ref} />;
});
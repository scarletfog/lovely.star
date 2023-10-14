import React, { ForwardRefRenderFunction } from 'react';

import { Hint } from '../Hint'

import * as Styles from './Input.styled';

export interface IInputProps extends React.HTMLProps<HTMLInputElement> {
  error?: React.ReactNode;
  hasError?: boolean;
  hasSuccess?: boolean;
}

export const Input: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = ({
  error,
  hasError,
  hasSuccess,
  ...props
}, ref) => {
  return (
    <>
      <Styles.InputWrapper
        $hasError={hasError}
        $hasSuccess={hasSuccess}
      >
        <Styles.Input {...props} ref={ref} />
      </Styles.InputWrapper>
      {error && <Hint>{error}</Hint>}
    </>
  );
};


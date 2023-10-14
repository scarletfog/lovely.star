import React, { FC } from 'react';

import { Hint } from '../Hint'

import * as Styles from './Input.styled';

export interface IInputProps extends React.HTMLProps<HTMLInputElement> {
  error?: React.ReactNode;
  hasError?: boolean;
  hasSuccess?: boolean;
}

export const Input: FC<IInputProps> = ({
  error,
  hasError,
  hasSuccess,
  ...props
}) => {
  return (
    <>
      <Styles.InputWrapper
        $hasError={hasError}
        $hasSuccess={hasSuccess}
      >
        <Styles.Input {...props} />
      </Styles.InputWrapper>
      {error && <Hint>{error}</Hint>}
    </>
  );
};

import styled, { css } from 'styled-components';

import { IInputProps } from './Input.component';

export const Input = styled.input<IInputProps>`
  padding: 0 10px;
  color: ${({ theme }) => theme.colors.softBlack};
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: none;
  border-radius: inherit;
  background: none;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.melon};
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.melon};
  }

  &::-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.melon};
  }
`;

export const InputWrapper = styled.div<
  Pick<IInputProps, 'elementSize' | 'hasError' | 'hasSuccess'>
>`
  position: relative;
  border: 2px solid ${({ theme }) => theme.colors.fluff};
  background: ${({ theme }) => theme.colors.snowBall};
  filter: drop-shadow(0px 0px 5px #C9B1FF);
  border-radius: 20px;
  width: 100%;
  height: 40px;

  &:focus-within {
    border: ${({ theme }) => `2px solid ${theme.colors.darkerWave}`};
  }

  ${({ theme, hasError, hasSuccess }) => {
    if (hasError) {
      return css`
        border: 1px solid ${theme.colors.incident} !important;
      `;
    } else if (hasSuccess) {
      return css`
        border: 1px solid ${theme.colors.teaGreen} !important;
      `;
    }
  }};

`;
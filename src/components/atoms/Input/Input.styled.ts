import styled, { css } from "styled-components";

import { IInputProps } from "./Input.component";

export const Input = styled.input<IInputProps>`
  padding: 0 10px;
  color: ${({ theme }) => theme.colors.darkerWave};
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: none;
  border-radius: inherit;
  background: none;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.violetDream};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.melon};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    opacity: 1;
  }

  &::-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.melon};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    opacity: 1;
  }
`;

export const InputWrapper = styled.div<{
  $hasError?: boolean;
  $hasSuccess?: boolean;
}>`
  position: relative;
  border: 2px solid ${({ theme }) => theme.colors.fluff};
  background: ${({ theme }) => theme.colors.snowBall};
  filter: drop-shadow(0px 0px 5px #c9b1ff);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  width: 100%;
  height: 40px;

  &:focus-within {
    border: ${({ theme }) => `2px solid ${theme.colors.darkerWave}`};
  }

  ${({ theme, $hasError, $hasSuccess }) => {
    if ($hasError) {
      return css`
        border: 1px solid ${theme.colors.incident} !important;
      `;
    }

    if ($hasSuccess) {
      return css`
        border: 1px solid ${theme.colors.teaGreen} !important;
      `;
    }
  }};
`;

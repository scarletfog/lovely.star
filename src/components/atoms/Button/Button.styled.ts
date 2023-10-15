import styled, { css } from "styled-components";

type ButtonProps = {
  disabled?: boolean;
};

export const Button = styled.button<ButtonProps>`
  width: 100%;
  height: 50px;
  color: ${({ theme }) => theme.colors.softBlack};
  background: ${({ theme }) => theme.colors.violetDream};
  border: 1px solid ${({ theme }) => theme.colors.violetDream};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.fontSize.bigBoy};
  text-transform: uppercase;

  &:hover {
    background: ${({ theme }) => theme.colors.blueWave};
    border: 1px solid ${({ theme }) => theme.colors.blueWave};
  }

  &:active {
    background: ${({ theme }) => theme.colors.blueWave};
    border: 1px solid ${({ theme }) => theme.colors.blueWave};
  }

  position: relative;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      & {
        cursor: not-allowed;
        opacity: 0.5;

        background: ${({ theme }) => theme.colors.violetDream};
      }
    `}
`;

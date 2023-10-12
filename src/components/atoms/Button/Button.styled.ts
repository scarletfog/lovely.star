import styled, { css } from 'styled-components';

type ButtonProps = {
  disabled?: boolean;
};

export const Button = styled.button<ButtonProps>`
  width: 100%;
  height: 50px;
  color: ${({ theme }) => theme.colors.softBlack};
  background: ${({ theme }) => theme.colors.violetDream};
  border: 1px solid ${({ theme }) => theme.colors.violetDream};
  border-radius: 20px;
  font-size: 1.5rem;
  text-transform: uppercase;

  &:hover {
    background: ${({ theme }) => theme.colors.blueWave};
  }

  &:active {
    background: ${({ theme }) => theme.colors.blueWave};
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
import styled from 'styled-components';

export const HintStyled = styled.span`
  display: block;
  margin: 6px 0 2px;
  color: ${({ theme }) => theme.colors.incident};
  font-size: ${({ theme }) => theme.fontSize.body};
`;
import styled from "styled-components";

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.darkerWave};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontSize.bigBoy};
`;

export const Action = styled.div`
  width: 200px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: ${({ theme }) => theme.spacing.lg};
  justify-content: space-between;
`;

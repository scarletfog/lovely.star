import styled from "styled-components";

export const FormRow = styled.div`
  display: flex;
  margin: ${({ theme }) => theme.spacing.s};
  flex-direction: column;
`;

export const FormWrapper = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const ContentWrapper = styled.div`
  background: rgba(253, 252, 249, 0.7);
  background-image: url("/assets/background.jpg");
  filter: drop-shadow(0px 0px 10px #4444dd);
  background-size: cover;
  display: flex;
  padding: 20px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  min-width: 20vw;
  height: 60vh;
  @media (max-width: 768px) {
    height: 70vh;
    min-width: 25vw;
  }
  display: flex;
  padding: 30px;
  flex-direction: column;
`;

export const InputsWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.snowBall};
  display: flex;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  width: 100%;
  height: 60%;
  gap: 5px;
  flex-direction: column;
  margin-top: auto;
  div:last-of-type {
    margin-top: auto;
  }
`;

export const Heading = styled.h2`
  font-family: Verdana;
  color: ${({ theme }) => theme.colors.darkerWave};
  font-size: 2rem;
`;

export const Unicorn = styled.img`
  width: 100px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const UnicornWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

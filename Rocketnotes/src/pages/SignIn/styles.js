
import styled from "styled-components";

import backgroundImg from '../../assets/SingIn.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;
export const Form = styled.form`  

  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1{
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > h2{
    font-size: 24px;
    margin: 48px;
  }

  > p{
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  >a{
    margin-top: 124px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: hsla(255, 11%, 15%, 0.8) URL(${backgroundImg}) no-repeat center center;
  background-size: cover;
  background-blend-mode: darken;
`

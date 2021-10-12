import styled from "styled-components/macro";

export const HeroTitle = styled.h1`
  font-weight: 900;
  font-size: 2.5rem;
  line-height: 111%;
  letter-spacing: -1px;
  color: #ffffff;

  span {
    color: #18e8a4;
  }

  @media screen and (min-width: 768px) {
    font-size: 3.5rem;
  }

  @media screen and (min-width: 1440px) {
    max-width: 430px;
  }
`;

export const TitleContainer = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

export const HeroText = styled.p`
  line-height: 155%;
  color: #ffffff;

  @media screen and (min-width: 1440px) {
    max-width: 576px;
    font-size: 1.5rem;
  }
`;

export const HeroContainer = styled.div`
  background-color: #020213;
`;

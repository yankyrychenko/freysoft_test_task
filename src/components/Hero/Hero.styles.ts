import styled from "styled-components/macro";

export const HeroContainer = styled.section`
  background-color: #020213;
  padding-top: 162px;
`;

export const TitleContainer = styled.div`
  margin-bottom: 42px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    margin-bottom: 100px;
  }
`;

export const HeroTitle = styled.h1`
  margin-bottom: 16px;

  font-weight: 900;
  font-size: 2.5rem;
  line-height: 111%;
  letter-spacing: -1px;
  color: #ffffff;

  span {
    color: #18e8a4;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 3.5rem;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 50px;
    margin-bottom: 0px;
    max-width: 430px;
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

export const Wave = styled.div`
  width: 100vw;
  overflow-x: hidden;
`;

export const WaveList = styled.ul`
  display: flex;
  width: 425.25em;

  @keyframes scrolling {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-1 * 378px * 4));
    }
  }
  animation: scrolling 12s linear infinite;

  li {
    padding: 0 20px 20px 0;
  }
`;

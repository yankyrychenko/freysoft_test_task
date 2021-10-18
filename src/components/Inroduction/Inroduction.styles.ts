import styled from "styled-components/macro";

export const HeroContainer = styled.section`
  background-color: #020213;
  padding: 162px 0 63px 0;

  @media screen and (min-width: 1440px) {
    padding-bottom: 194px;
  }
`;

export const TitleContainer = styled.div`
  margin-bottom: 42px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    margin-bottom: 100px;
  }
`;

export const IntroductionTitle = styled.h1`
  margin-bottom: 16px;

  font-weight: 900;
  font-size: 2.5rem;
  line-height: 1.1;
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

export const IntroductionText = styled.p`
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
  margin-bottom: 42px;

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

export const WaveList = styled.ul`
  display: flex;
  width: 100em;
  animation: scrolling 30s linear infinite;

  @media screen and (min-width: 768px) {
    width: 150em;
  }

  @media screen and (min-width: 1440px) {
    width: 425em;
    animation: scrolling 15s linear infinite;
  }

  &:nth-child(2) {
    animation-delay: 0.25s;
  }

  &:nth-child(3) {
    animation-delay: 0.5s;
  }

  li {
    padding: 0 6px 6px 0;

    @media screen and (min-width: 768px) {
      padding: 0 10px 10px 0;
    }

    @media screen and (min-width: 1440px) {
      padding: 0 20px 20px 0;
    }
  }

  @keyframes scrolling {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-1 * 378px * 4));
    }
  }
`;

export const StyledButton = styled.button`
  display: block;
  padding: 12px 16px;
  margin-left: auto;
  margin-right: auto;
  min-width: 172px;

  font-weight: 800;
  font-size: 0.81rem;
  line-height: 120%;
  border-radius: 10px;
  color: #020213;
  background: #18e8a4;
  box-shadow: 0px 32px 16px rgba(0, 0, 0, 0.09),
    0px 16px 8px rgba(0, 0, 0, 0.09), 0px 8px 4px rgba(0, 0, 0, 0.09),
    0px 4px 2px rgba(0, 0, 0, 0.09), 0px 2px 1px rgba(0, 0, 0, 0.09);

  @media screen and (min-width: 768px) {
    margin-left: 74px;
  }
`;

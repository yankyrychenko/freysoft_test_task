import styled from "styled-components/macro";

export const Title = styled.h2`
  font-weight: 900;
  font-size: 2rem;
  line-height: 90%;
  letter-spacing: -1px;
  color: #202523;

  @media screen and (max-width: 768px) {
    margin-bottom: 31px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 430px;
    font-size: 3.87rem;
  }
`;

export const Text = styled.p`
  line-height: 180%;
  color: #545460;

  @media screen and (max-width: 768px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 768px) {
    &:first-child {
      margin-right: 32px;
    }
  }

  @media screen and (min-width: 1440px) {
    max-width: 576px;
    font-size: 1.5rem;

    &:first-child {
      margin-right: 40px;
    }
  }
`;

export const TextContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 48px 20px;

  @media screen and (min-width: 768px) {
    padding: 80px 20px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    padding: 100px 90px;
  }

  @media screen and (min-width: 1920px) {
    padding: 100px 330px;
  }
`;
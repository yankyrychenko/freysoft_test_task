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

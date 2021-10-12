import styled from "styled-components/macro";

export const BaseContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 1440px) {
    padding-left: 90px;
    padding-right: 90px;
  }

  @media screen and (min-width: 1920px) {
    padding-left: 330px;
    padding-right: 330px;
  }
`;

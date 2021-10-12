import styled from "styled-components/macro";

export const StyledFotter = styled.footer`
  background-color: #001427;
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 27px 20px 32px 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 20px 24px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 90px;
    padding-right: 90px;
  }

  @media screen and (min-width: 1920px) {
    padding-left: 330px;
    padding-right: 330px;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-size: 0.87rem;
  line-height: 155%;
  color: #29323c;

  @media screen and (max-width: 768px) {
    margin-bottom: 7px;
  }
`;

export const LinksList = styled.ul`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-bottom: 21px;
  }

  li:not(:last-child) {
    margin-right: 16px;
  }

  a {
    text-decoration: none;
    font-size: 0.81rem;
    line-height: 155%;
    color: #a4afc1;

    @media screen and (min-width: 1440px) {
      font-size: 0.87rem;
    }
  }
`;

export const SocialMediaList = styled.ul`
  display: flex;
  justify-content: center;

  li:not(:last-child) {
    margin-right: 16px;
  }
`;

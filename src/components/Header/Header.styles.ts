import styled from "styled-components/macro";

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 999;
  padding: 50px 0;
  width: 100%;

  background-color: #020213;

  @media screen and (min-width: 1440px) {
    padding: 25px 0;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavigationList = styled.ul`
  display: flex;

  li {
    margin-right: 36px;
  }

  a {
    text-decoration: none;
    color: #ffffff;

    &:hover,
    &:active {
      color: #18e8a4;
    }
  }
`;

export const MenuContainer = styled.div`
  display: flex;
`;

export const ContactButton = styled.button`
  @media screen and (min-width: 1440px) {
    padding: 12px 16px;
    min-width: 156px;

    font-size: 1rem;
    line-height: 1.5;
    border-radius: 383px;
    border: 2px solid #18e8a4;
    color: #ffffff;
  }
`;

export const StyledContactIcon = styled.img`
  margin-right: 15px;
`;

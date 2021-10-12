import styled from "styled-components/macro";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;

  background-color: #020213;
`;

export const MenuContainer = styled.div`
  display: flex;
`;

export const StyledContactIcon = styled.img`
  margin-right: 15px;
`;

export const NavigationList = styled.ul`
  display: flex;

  li {
    margin-right: 36px;
  }

  a {
    text-decoration: none;
    color: #ffffff;
  }
`;

export const ContactButton = styled.button`
  @media screen and (min-width: 1440px) {
    padding: 16px;
    min-width: 156px;

    line-height: 1.5;
    border-radius: 383px;
    border: 2px solid #18e8a4;
    color: #ffffff;
  }
`;
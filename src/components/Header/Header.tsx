import { useBreakpoint } from "../../utilities/resize/useBreakpoint";
import Logo from "../../assets/images/logo.svg";
import ContactIcon from "../../assets/images/contact-icon.svg";
import MenuIcon from "../../assets/images/menu-icon.svg";
import { BaseContainer } from "../../core-ui/BaseContainer.styles";
import {
  StyledHeader,
  MenuContainer,
  StyledContactIcon,
  ContactButton,
  NavigationList,
  HeaderContainer,
} from "./Header.styles";

export const Header = () => {
  const tablet = useBreakpoint(1440);

  return (
    <StyledHeader>
      <BaseContainer>
        <HeaderContainer>
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>

          {!tablet && (
            <nav>
              <NavigationList>
                <li>
                  <a href="/">Company</a>
                </li>
                <li>
                  <a href="/">Services</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/">Career</a>
                </li>
              </NavigationList>
            </nav>
          )}

          <MenuContainer>
            <ContactButton>
              {tablet ? (
                <StyledContactIcon src={ContactIcon} alt="ContactIcon" />
              ) : (
                "Contact Us"
              )}
            </ContactButton>

            {tablet && <img src={MenuIcon} alt="MenuIcon" />}
          </MenuContainer>
        </HeaderContainer>
      </BaseContainer>
    </StyledHeader>
  );
};

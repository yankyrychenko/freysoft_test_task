import FacebookIcon from "../../assets/images/socialMedia/facebook-icon.svg";
import LinkedinIcon from "../../assets/images/socialMedia/linkedin-icon.svg";
import TwitterIcon from "../../assets/images/socialMedia/twitter-icon.svg";
import {
  StyledFotter,
  Container,
  Text,
  LinksList,
  SocialMediaList,
} from "./Footer.styles";

export const Footer = () => {
  return (
    <StyledFotter>
      <Container>
        <Text>© 2018-2021 FREYSOFT. All rights reserved</Text>

        <LinksList>
          <li>
            <a href="/">Terms of Use</a>
          </li>
          <li>
            <a href="/">Privacy policy</a>
          </li>
          <li>
            <a href="/">Site Map</a>
          </li>
        </LinksList>

        <SocialMediaList>
          <li>
            <a href="/">
              <img src={FacebookIcon} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={LinkedinIcon} alt="linkedin" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={TwitterIcon} alt="twitter" />
            </a>
          </li>
        </SocialMediaList>
      </Container>
    </StyledFotter>
  );
};

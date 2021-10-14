import { BaseContainer } from "../../core-ui/BaseContainer.styles";
import {
  Title,
  Text,
  TextContainer,
  AboutContainer,
  AboutSection,
} from "./About.style";

export const About = () => {
  return (
    <AboutSection>
      <BaseContainer>
        <AboutContainer>
          <Title>About the company</Title>
          <TextContainer>
            <Text>
              Founded in 2019, FreySoft is a global provider of full-cycle
              software development services with headquarters in Kyiv, Ukraine.
              Our objective is to work on innovative projects that matter and
              bring value with the most balanced “personal life” / “work” ratio
              for our team.
            </Text>
            <Text>
              The key areas of our activity include IT staff augmentation, web
              and mobile app development, MVP development for startups,
              integration & automatization, support & maintenance, legacy
              application transformation, UI/ UX product design, and AI-chatbots
              development.
            </Text>
          </TextContainer>
        </AboutContainer>
      </BaseContainer>
    </AboutSection>
  );
};

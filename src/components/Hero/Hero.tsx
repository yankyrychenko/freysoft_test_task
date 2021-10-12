import { BaseContainer } from "../../core-ui/BaseContainer.styles";
import {
  HeroText,
  HeroTitle,
  HeroContainer,
  TitleContainer,
} from "./Hero.styles";

export const Hero = () => {
  return (
    <HeroContainer>
      <BaseContainer>
        <TitleContainer>
          <HeroTitle>
            We’ve got the job for you<span>!</span>
          </HeroTitle>
          <HeroText>
            We offer experienced IT specialists to be involved in
            ground-breaking digital projects and IT novices to develop skills in
            our perspective workplace.
          </HeroText>
        </TitleContainer>
      </BaseContainer>
    </HeroContainer>
  );
};

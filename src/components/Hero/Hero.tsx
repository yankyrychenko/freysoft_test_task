import { BaseContainer } from "../../core-ui/BaseContainer.styles";
import {
  HeroText,
  HeroTitle,
  HeroContainer,
  TitleContainer,
  Wave,
  WaveList,
} from "./Hero.styles";
import { photosWaveData } from "../../data/photosWaveData";

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

      <Wave>
        <WaveList>
          {photosWaveData.map((el) => (
            <li key={el.id}>
              <div>See All Roles</div>
              <img src={el.src} alt={el.alt} />
            </li>
          ))}
          {photosWaveData.map((el) => (
            <li key={el.id}>
              <div>See All Roles</div>
              <img src={el.src} alt={el.alt} />
            </li>
          ))}
        </WaveList>
      </Wave>
    </HeroContainer>
  );
};

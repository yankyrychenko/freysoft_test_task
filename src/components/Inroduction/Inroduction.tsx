import { photosWaveData } from "../../data/photosWaveData";
import { useBreakpoint } from "../../utilities/resize/useBreakpoint";
import { BaseContainer } from "../../core-ui/BaseContainer.styles";
import {
  IntroductionText,
  IntroductionTitle,
  HeroContainer,
  TitleContainer,
  Wave,
  WaveList,
  StyledButton,
} from "./Inroduction.styles";

export const Inroduction = () => {
  const tablet = useBreakpoint(1440);

  return (
    <HeroContainer>
      <BaseContainer>
        <TitleContainer>
          <IntroductionTitle>
            We’ve got the job for you<span>!</span>
          </IntroductionTitle>

          <IntroductionText>
            We offer experienced IT specialists to be involved in
            ground-breaking digital projects and IT novices to develop skills in
            our perspective workplace.
          </IntroductionText>
        </TitleContainer>
      </BaseContainer>

      <Wave>
        <WaveList>
          {photosWaveData.map((el) => (
            <li key={el.id}>
              <img src={el.src} alt={el.alt} />
            </li>
          ))}
          {photosWaveData.map((el) => (
            <li key={el.id}>
              <img src={el.src} alt={el.alt} />
            </li>
          ))}
        </WaveList>
        <WaveList>
          {photosWaveData.map((el) => (
            <li key={el.id}>
              <img src={el.src} alt={el.alt} />
            </li>
          ))}
          {photosWaveData.map((el) => (
            <li key={el.id}>
              <img src={el.src} alt={el.alt} />
            </li>
          ))}
        </WaveList>
        <WaveList>
          {photosWaveData.map((el) => (
            <li key={el.id}>
              <img src={el.src} alt={el.alt} />
            </li>
          ))}
          {photosWaveData.map((el) => (
            <li key={el.id}>
              <img src={el.src} alt={el.alt} />
            </li>
          ))}
        </WaveList>
      </Wave>

      {tablet && <StyledButton>See All Roles</StyledButton>}
    </HeroContainer>
  );
};

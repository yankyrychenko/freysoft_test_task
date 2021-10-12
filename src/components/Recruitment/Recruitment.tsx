import {
  RecruitmentSection,
  Title,
  Text,
  SliderSubTitle,
  SliderTitle,
  SliderText,
  Slider,
  SliderItem,
  TextContainer,
  TitleContainer,
} from "./Recruitment.styles";
import { BaseContainer } from "../../core-ui/BaseContainer.styles";

export const Recruitment = () => {
  return (
    <RecruitmentSection>
      <BaseContainer>
        <TitleContainer>
          <Title>FreySoft Recruitment process</Title>

          <TextContainer>
            <Text>
              From the start, you will feel the responsive and effective process
              of recruiting. The main is bureaucracy-free environment inside the
              company.
            </Text>
            <Text>
              Identifying the right talent, attracting them, and motivating them
              to apply is what we strive for in our recruitment process. We have
              two key phases of hiring the candidate. After, you get either
              feedback or an offer.
            </Text>
          </TextContainer>
        </TitleContainer>

        <Slider>
          <SliderItem>
            <SliderSubTitle>Stage number 1</SliderSubTitle>
            <SliderTitle>Interview with an HR manager</SliderTitle>
            <SliderText>
              We arrange the phone or video interview at your convenient time.
              Duration is on average 30-40 minutes. At this phase we are getting
              to know each other better, determining if the requisite
              qualifications fill the position and the candidate aligning with
              an organization’s culture and values.
            </SliderText>
          </SliderItem>

          <SliderItem>
            <SliderSubTitle>Stage number 2</SliderSubTitle>
            <SliderTitle>Technical examination</SliderTitle>
            <SliderText>
              A tech interview can take about an hour. The date and time of the
              meeting will be agreed in advance for your convenience. This phase
              is a great opportunity for you to know about the stack and get
              acquainted with the lead or the team you will be working with. You
              are welcomed to ask any questions you may have about the skills
              and technologies implemented in the project.
            </SliderText>
          </SliderItem>
        </Slider>
      </BaseContainer>
    </RecruitmentSection>
  );
};

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import { useBreakpoint } from "../../utilities/resize/useBreakpoint";
import StepsFlowImage from "../../assets/images/steps-flow.svg";
import { BaseContainer } from "../../core-ui/BaseContainer.styles";
import {
  RecruitmentSection,
  Title,
  Text,
  SliderSubTitle,
  SliderTitle,
  SliderText,
  TextContainer,
  TitleContainer,
  SwiperContainer,
  StepsFlow,
  BackgoroundText,
  SliderTextWrap,
} from "./Recruitment.styles";

export const Recruitment = () => {
  SwiperCore.use([Pagination]);
  const tablet = useBreakpoint(1440);

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

        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
              noSwiping: false,
              allowSlidePrev: false,
              allowSlideNext: false,
            },
          }}
        >
          <SwiperSlide>
            <SwiperContainer>
              <SliderSubTitle>Stage number 1</SliderSubTitle>
              <SliderTitle>Interview with an HR manager</SliderTitle>
              <SliderText>
                We arrange the phone or video interview at your convenient time.
                Duration is on average 30-40 minutes. At this phase we are
                getting to know each other better, determining if the requisite
                qualifications fill the position and the candidate aligning with
                an organization’s culture and values.
              </SliderText>
              <BackgoroundText>1</BackgoroundText>
            </SwiperContainer>
            {/*  <StepsFlow src={StepsFlowImage} /> */}
          </SwiperSlide>

          <SwiperSlide>
            <SwiperContainer>
              <SliderSubTitle>Stage number 2</SliderSubTitle>
              <SliderTitle>Technical examination</SliderTitle>
              <SliderTextWrap>
                <SliderText>
                  A tech interview can take about an hour. The date and time of
                  the meeting will be agreed in advance for your convenience.
                  This phase is a great opportunity for you to know about the
                  stack and get acquainted with the lead or the team you will be
                  working with. You are welcomed to ask any questions you may
                  have about the skills and technologies implemented in the
                  project.
                </SliderText>
                {!tablet && (
                  <SliderText>
                    If you are considering multiple vacancies for different
                    projects, we can arrange separate technical interviews that
                    will focus on the required skills for each individual
                    project.
                  </SliderText>
                )}
              </SliderTextWrap>
              <BackgoroundText>2</BackgoroundText>
            </SwiperContainer>
          </SwiperSlide>
        </Swiper>
      </BaseContainer>
    </RecruitmentSection>
  );
};

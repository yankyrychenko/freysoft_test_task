import styled from "styled-components/macro";

export const RecruitmentSection = styled.section`
  padding: 64px 0 48px 0;

  background: #d5d4d9;
  box-shadow: 0px 32px 16px rgba(0, 0, 0, 0.09),
    0px 16px 8px rgba(0, 0, 0, 0.09), 0px 8px 4px rgba(0, 0, 0, 0.09);

  @media screen and (min-width: 1440px) {
    padding: 100px 0 210px 0;
  }
`;

export const TitleContainer = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Title = styled.h2`
  margin-bottom: 28px;

  font-weight: 900;
  font-size: 32px;
  line-height: 1.1;
  letter-spacing: -1px;
  color: #202523;

  @media screen and (min-width: 1440px) {
    max-width: 400px;
    margin-right: 285px;
    font-size: 62px;
  }
`;

export const TextContainer = styled.div`
  margin-bottom: 55px;

  @media screen and (min-width: 768px) {
    display: flex;
  }

  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: #485563;

  &:not(:last-child) {
    margin-right: 52px;
  }

  @media screen and (min-width: 768px) {
    max-width: 350px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 612px;
    font-size: 1.5rem;
    line-height: 156%;
  }
`;

export const SwiperContainer = styled.div`
  position: relative;
  height: 450px;
  padding: 32px 25px;
  background: linear-gradient(0deg, #ffffff, #ffffff),
    linear-gradient(117.15deg, #1bd1fc 0%, #316dd1 100%);
  border-radius: 16px;

  @media screen and (min-width: 1440px) {
    height: 395px;
  }
`;

export const SliderSubTitle = styled.h3`
  margin-bottom: 16px;

  font-weight: 700;
  font-size: 14px;
  line-height: 1.1;
  text-transform: uppercase;
  color: #545460;
`;

export const SliderTitle = styled.h2`
  margin-bottom: 24px;

  font-weight: 800;
  font-size: 2rem;
  line-height: 110%;
  letter-spacing: -1px;
  color: #202523;

  @media screen and (min-width: 1440px) {
    max-width: 255px;
  }
`;

export const SliderTextWrap = styled.div`
  display: flex;
`;

export const SliderText = styled.p`
  position: relative;
  z-index: 1;
  font-size: 1rem;
  line-height: 25px;
  color: #596067;

  @media screen and (min-width: 1440px) {
    max-width: 300px;
    &:first-child {
      margin-right: 25px;
    }
  }
`;

export const StepsFlow = styled.img`
  left: 120px;
  position: absolute;
  bottom: 100px;
  z-index: 100;
`;

export const BackgoroundText = styled.p`
  position: absolute;
  bottom: 0;
  right: 80px;

  font-weight: 900;
  font-size: 16.25em;
  color: #efdcfb;
`;

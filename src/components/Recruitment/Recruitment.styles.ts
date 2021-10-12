import styled from "styled-components/macro";

export const RecruitmentSection = styled.div`
  padding: 64px 0 48px 0;

  background: #d5d4d9;
  box-shadow: 0px 32px 16px rgba(0, 0, 0, 0.09),
    0px 16px 8px rgba(0, 0, 0, 0.09), 0px 8px 4px rgba(0, 0, 0, 0.09);
`;

export const Title = styled.h2`
  margin-bottom: 28px;

  font-weight: 900;
  font-size: 32px;
  line-height: 110%;
  /* or 35px */

  letter-spacing: -1px;

  color: #202523;

  @media screen and (min-width: 1440px) {
    max-width: 400px;
    margin-right: 285px;
    font-size: 62px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 180%;
  /* or 29px */

  color: #485563;

  &:not(:last-child) {
    margin-right: 52px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 612px;
    font-size: 24px;
    line-height: 156%;
  }
`;

export const SliderContainer = styled.div`
  padding: 32px 25px;
  min-height: 512px;

  background: linear-gradient(0deg, #ffffff, #ffffff),
    linear-gradient(117.15deg, #1bd1fc 0%, #316dd1 100%);
  box-shadow: 0px 32px 16px rgba(0, 0, 0, 0.09),
    0px 16px 8px rgba(0, 0, 0, 0.09), 0px 8px 4px rgba(0, 0, 0, 0.09),
    0px 4px 2px rgba(0, 0, 0, 0.09), 0px 2px 1px rgba(0, 0, 0, 0.09);
  border-radius: 16px;
`;

export const SliderSubTitle = styled.h3`
  margin-bottom: 16px;

  font-weight: 700;
  font-size: 14px;
  line-height: 110%;
  /* or 15px */

  text-transform: uppercase;

  color: #545460;
`;

export const SliderTitle = styled.h2`
  margin-bottom: 24px;

  font-weight: 800;
  font-size: 32px;
  line-height: 110%;
  /* or 35px */

  letter-spacing: -1px;

  color: #202523;
`;

export const SliderText = styled.p`
  font-size: 16px;
  line-height: 25px;
  /* or 156% */

  color: #596067;
`;
export const Slider = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const SliderItem = styled.div`
  height: 514px;
  padding: 32px 25px;
  background: linear-gradient(0deg, #ffffff, #ffffff),
    linear-gradient(117.15deg, #1bd1fc 0%, #316dd1 100%);
  box-shadow: 0px 32px 16px rgba(0, 0, 0, 0.09),
    0px 16px 8px rgba(0, 0, 0, 0.09), 0px 8px 4px rgba(0, 0, 0, 0.09),
    0px 4px 2px rgba(0, 0, 0, 0.09), 0px 2px 1px rgba(0, 0, 0, 0.09);
  border-radius: 16px;

  @media screen and (min-width: 768px) {
    width: calc((100% / 2) - 10px);
    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  @media screen and (min-width: 1440px) {
    padding-top: 56px;
  }
`;

export const TextContainer = styled.div`
  margin-bottom: 55px;

  @media screen and (min-width: 768px) {
    display: flex;
  }

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const TitleContainer = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;

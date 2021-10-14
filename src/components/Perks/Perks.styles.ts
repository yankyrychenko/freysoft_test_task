import styled from "styled-components/macro";

export const PerksSection = styled.section`
  padding: 80px 0 42px 0;
  background: #fcf7f8;
`;

export const Title = styled.h2`
  margin-bottom: 66px;

  font-weight: 900;
  font-size: 32px;
  line-height: 110%;
  /* or 35px */
  letter-spacing: -1px;
  text-align: center;
  color: #202523;

  @media screen and (min-width: 768px) {
    margin-bottom: 46px;
    font-size: 48px;
  }

  @media screen and (min-width: 1440px) {
    text-align: center;
    font-size: 62px;
  }
`;

export const SwiperContainer = styled.div`
  min-height: 560px;
  padding: 32px 20px;
  background: linear-gradient(0deg, #ffffff, #ffffff),
    linear-gradient(117.15deg, #1bd1fc 0%, #316dd1 100%);
  border-radius: 16px;

  @media screen and (min-width: 1440px) {
    min-height: auto;

    width: 22.5em;
    background: transparent;
  }
`;

export const SliderText = styled.p`
  font-size: 16px;
  line-height: 25px;
  /* or 156% */

  color: #596067;
`;

export const SliderTitle = styled.h2`
  margin-bottom: 24px;

  font-weight: 800;
  font-size: 32px;
  line-height: 110%;
  /* or 35px */
  text-align: center;
  letter-spacing: -1px;

  color: #202523;
`;

export const CardsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const Image = styled.img`
  margin: 0 auto 0 auto;
  margin-bottom: 48px;
`;

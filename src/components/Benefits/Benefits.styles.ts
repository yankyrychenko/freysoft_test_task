import styled from "styled-components/macro";

export const BenefitsSection = styled.section`
  padding: 80px 0 48px 0;
  background: #aea9a8;
`;

export const Title = styled.h2`
  margin-bottom: 55px;

  font-weight: 900;
  font-size: 32px;
  line-height: 110%;
  /* or 35px */

  letter-spacing: -1px;

  color: #ffffff;

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 80px;
    max-width: 589px;
    font-size: 48px;
  }
`;

export const SwiperContainer = styled.div`
  height: 551px;
  padding: 34px 20px 40px 20px;

  background: linear-gradient(0deg, #ffffff, #ffffff),
    linear-gradient(117.15deg, #1bd1fc 0%, #316dd1 100%);
  border-radius: 16px;
`;

export const CardTitle = styled.h2`
  margin-bottom: 24px;

  text-align: center;
  font-weight: 800;
  font-size: 32px;
  line-height: 110%;
  /* or 35px */

  letter-spacing: -1px;

  color: #202523;
`;

export const CardText = styled.p`
  font-size: 16px;
  line-height: 25px;
  color: #596067;
`;

export const TextsList = styled.ul`
  li {
    display: flex;
    align-items: center;
  }

  li:not(:last-child) {
    border-bottom: 1px solid rgba(72, 85, 99, 0.2);
    margin-bottom: 15px;
    padding-bottom: 15px;
  }
`;

export const Image = styled.img`
  margin: 0 auto 34px auto;
`;

export const Icon = styled.img``;

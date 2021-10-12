import styled from "styled-components/macro";
import { Formik, Form, Field } from "formik";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 1440px) {
    padding-left: 90px;
    padding-right: 90px;
  }

  @media screen and (min-width: 1920px) {
    padding-left: 330px;
    padding-right: 330px;
  }
`;

export const Title = styled.h2`
  font-weight: 900;
  font-size: 2rem;
  line-height: 90%;
  letter-spacing: -1px;
  color: #202523;

  @media screen and (max-width: 768px) {
    margin-bottom: 31px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 430px;
    font-size: 3.87rem;
  }
`;

export const SubTitle = styled.h3`
  margin-bottom: 32px;

  font-weight: 400;
  line-height: 156%;
  color: #000000;
`;

export const StyledField = styled(Field)`
  width: 100%;
`;

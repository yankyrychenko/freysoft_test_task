import styled from "styled-components/macro";

export const CardContainer = styled.div`
  margin-bottom: 32px;
`;

export const List = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const VacanciesListCard = styled.li`
  padding: 32px 30px;
  box-sizing: border-box;

  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.09), 0px 6px 8px rgba(0, 0, 0, 0.09),
    0px 4px 4px rgba(0, 0, 0, 0.09), 0px 2px 2px rgba(0, 0, 0, 0.09),
    0px 1px 1px rgba(0, 0, 0, 0.09);
  border-radius: 10px;

  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  @media screen and (min-width: 768px) {
    width: calc((100% - 20px) / 2);

    :nth-child(-n + 2) {
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 32px) / 3);

    :nth-child(-n + 3) {
      margin-bottom: 24px;
    }
  }
`;

export const VacanciesListTitle = styled.h3`
  margin-bottom: 24px;

  font-weight: 900;
  font-size: 2rem;
  line-height: 110%;
  letter-spacing: -1px;
  color: #333333;
`;

export const CardTitle = styled.h4`
  max-width: 220px;
  margin-bottom: 16px;

  font-weight: 800;
  font-size: 24px;
  line-height: 110%;
  letter-spacing: -1px;
  color: #545460;
`;

export const CardText = styled.p`
  font-size: 16px;
  line-height: 110%;
  color: #545460;
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin: 0 auto 0 auto;
  padding: 27px 16px;
  width: 100%;

  font-weight: 800;
  font-size: 16px;
  line-height: 120%;
  color: #545460;
  background: #18e8a4;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.09), 0px 6px 8px rgba(0, 0, 0, 0.09),
    0px 4px 4px rgba(0, 0, 0, 0.09), 0px 2px 2px rgba(0, 0, 0, 0.09),
    0px 1px 1px rgba(0, 0, 0, 0.09);
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    width: 280px;
  }
`;

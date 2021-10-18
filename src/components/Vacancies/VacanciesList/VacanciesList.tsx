import { BaseContainer } from "../../../core-ui/BaseContainer.styles";
import {
  designData,
  developmentData,
  humanResourcesData,
} from "../../../data/vacanciesData";
import {
  VacanciesListTitle,
  CardContainer,
  List,
  VacanciesListCard,
  CardTitle,
  CardText,
  LoadMoreButton,
} from "./VacanciesList.styles";

export const VacanciesList = () => {
  return (
    <div>
      <BaseContainer>
        <CardContainer>
          <VacanciesListTitle>Development</VacanciesListTitle>
          <List>
            {developmentData.map((el) => (
              <VacanciesListCard>
                <CardTitle>{el.role}</CardTitle>
                <CardText>{el.location}</CardText>
              </VacanciesListCard>
            ))}
          </List>
        </CardContainer>

        <CardContainer>
          <VacanciesListTitle>Design</VacanciesListTitle>
          <List>
            {designData.map((el) => (
              <VacanciesListCard>
                <CardTitle>{el.role}</CardTitle>
                <CardText>{el.location}</CardText>
              </VacanciesListCard>
            ))}
          </List>
        </CardContainer>

        <CardContainer>
          <VacanciesListTitle>Human Resources</VacanciesListTitle>
          <List>
            {humanResourcesData.map((el) => (
              <VacanciesListCard>
                <CardTitle>{el.role}</CardTitle>
                <CardText>{el.location}</CardText>
              </VacanciesListCard>
            ))}
          </List>
        </CardContainer>

        <LoadMoreButton>Load More</LoadMoreButton>
      </BaseContainer>
    </div>
  );
};

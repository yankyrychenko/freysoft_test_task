import { SearchFormContainer, Title } from "./VacanciesSearchForm.styles";
import { BaseContainer } from "../../../core-ui/BaseContainer.styles";

export const VacanciesSearchForm = () => {
  return (
    <SearchFormContainer>
      <BaseContainer>
        <Title>Open vacancies</Title>

        <form>
          <label>
            <input />
          </label>

          <label>
            <input />
          </label>

          <label>
            <input />
          </label>
        </form>
      </BaseContainer>
    </SearchFormContainer>
  );
};

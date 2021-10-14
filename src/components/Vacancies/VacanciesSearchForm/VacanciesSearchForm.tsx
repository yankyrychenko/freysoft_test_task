import { SearchFormContainer, Title } from "./VacanciesSearchForm.styles";
import { BaseContainer } from "../../../core-ui/BaseContainer.styles";

export const VacanciesSearchForm = () => {
  return (
    <SearchFormContainer>
      <BaseContainer>
        <Title>Open vacancies</Title>
        <form>
          <div>
            <input type="text" name="keyword" id="keyword" placeholder=" " />
            <label htmlFor="keyword">Use keyword: Java, Figma, manager</label>
          </div>
        </form>
      </BaseContainer>
    </SearchFormContainer>
  );
};

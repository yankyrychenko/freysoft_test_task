import { Formik, Form, Field } from "formik";
import { Title, Container, SubTitle } from "./ApplicationForm.styles";

interface MyFormValues {
  firstName: string;
}

export const ApplicationForm = () => {
  const initialValues: MyFormValues = { firstName: "" };

  return (
    <Container>
      <Title>Not found the open vacancy now?</Title>
      <SubTitle>Apply anyway as we have new openings every week! </SubTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={() => console.log("hello")}
        render={({
          touched,
          errors,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form>
            <Field
              className="form-control"
              type="text"
              placeholder="Username"
              name="username"
            />

            <input id="fullName" name="fullName" placeholder="Full name *" />

            <input id="email" name="email" placeholder="Email *" />

            <input id="message" name="message" placeholder="Message *" />

            <label>
              <input id="file" name="file" type="file" />
              Upload CV
            </label>
            <button type="submit">Submit</button>
          </Form>
        )}
      ></Formik>
    </Container>
  );
};

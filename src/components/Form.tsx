import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as yup from "yup";
import { colors, fonts, screens } from "../utils/theme";
import Button from "./Button";

interface MyFormValues {
  subject: string;
  message: string;
}

const initialValues: MyFormValues = {
  subject: "",
  message: "",
};

const validationSchema = yup.object<MyFormValues>({
  subject: yup
    .string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  message: yup.string().required("Required"),
});

const ContactForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container>
      <Title>Say Hello</Title>
      <Form action="submit" onSubmit={formik.handleSubmit}>
        <Input
          placeholder="Subject"
          id="subject"
          type="text"
          name="subject"
          onChange={formik.handleChange("subject")}
          value={formik.values.subject}
        />
        {formik.touched.subject && formik.errors.subject && (
          <Error>{formik.errors.subject}</Error>
        )}

        <TextArea
          placeholder="Message..."
          id="message"
          name="message"
          onChange={formik.handleChange("message")}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message && (
          <Error>{formik.errors.message}</Error>
        )}
        <ButtonContainer>
          <Button class="selected-button-form" label="Attachment" />
          <SubmitButton type="submit">Send</SubmitButton>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default ContactForm;

const Container = styled.div`
  margin-bottom: 8.37vw;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  align-self: flex-start;
  color: ${colors.white};
  text-align: center;
  font-family: ${fonts.libre.regular};
  font-size: 0.83rem;

  @media only screen and (min-width: ${screens.sm}) {
    font-size: 1rem;
  }

  @media only screen and (min-width: ${screens.lg}) {
    font-size: 1.25rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

const Input = styled.input`
  width: 90%;
  padding: 15px;
  border-radius: 15px;
  border: none;
  font-family: ${fonts.montserrat.regular};
  font-size: 0.75rem;
  color: ${colors.black};

  @media only screen and (min-width: ${screens.sm}) {
    width: 41.31vw;
    font-size: 0.75rem;
  }

  @media only screen and (min-width: ${screens.lg}) {
    width: 45.42vw;
    padding: 1.04vw 2.36vw;
    font-size: 1rem;
  }
`;

const TextArea = styled.textarea`
  width: 90%;
  min-height: 31.66vw;
  margin: 12px 0;
  padding: 15px;
  border-radius: 15px;
  border: none;
  font-family: ${fonts.montserrat.regular};
  font-size: 0.75rem;
  color: ${colors.black};

  @media only screen and (min-width: ${screens.sm}) {
    width: 41.31vw;
    min-height: 11.66vw;
    font-size: 0.75rem;
  }

  @media only screen and (min-width: ${screens.lg}) {
    width: 45.42vw;
    min-height: 11.66vw;
    margin-top: 0.83vw;
    padding: 1.04vw 2.36vw;
    font-size: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-self: flex-end;
`;

const SubmitButton = styled.button`
  width: 158.13px;
  height: 39.2px;
  margin: 2.43vw 0 0 0.69vw;
  padding: 0;
  border-radius: 50px;
  color: ${colors.white};
  border: solid 2px ${colors.accent};
  background-color: ${colors.accent};
  font-family: ${fonts.montserrat.regular};
  font-size: 0.75rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${colors.secondary};
    border: solid 2px ${colors.secondary};
  }

  @media only screen and (min-width: ${screens.sm}) {
    width: 170px;
    height: 45.25px;
    margin: 2.11vw 0 0 1vw;
    border-radius: 50px;
  }

  @media only screen and (min-width: ${screens.lg}) {
    width: 236.22px;
    height: 69px;
    margin-top: 3.11vw;
    border-radius: 3.47vw;
    font-size: 1rem;
  }
`;

const Error = styled.div`
  margin-top: 0.69vw;
  color: ${colors.accent};
  font-family: ${fonts.montserrat.regular};
  font-size: 1rem;
`;

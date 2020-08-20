import React from "react";
import styled from "styled-components";
import ContactForm from "../components/Form";
import { screens } from "../utils/theme";
import { PottedPlant } from "../images/PottedPlant";
import { SmallPottedPlant } from "../images/SmallPottedPlant";

const ContactSection = () => {
  return (
    <Container id="contact-section">
      <Plants>
        <PottedPlant />
        <SmallPottedPlant style={{ marginLeft: "-1.66vw" }} />
      </Plants>
      <ContactForm />
    </Container>
  );
};

export default ContactSection;

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: flex-end;

  @media only screen and (min-width: ${screens.sm}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Plants = styled.div`
  margin-right: 3.71vw;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  align-self: flex-start;

  @media only screen and (min-width: ${screens.sm}) {
    align-self: flex-end;
  }
`;

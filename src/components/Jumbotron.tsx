import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { fonts, colors, screens } from "../utils/theme";

export default function Jumbotron() {
  return (
    <Container>
      <Title>Hi! I'm Charolyn.</Title>

      <Subtitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Subtitle>

      <ButtonContainer>
        <Button class="selected-button" label="View my work" />
        <Button class="selected-button" label="Get in touch" />
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media only screen and (min-width: ${screens.sm}) {
    margin-bottom: 110px;
  }

  @media only screen and (min-width: ${screens.md}) {
    margin-bottom: 220px;
    margin-top: 40px;
  }

  @media only screen and (min-width: ${screens.lg}) {
    height: 100vh;
    margin-bottom: 0;
  }
`;

const Title = styled.h1`
  margin: 12.5vw 0 2.15vw 0;
  color: ${colors.white};
  font-family: ${fonts.libre.bold};
  font-size: 0.86rem;

  @media only screen and (min-width: ${screens.sm}) {
    margin: 8.99vw 0 2.15vw 0;
    font-size: 1.3rem;
  }

  @media only screen and (min-width: ${screens.lg}) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  max-width: 290px;
  margin: 0;
  margin-bottom: 1rem;
  font-size: 0.75rem;
  font-family: ${fonts.montserrat.medium};
  color: ${colors.white};

  @media only screen and (min-width: ${screens.sm}) {
    min-width: 46.88vw;
  }

  @media only screen and (min-width: ${screens.md}) {
    font-size: 1rem;
  }

  @media only screen and (min-width: ${screens.lg}) {
    font-size: 1.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media only screen and (min-width: ${screens.sm}) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  @media only screen and (min-width: ${screens.md}) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;

import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { fonts, colors, screens } from "../utils/theme";
import { Github } from "../images/Github";
import { Dribbble } from "../images/Dribbble";
import { Linkedin } from "../images/Linkedin";

const Header = () => (
  <Container>
    <PagesContainer>
      <Pages>
        <a href="#about-section">About</a>
      </Pages>
      <Pages>
        <a href="#work-section">Work</a>
      </Pages>
      <Pages>
        <a href="#contact-section">Say Hello</a>
      </Pages>
    </PagesContainer>

    <SocialMediaContainer>
      <Link
        to="https://github.com/charolynmendoza"
        className="selected"
        // style={{ marginRight: "4.16vw" }}
      >
        <Github />
      </Link>
      <Link
        to="https://dribbble.com/charolynmendoza"
        className="selected"
        // style={{ marginRight: "4.16vw" }}
      >
        <Dribbble />
      </Link>
      <Link
        to="https://www.linkedin.com/in/charolynmendoza/"
        className="selected"
      >
        <Linkedin />
      </Link>
    </SocialMediaContainer>
  </Container>
);

export default Header;

const Container = styled.header`
  width: 100%;
  margin-top: 4.86vw;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: ${screens.sm}) {
    justify-content: space-between;
    align-items: center;
    flex-flow: row nowrap;
  }

  @media only screen and (min-width: ${screens.lg}) {
    margin-top: 2.43vw;
    align-items: center;
  }
`;

const PagesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media only screen and (min-width: ${screens.sm}) {
    width: 50%;
    margin-right: 26vw;
    justify-content: space-between;
  }
`;

const Pages = styled.h1`
  font-family: ${fonts.libre.bold};
  font-size: 0.75rem;
  color: ${colors.white};
  text-align: center;

  a {
    color: ${colors.white};
    text-decoration: none;
  }

  a:hover {
    color: ${colors.accent};
  }

  @media only screen and (min-width: ${screens.lg}) {
    font-size: 1rem;
  }
`;

const SocialMediaContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media only screen and (min-width: ${screens.sm}) {
    width: 40%;
    justify-content: space-between;
  }
`;

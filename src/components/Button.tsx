import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fonts, colors, screens } from "../utils/theme";

interface Props {
  variant?: "filled" | "unfilled";
  class?: string;
  label: string;
  style?: any;
}

const Button = (props: Props) => (
  <Container className={props.class} style={props.style}>
    <Label>{props.label}</Label>
  </Container>
);

export default Button;

const Container = styled.div`
  width: 158.13px;
  height: 39.2px;
  margin: 2.11vw 2.55vw 0 0;
  border-radius: 50px;
  border: 2px solid ${colors.white};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: ${screens.sm}) {
    width: 170px;
    height: 45.25px;
    margin: 0;
    margin-top: 2.11vw;
    border-radius: 50px;
  }

  @media only screen and (min-width: ${screens.md}) {
    margin-right: 1rem;
  }

  @media only screen and (min-width: ${screens.lg}) {
    width: 236.22px;
    height: 65px;
    margin-top: 3.11vw;
    border-radius: 3.47vw;
  }
`;

const Label = styled.p`
  margin: 0;
  font-family: ${fonts.montserrat.medium};
  font-size: 0.75rem;
  color: ${colors.white};

  @media only screen and (min-width: ${screens.sm}) {
    font-size: 0.75rem;
  }

  @media only screen and (min-width: ${screens.lg}) {
    font-size: 1rem;
  }
`;

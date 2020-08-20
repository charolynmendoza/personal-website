import React from "react";
import styled from "styled-components";
import { colors, fonts, screens } from "../utils/theme";
// import recipes from "../images/recipes.png";
// import home from "../images/home-management.png";
// import doctual from "../images/doctual.png";

const WorkSection = () => {
  return (
    <Container id="work-section">
      <Title>Work</Title>
      <Content>
        <WorkItem
          style={
            {
              // backgroundImage: `url(${recipes})`,
              // backgroundPosition: "center bottom 55%",
            }
          }
        >
          Comming Soon
        </WorkItem>
        <WorkItem
          style={
            {
              // backgroundImage: `url(${home})`,
              // backgroundPosition: "center 10%",
            }
          }
        >
          Comming Soon
        </WorkItem>
        <WorkItem
          style={
            {
              // backgroundImage: `url(${doctual})`,
            }
          }
        >
          Comming Soon
        </WorkItem>
      </Content>
    </Container>
  );
};

export default WorkSection;

const Container = styled.div`
  margin-bottom: 5.41vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  margin-top: 40px;
  font-family: ${fonts.libre.regular};
  font-size: 0.83rem;
  line-height: 37px;
  color: ${colors.white};

  @media only screen and (min-width: ${screens.sm}) {
    font-size: 1rem;
  }

  @media only screen and (min-width: ${screens.lg}) {
    margin: 7.01vw 0 3.77vw 0;
    font-size: 1.5rem;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media only screen and (min-width: ${screens.sm}) {
    flex-direction: row;
    align-items: center;
  }
`;

const WorkItem = styled.div`
  width: 221px;
  height: 170px;
  margin-bottom: 36px;
  font-size: 0.75rem;
  border-radius: 1.04vw;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(253, 255, 252, 0.9);
  color: ${colors.black};
  font-family: ${fonts.montserrat.semiBold};
  line-height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 1.5rem;

  @media only screen and (min-width: ${screens.sm}) {
    width: 22.83vw;
    height: 22.83vw;
    margin-bottom: 0;
    font-size: 1rem;
    font-family: ${fonts.montserrat.bold};
  }

  @media only screen and (min-width: ${screens.sm}) {
    font-size: 1.1rem;
  }
`;

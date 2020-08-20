import React from "react";
import styled from "styled-components";
import { fonts, colors, screens } from "../utils/theme";
import profile from "../images/profile-photo.png";

const AboutMeSection = () => {
  return (
    <Container id="about-section">
      {screen.width <= parseInt(screens.xs) ? (
        <AboutMeContainer>
          <AboutMeTitle>A little about me</AboutMeTitle>

          <Photo src={profile} />

          <AboutMeContent>
            <AboutMeDesc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum id
              sit ut habitant rhoncus purus eget enim feugiat.
            </AboutMeDesc>

            <AboutMeDesc>
              Vitae nunc, commodo risus lacus, quis ornare. Aliquam tortor metus
              adipiscing nullam sit purus turpis duis.
            </AboutMeDesc>

            <AboutMeDesc>
              Vitae nunc, commodo risus lacus, quis ornare. Aliquam tortor metus
              adipiscing nullam sit purus turpis duis.
            </AboutMeDesc>
          </AboutMeContent>
        </AboutMeContainer>
      ) : (
        <AboutMeContainer>
          <Photo src={profile} />

          <AboutMeContent>
            <AboutMeTitle>A little about me</AboutMeTitle>

            <AboutMeDesc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum id
              sit ut habitant rhoncus purus eget enim feugiat.
            </AboutMeDesc>

            <AboutMeDesc>
              Vitae nunc, commodo risus lacus, quis ornare. Aliquam tortor metus
              adipiscing nullam sit purus turpis duis.
            </AboutMeDesc>

            <AboutMeDesc>
              Vitae nunc, commodo risus lacus, quis ornare. Aliquam tortor metus
              adipiscing nullam sit purus turpis duis.
            </AboutMeDesc>
          </AboutMeContent>
        </AboutMeContainer>
      )}
    </Container>
  );
};

export default AboutMeSection;

const Container = styled.div`
  margin: 0 -5.55vw;
`;

const AboutMeContainer = styled.div`
  flex: 1;
  /* width: 100vw; */
  padding: 5.625vw 6.0416666667vw;
  /* margin: 0 -5.55vw; */
  position: relative;
  z-index: -2;
  background-color: rgba(253, 255, 252, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: ${screens.sm}) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

const Photo = styled.img`
  width: 43.6111111111vw;
  margin: 4.77vw 0;

  @media only screen and (min-width: ${screens.sm}) {
    width: 25.27vw;
  }

  @media only screen and (min-width: ${screens.lg}) {
    margin: 0;
  }
`;

const AboutMeTitle = styled.h2`
  margin: 4.77vw 0;
  font-family: ${fonts.libre.bold};
  font-size: 0.83rem;
  color: ${colors.primary};

  @media only screen and (min-width: ${screens.sm}) {
    font-size: 0.83rem;
  }

  @media only screen and (min-width: ${screens.lg}) {
    margin-top: 0;
    font-size: 1.25rem;
  }
`;

const AboutMeContent = styled.div`
  @media only screen and (min-width: ${screens.sm}) {
    margin-left: 40px;
  }
`;

const AboutMeDesc = styled.p`
  margin: 0;
  margin-bottom: 1rem;
  font-family: ${fonts.montserrat.regular};
  font-size: 0.66rem;
  line-height: 1.2rem;
  color: ${colors.black};
  text-align: center;

  @media only screen and (min-width: ${screens.sm}) {
    font-size: 0.75rem;
    text-align: left;
  }

  @media only screen and (min-width: ${screens.lg}) {
    font-size: 1rem;
    margin-right: 40px;
  }
`;

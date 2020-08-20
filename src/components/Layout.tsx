/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { createGlobalStyle } from "styled-components";
import { fonts, colors, screens } from "../utils/theme";

import Header from "./Header";

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    font-size: 24px;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${colors.primary};
    overflow-x: hidden;
  }
  
  .selected:hover {
    path {
      stroke: ${colors.accent};
      fill: ${colors.accent};
    }
  }

  .selected-button:hover {
    border: solid 2px ${colors.accent};
    background-color: ${colors.accent};
  }

  .selected-button-form:hover {
    border: solid 2px ${colors.secondary};
    background-color: ${colors.secondary};
  }

`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <main>{children}</main>
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const Container = styled.div`
  max-width: 1440px;
  max-height: 100vh;
  margin: 0 5.55vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

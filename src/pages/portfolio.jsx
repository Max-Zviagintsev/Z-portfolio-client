import React from 'react';
import PortfolioCoverflow from "../components/PortfolioComponent/PortfolioCoverflow";
import {graphql} from "gatsby";
import {Layout} from "antd";
import NavBar from "../components/NavBar/NavBar";
import GlobalStyle from "../shared/css/globalStyles";
import styled from "styled-components";

export const query = graphql`
                            query {
                              allNodeProject {
                                edges {
                                  node {
                                    title
                                    field_project_description {
                                      value
                                    }
                                    field_project_url {
                                      uri
                                    }
                                    field_used_tech
                                    relationships {
                                      field_project_gallery {
                                        uri{
                                          url
                                        }
                                      }
                                      field_project_cover {
                                       uri{
                                          url
                                        }
                                      }
                                      field_project_gallery {
                                        uri{
                                          url
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            `;

const {Header, Footer, Content} = Layout;

// CSS starts
const StyledHeader = styled(Header)`
      height: 115px;
      background-color: rgba(20, 20, 20, 0.8);
      box-shadow: 0 0 6px rgba(20, 20, 20, 0.9);
`;

const StyledH1 = styled.h1`
      font-family: "Ailerons-Typeface";
      color: ${(props) => props.theme.textColorOnWhite};
      font-size: ${(props) => props.theme.fontSizeHeading};
      text-shadow: ${(props) => props.theme.textShadowOnWhite};
      text-align: center;
      margin: 30px 15px;
`;

// CSS ends

const Portfolio = ({data}) => {
    return (
        <Layout>
            <StyledHeader>
                <NavBar/>
            </StyledHeader>
            <Content>
                <StyledH1>My Projects</StyledH1>
                <PortfolioCoverflow data={data}/>
            </Content>
            <Footer>Footer</Footer>
            <GlobalStyle/>
        </Layout>
    );
};

export default Portfolio;

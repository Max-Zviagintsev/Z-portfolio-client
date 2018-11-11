import React from 'react';
import {Layout} from "antd";
import NavBar from "../components/NavBar/NavBar";
import styled from 'styled-components';
import GlobalStyle from '../shared/css/globalStyles';
import GalleryComponent from "../components/GalleryComponent";
import {graphql} from 'gatsby';

export const query = graphql`
            query{
                  allNodeGallery {
                    edges{
                      node{
                        relationships{
                          field_gallery_image{
                            uri {
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

const Gallery = ({data}) => {
    return (
        <Layout>
            <StyledHeader>
                <NavBar/>
            </StyledHeader>
            <Content>
                <StyledH1>Examples of my work</StyledH1>
                <GalleryComponent data={data}/>
            </Content>
            <Footer>Footer</Footer>
            <GlobalStyle/>
        </Layout>
    );
};

export default Gallery;
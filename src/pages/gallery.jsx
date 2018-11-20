import React from 'react';
import {Layout} from "antd";
import NavBar from "../components/NavBar/NavBar";
import styled from 'styled-components';
import GlobalStyle from '../shared/css/globalStyles';
import GalleryComponent from "../components/GalleryComponent";
import {graphql} from 'gatsby';
import {Spring} from 'react-spring';

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
                <Spring
                    from={{color: 'rgba(90, 90, 90, 1)'}}
                    to={{color:'rgba(250, 65, 0, 1)'}}
                    config={{tension: 10, friction: 60, delay: 1000}}>
                    {props => <StyledH1 style={props}>My work</StyledH1>}
                </Spring>

                <GalleryComponent data={data}/>
            </Content>
            <Footer>Footer</Footer>
            <GlobalStyle/>
        </Layout>
    );
};

export default Gallery;
import React from 'react';
import {Layout} from "antd";
import NavBar from "../components/NavBar/NavBar";
import styled from 'styled-components';
import GlobalStyle from '../shared/css/globalStyles';
import GalleryComponent from "../components/GalleryComponent";
import{graphql} from 'gatsby';

const {Header, Footer, Content} = Layout;

export const query = graphql`
 query{
                  allNodeGallery {
                    edges{
                      node{
                        relationships{
                          field_gallery_image{
                            url
                          }
                        }
                      }
                    }
                  }
                }
            `;


// CSS starts
const StyledHeader = styled(Header)`
      height: 100px;
      background-color: black;
`;

// CSS ends

const Gallery = ({data}) => {
    return (

            <Layout>
                <StyledHeader>
                    <NavBar/>
                </StyledHeader>
                <Content>
                    <h1>Examples of my work</h1>
                    <GalleryComponent data={data}/>
                </Content>
                <Footer>Footer</Footer>
                <GlobalStyle/>
            </Layout>

    );
};

export default Gallery;
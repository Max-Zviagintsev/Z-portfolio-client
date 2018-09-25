import React from 'react';
import {Layout} from "antd";
import NavBar from "../components/NavBar/NavBar";
import styled, {ThemeProvider} from 'styled-components';
import GlobalStyle from '../shared/css/globalStyles';
import {theme} from "../shared/css/theme";
import GalleryComponent from "../components/GalleryComponent";

const {Header, Footer, Content} = Layout;


// CSS starts
const StyledHeader = styled(Header)`
      height: 100px;
      background-color: black;
`;

// CSS ends

const Gallery = () => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <StyledHeader>
                    <NavBar/>
                </StyledHeader>
                <Content>
                    <h1>Examples of my work</h1>
                    <GalleryComponent/>
                </Content>
                <Footer>Footer</Footer>
                <GlobalStyle/>
            </Layout>
        </ThemeProvider>
    );
};

export default Gallery;

import React from 'react';
import {Layout} from 'antd';
import NavBar from "../components/NavBar/NavBar";
import styled, {ThemeProvider} from 'styled-components';
import GlobalStyle from '../shared/css/globalStyles';
import {theme} from "../shared/css/theme";
import HomeHero from "../components/HomeHero";
import background from '../../assets/home_hero.jpg';

const {Header, Footer, Content} = Layout;

// CSS starts
const StyledHeader = styled(Header)`
      height: 100vh;
      background: url(${background}) no-repeat fixed center;
`;

// CSS ends

const Home = () => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <StyledHeader>
                    <NavBar/>
                    <HomeHero/>
                </StyledHeader>
                <Content>Content</Content>
                <Footer>Footer</Footer>
                <GlobalStyle/>
            </Layout>
        </ThemeProvider>
    );
};

export default Home;
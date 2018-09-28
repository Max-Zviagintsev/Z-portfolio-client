import React from 'react';
import {Layout} from 'antd';
import NavBar from "../components/NavBar/NavBar";
import styled from 'styled-components';
import GlobalStyle from '../shared/css/globalStyles';
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
            <Layout>
                <StyledHeader>
                    <NavBar/>
                    <HomeHero/>
                </StyledHeader>
                <Content>Content</Content>
                <Footer>Footer</Footer>
                <GlobalStyle/>
            </Layout>
    );
};

export default Home;
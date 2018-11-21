import React from 'react';
import {Layout} from 'antd';
import NavBar from "../components/NavBar/NavBar";
import styled from 'styled-components';
import GlobalStyle from '../shared/css/globalStyles';
import HomeHeroComponent from "../components/HomeHeroComponent";
import background from '../../assets/home_hero.jpg';
import MyTechComponent from "../components/MyTechComponent";
import MySkillsComponent from "../components/MySkillsComponent";

const {Header, Footer, Content} = Layout;

// CSS starts
const StyledHeader = styled(Header)`
      height: 100vh;
      background: url(${background}) rgba(8, 14, 12, 1) no-repeat fixed center;
`;
// CSS ends

const Home = () => {
    return (
            <Layout>
                <StyledHeader>
                    <NavBar/>
                    <HomeHeroComponent/>
                </StyledHeader>
                <Content>
                    <MyTechComponent/>
                    <MySkillsComponent/>
                </Content>
                <Footer>Footer</Footer>
                <GlobalStyle/>
            </Layout>
    );
};

export default Home;
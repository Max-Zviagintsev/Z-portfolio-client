import React from 'react';
import styled from "styled-components";
import background from "../../assets/about-me.jpg";
import {Layout} from "antd";
import NavBar from "../components/NavBar/NavBar";
import FooterComponent from "../components/FooterComponent";
import GlobalStyle from "../shared/css/globalStyles";
import AboutMeComponent from "../components/AboutMeComponent";

const StyledTop = styled.div`
      background: url(${background}) rgba(45, 37, 26, 1) no-repeat fixed center;
`;

const AboutMe = () => {
    return (
        <Layout>
            <StyledTop>
                <NavBar/>
                <AboutMeComponent/>
            </StyledTop>
            <FooterComponent/>
            <GlobalStyle/>
        </Layout>
    );
};

export default AboutMe;

import React from 'react';
import styled from "styled-components";
import background from "../../assets/about-me.jpg";
import {Layout} from "antd";
import NavBar from "../components/NavBar/NavBar";
import FooterComponent from "../components/FooterComponent";
import GlobalStyle from "../shared/css/globalStyles";
import AboutMeComponent from "../components/AboutMeComponent";
import {Helmet} from "react-helmet";

const StyledTop = styled.div`
      background: url(${background}) rgba(28, 37, 44, 1) no-repeat center fixed;
      background-size: cover;
`;

const AboutMe = () => {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" name="Max Z." content="About me"/>
                <title>About me</title>
                <link rel="canonical" href="https://z-portfolio.tk/about-me/"/>
            </Helmet>
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

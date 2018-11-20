import React, {Component} from 'react';
import styled from "styled-components";
import {Spring} from 'react-spring';
import Waypoint from 'react-waypoint';
import Typing from 'react-typing-animation';
import Loader from 'react-loader-spinner';
import {Animated} from "react-animated-css";

import {colorPrimary, textColorOnWhite} from '../shared/css/theme.js';
import ReactLogo from '../../assets/react_logo_240.png';
import DrupalLogo from '../../assets/drupal_logo_215.png';
import FacebookLogo from '../../assets/Facebook_50.png';
import InstagramLogo from '../../assets/Instagram_50.png';
import PaypalLogo from '../../assets/Paypal_50.png';
import NetflixLogo from '../../assets/Netflix_50.png';
import NYTimesLogo from '../../assets/The-New-York-Times_50.png';
import TeslaLogo from '../../assets/Tesla_43.png';
import NasaLogo from '../../assets/Nasa_55.png';
import NokiaLogo from '../../assets/Nokia_70.png';
import VerizonLogo from '../../assets/Verizon_70.png';
import PinterestLogo from '../../assets/Pinterest_50.png';

// CSS starts
const MyTechWrapper = styled.div`
      font-family: "Exo 2.0";
      font-size: ${(props) => props.theme.fontSizeRegular};
`;
const StyledH1 = styled.h1`
      font-family: "Ailerons-Typeface";
      color: ${(props) => props.theme.textColorOnWhite};
      font-size: ${(props) => props.theme.fontSizeHeading};
      text-shadow: ${(props) => props.theme.textShadowOnWhite};
      text-align: center;
      margin: 30px 15px;
`;
const StyledH2 = styled.h1`
      font-family: "Ailerons-Typeface";
      color: ${(props) => props.theme.textColorOnWhite};
      font-size: ${(props) => props.theme.fontSizeSubHeading};
      text-shadow: ${(props) => props.theme.textShadowOnWhite};
      text-align: center;
      margin: 30px 15px;
`;
const StyledH3 = styled.h1`
      font-family: "Ailerons-Typeface";
      color: ${(props) => props.theme.textColorOnWhite};
      font-size: ${(props) => props.theme.fontSizeH3};
      text-shadow: ${(props) => props.theme.textShadowOnWhite};
      text-align: center;
      margin: 30px 15px;
`;
const StyledInner = styled.div`
      display: flex;
`;
const StyledLeftDiv = styled.div`
      display: flex;
      flex-direction: column;
      flex: 1 1 0;
      align-items: center;
`;
const StyledRightDiv = styled.div`
      display: flex;
      flex-direction: column;
      flex: 1 1 0;
      align-items: center;
`;
const ImageContainerRight = styled.div`
      display: flex;
      justify-content: center;
      margin-bottom: 15px;
`;
const ImageContainerLeft = styled.div`
      display: flex;
      justify-content: center;
      margin-top: 28px;
      margin-bottom: 15px;
`;
const MiddleDiv = styled.div`
      flex: 1;
      max-width: 1px;
`;
const TechRow = styled.div`
      display: flex;
`;

const UsedByWrapper = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
`;

const UsedByImage = styled.img`
      margin: 10px;
`;

// CSS ends

class MyTech extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showBorder: textColorOnWhite,
            showMyTech: textColorOnWhite,
            showTechInfo: false
        };
    }

    ShowBorder = () => {
        this.setState({
            showBorder: colorPrimary
        });
    };

    HideBorder = () => {
        this.setState({
            showBorder: textColorOnWhite
        });
    };

    ShowMyTech = () => {
        this.setState({
            showMyTech: colorPrimary
        });
    };

    HideMyTech = () => {
        this.setState({
            showMyTech: textColorOnWhite
        });
    };
    showTechInfo = () => {
        this.setState({
            showTechInfo: true
        });
    };

    render() {
        return (
            <MyTechWrapper>
                <Waypoint onEnter={this.ShowMyTech}
                          onLeave={this.HideMyTech}
                />
                <Spring
                    from={{color: textColorOnWhite}}
                    to={{color: `${this.state.showMyTech}`}}
                    config={{tension: 10, friction: 40, delay: 1000}}>
                    {props => <StyledH1 style={props}>My Tech</StyledH1>}
                </Spring>
                <StyledInner>

                    <StyledLeftDiv>
                        <StyledH2>React</StyledH2>
                        <ImageContainerLeft>
                            <img src={ReactLogo} alt="React logo" width="240px"/>
                        </ImageContainerLeft>

                        <Waypoint onEnter={this.showTechInfo}/>

                        <StyledH3>Used by:</StyledH3>

                        <UsedByWrapper>
                            <a href="https://www.facebook.com/"><UsedByImage src={FacebookLogo} alt="Facebook logo" width='50px' height='auto'/></a>
                            <a href="https://www.instagram.com/?hl=en"><UsedByImage src={InstagramLogo} alt="Instagram logo" width='50px' height='auto'/></a>
                            <a href="https://www.paypal.com"><UsedByImage src={PaypalLogo} alt="Paypal logo" width='50px' height='auto'/></a>
                            <a href="https://www.nytimes.com/"><UsedByImage src={NYTimesLogo} alt="New York Times logo" width='50px' height='auto'/></a>
                            <a href="https://www.netflix.com"><UsedByImage src={NetflixLogo} alt="Netflix logo" width='50px' height='auto'/></a>
                        </UsedByWrapper>

                        {this.state.showTechInfo ?
                            <Typing speed={1}>
                                <TechRow><Loader
                                    type="Triangle"
                                    color={colorPrimary}
                                    height="15"
                                    width="15"
                                />&nbsp;World №1 JavaScript framework for Front-End development;</TechRow>
                                <TechRow><Loader
                                    type="Triangle"
                                    color={colorPrimary}
                                    height="15"
                                    width="15"
                                />&nbsp;Developed by Facebook;</TechRow>
                                <TechRow><Loader
                                    type="Triangle"
                                    color={colorPrimary}
                                    height="15"
                                    width="15"
                                />&nbsp;Lightning fast Virtual DOM technology;</TechRow>
                                <TechRow><Loader
                                    type="Triangle"
                                    color={colorPrimary}
                                    height="15"
                                    width="15"
                                />&nbsp;Fits any project due to amazing flexibility and tiny ~100Kb size;</TechRow>
                                <TechRow><Loader
                                    type="Triangle"
                                    color={colorPrimary}
                                    height="15"
                                    width="15"
                                />&nbsp;Easy to convert to mobile app with React Native;</TechRow>

                            </Typing> :
                            null}

                    </StyledLeftDiv>

                    <Waypoint onEnter={this.ShowBorder}
                              onLeave={this.HideBorder}
                    />

                    <Spring
                        from={{backgroundColor: textColorOnWhite}}
                        to={{backgroundColor: `${this.state.showBorder}`}}
                        config={{tension: 10, friction: 40, delay: 1000}}>
                        {props => <MiddleDiv style={props}>&nbsp;</MiddleDiv>}
                    </Spring>

                    <StyledRightDiv>
                        <StyledH2>Drupal</StyledH2>
                        <ImageContainerRight>
                            <img src={DrupalLogo} alt="Drupal logo" width="215px"/>
                        </ImageContainerRight>

                        <Waypoint onEnter={this.showTechInfo}/>

                        <StyledH3>Used by:</StyledH3>

                        <UsedByWrapper>
                            <a href="https://products.internetservices.verizon.com/"><UsedByImage src={VerizonLogo} alt="Verizon logo" width='70px' height='auto'/></a>
                            <a href="https://www.tesla.com/"><UsedByImage src={TeslaLogo} alt="Tesla logo" width='43px' height='auto'/></a>
                            <a href="https://www.nasa.gov/"><UsedByImage src={NasaLogo} alt="NASA logo" width='50px' height='auto'/></a>
                            <a href="https://business.pinterest.com/en"><UsedByImage src={PinterestLogo} alt="Pinterest logo" width='50px' height='auto'/></a>
                            <a href="https://www.nokia.com"><UsedByImage src={NokiaLogo} alt="Nokia logo" width='70px' height='auto'/></a>
                        </UsedByWrapper>

                        {this.state.showTechInfo ?
                            <Typing speed={1}>
                                <TechRow><Loader
                                    type="Triangle"
                                    color={colorPrimary}
                                    height="15"
                                    width="15"
                                />&nbsp;The most advanced Content Management System;</TechRow>
                                <TechRow><Loader
                                    type="Triangle"
                                    color={colorPrimary}
                                    height="15"
                                    width="15"
                                />&nbsp;Perfect for Headless apps due to API-first philosophy;</TechRow>
                                <TechRow><Loader
                                    type="Triangle"
                                    color={colorPrimary}
                                    height="15"
                                    width="15"
                                />&nbsp;Manage your content for any App using Drupal as a server;</TechRow>
                                <TechRow><Loader
                                    type="Triangle"
                                    color={colorPrimary}
                                    height="15"
                                    width="15"
                                />&nbsp;Corporate-level architecture based on Symfony framework;</TechRow>
                                <TechRow><Loader
                                    type="Triangle"
                                    color={colorPrimary}
                                    height="15"
                                    width="15"
                                />&nbsp;Top-notch performance and security;</TechRow>
                            </Typing> :
                            null}
                    </StyledRightDiv>
                </StyledInner>
            </MyTechWrapper>
        );
    };
}

export default MyTech;

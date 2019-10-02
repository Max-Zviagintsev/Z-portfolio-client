import React from 'react';
import {Spring} from 'react-spring/renderprops';
import styled from "styled-components";
import portrait from "../../assets/cyb.jpg";

const Wrapper = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: -150px;
      margin-bottom: 80px;
`;
const Background = styled.div`
      max-width: 800px;
        padding: 15px;
        @media(min-width: 800px){
        padding: 25px;
        }
      border-radius: 5px;
`;
const Inner = styled.div`
      text-shadow: ${(props) => props.theme.textShadow};
      font-family: "Exo 2.0";
      font-size: ${(props) => props.theme.fontSizeRegular};
      color: white;
      text-align: justify;
`;
const TopWrapper = styled.div`
      display: flex;
`;
const TopInner = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 100%;
      font-family: "Ailerons-Typeface";
      color: ${(props) => props.theme.colorPrimary};
      font-size: 20px;
        @media(min-width: 678px) {
        font-size: 24px;
        }
      text-shadow: ${(props) => props.theme.textShadowOnWhite};
`;
const Portrait = styled.img`
      margin-right: 15px;
`;
const Text = styled.p`
      //display: inline-flex;
`;
const AboutMeComponent = () => {
    return (
        <Wrapper>
            <Spring from={{backgroundColor: 'rgba(20, 20, 20, 0)'}}
                    to={{backgroundColor: 'rgba(20, 20, 20, 0.6)'}}
                    config={{tension: 10, friction: 20, delay: 1000}}>
                {styles => <Background style={styles}>

                    <Spring
                        from={{opacity: 0}}
                        to={{opacity: 1}}
                        config={{tension: 10, friction: 15, delay: 1000}}>
                        {styles => <Inner style={styles}>
                            <TopWrapper>
                                <Portrait src={portrait} alt="MaxZ"
                                          width='128px' height='144px'/>
                                <TopInner>
                                    <p>My name is Max</p>
                                    <p>I create beautiful websites and apps</p>
                                </TopInner>
                            </TopWrapper>
                            <Text>My primary role in the projects in which I participated in recent years is a React
                                Engineer.
                                I build any kinds of React apps from small SPA to large and complex apps with
                                Redux-based complicated data structure.
                                I fell in love with Typescript, so I use it as my main programming language.
                                I'm using Redux-Saga as a middleware to send requests to the server simultaneously and
                                control the dispatched actions.
                                I’ve also worked with all popular UI Frameworks. My personal choice is Ant Design
                                because of the most powerful API,
                                the largest variety of components and regular updates.</Text>
                            <Text> If you need a website or app, you probably want a Content Management System to
                                edit your pages, products, articles and blogs without touching a code, otherwise you
                                have to hire a developer for managing your content.</Text>
                            <Text>After the years of experience with popular CMS including Wordpress and Joomla I found
                                out that Drupal is the only system that allows client to conveniently manage a content
                                without the risk of touching a Front-End or Logical layers. Drupal 8 is based on
                                API-first philosophy and perfectly fits into the modern “headless” solutions where you
                                have a single source of content for all websites and apps including mobile and
                                desktop.</Text>
                            <Text>Drupal gives a corporate-level quality and security just as is. No need to buy a
                                premium theme and a dozen of premium plugins to make a professional website. It is
                                developer-friendly and amazingly flexible. If you need something more complex than a
                                personal blog or brochure and expect a heavy traffic load, there is no alternative to
                                Drupal.</Text>
                            <Text>I have a visual designer partner, so together we are able to complete both programming
                                and graphics.</Text>
                            <Text>In the past I held leading positions in local and international world-known companies
                                for more than 10 years but I've decided to work on my own, so I'm looking forward to the
                                interesting and creative projects.</Text>
                        </Inner>}
                    </Spring>
                </Background>
                }
            </Spring>
        </Wrapper>
    );
};

export default AboutMeComponent;

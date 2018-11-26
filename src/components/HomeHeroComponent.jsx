import React from 'react';
import styled from 'styled-components';
import {Spring} from 'react-spring';

const Hero = styled.div`
      font-family: "Ailerons-Typeface";
      color: white;
      font-size: 24px;
      line-height:30px;
      text-shadow: ${(props) => props.theme.textShadow};
      position: absolute;
      top: 45%;
      left: 8px;
      
      @media (min-width: 456px) {
      font-size: 28px;
      }
      
      @media (min-width: 512px) {
      font-size: 32px;
      }
      
      @media (min-width: 626px) {
      font-size: ${(props) => props.theme.fontSizeHeading};
      }
      
      @media (min-width: 1400px) {
      top: 45%;
      left: 18%;
      }
`;

const HeroText = styled.div`
      border-radius: 5px;
      max-width: 630px;
      padding: 10px 10px 1px 10px;
      
      @media (min-width: 456px) {
      padding: 15px 15px 1px 15px;
      }
      
      @media (min-width: 626px) {
      padding: 20px 20px 1px 20px;
      }
      
      @media (min-width: 1400px) {
      padding: 30px 30px 1px 30px;
      }
`;

const HomeHeroComponent = () => {
    return (
        <Hero>
                <Spring from={{backgroundColor: 'rgba(20, 20, 20, 0)'}}
                        to={{backgroundColor: 'rgba(20, 20, 20, 0.6)'}}
                        config={{tension: 10, friction: 70, delay: 1000}}>
                    {styles => <HeroText style={styles}>

                        <Spring from={{opacity: 0}}
                                to={{opacity: 1}}
                                config={{tension: 10, friction: 40, delay: 1000}}>
                            {styles => <p style={styles}>Hi, I'm Max Z.</p>}
                        </Spring>

                        <Spring from={{opacity: 0}} to={{opacity: 1}}
                                config={{tension: 10, friction: 40, delay: 2500}}>
                            {styles => <p style={styles}>I'm a Web Developer</p>}
                        </Spring>

                        <Spring from={{opacity: 0}} to={{opacity: 1}}
                                config={{tension: 10, friction: 40, delay: 4000}}>
                            {styles => <p style={styles}>Obsessed With Technology</p>}
                        </Spring>
                    </HeroText>}
                </Spring>
        </Hero>
    );
};

export default HomeHeroComponent;

import React from 'react';
import {Row, Col} from 'antd';
import styled from 'styled-components';
import {Spring} from 'react-spring';

const StyledHero = styled.div`
      font-family: "Ailerons-Typeface";
      color: white;
      font-size: ${(props) => props.theme.fontSizeHeading};
      line-height:30px;
      text-shadow: ${(props) => props.theme.textShadow};
`;

const StyledCol = styled(Col)`
      padding: 30px 30px 0 30px!important;
      border-radius: 5px;
      max-width: 630px;
`;

const HomeHeroComponent = () => {
    return (
        <StyledHero>
            <Row>
                <Spring from={{backgroundColor: 'rgba(20, 20, 20, 0)'}}
                        to={{backgroundColor: 'rgba(20, 20, 20, 0.6)'}}
                        config={{tension: 10, friction: 70, delay: 1000}}>
                    {styles => <StyledCol span={10} offset={4} style={styles}>

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
                    </StyledCol>}
                </Spring>
            </Row>
        </StyledHero>
    );
};

export default HomeHeroComponent;

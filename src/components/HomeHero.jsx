import React from 'react';
import {Row, Col} from 'antd';
import styled from 'styled-components';
import { Spring } from 'react-spring';

const StyledHero = styled.div`
      font-family: "Ailerons-Typeface";
      color: white;
      font-size: 40px;
      line-height: 30px;
      text-shadow: ${(props) => props.theme.textShadow};
`;

const HomeHero = () => {
    return (
        <StyledHero>
            <Row>
                <Col span={9} offset={5}>
                    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}
                            config={{tension: 10, friction: 40, delay: 1000}}>
                            {styles => <p style={styles}>Hi, I'm Max Z.</p>}
                    </Spring>
                    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}
                            config={{tension: 10, friction: 40, delay: 2000}}>
                            {styles => <p style={styles}>I'm a Web Developer</p>}
                    </Spring>
                    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}
                            config={{tension: 10, friction: 40, delay: 3000}}>
                            {styles => <p style={styles}>Obsessed With Technology</p>}
                    </Spring>
                </Col>
            </Row>
        </StyledHero>
    );
};

export default HomeHero;

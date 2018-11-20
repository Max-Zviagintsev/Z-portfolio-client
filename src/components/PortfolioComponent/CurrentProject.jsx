import React from 'react';
import {Row, Col} from 'antd';
import styled from "styled-components";
import PortfolioGalleryComponent from "./PortfolioGalleryComponent";
import {Spring} from 'react-spring';

// CSS starts
const StyledWrapper = styled.div`
    background-color: white;
    font-family: "Exo 2.0";
    font-size: ${(props) => props.theme.fontSizeRegular};
`;

const StyledRightCol = styled.div`
      padding: 0 15px 15px 0;
      display: flex;
      flex-wrap: wrap;
`;
const StyledLeftCol = styled.div`
      padding: 0 15px 15px 15px;
`;

const StyledTech = styled.div`
      padding: 5px 10px;
      margin: 5px;
      background-color: ${(props) => props.theme.textColorOnWhite};
      color: ${(props) => props.theme.colorPrimary};
      border: 1px solid ${(props) => props.theme.colorPrimary};
      border-radius: 4px;
      box-shadow: 1px 1px 4px rgba(20, 20, 20, 0.4);
`;

const StyledH2 = styled.h1`
      font-family: "Ailerons-Typeface";
      color: ${(props) => props.theme.textColorOnWhite};
      font-size: ${(props) => props.theme.fontSizeSubHeading};
      text-shadow: ${(props) => props.theme.textShadowOnWhite};
      text-align: center;
      margin: 30px 15px;
`;
// CSS ends

const CurrentProject = (props) => {
    const usedTech = props.projectData.node.field_used_tech.map(item => <StyledTech key={item}>{item}</StyledTech>);

    return (
        <StyledWrapper>
            <Row>
                <Col span={16}>
                    <Spring
                        from={{color: 'rgba(90, 90, 90, 1)'}}
                        to={{color: 'rgba(250, 65, 0, 1)'}}
                        config={{tension: 10, friction: 60, delay: 1000}}>
                        {props => <StyledH2 style={props}>Description</StyledH2>}
                    </Spring>
                </Col>
                <Col span={8}>
                    <Spring
                        from={{color: 'rgba(90, 90, 90, 1)'}}
                        to={{color: 'rgba(250, 65, 0, 1)'}}
                        config={{tension: 10, friction: 60, delay: 1000}}>
                        {props => <StyledH2 style={props}>Tech</StyledH2>}
                    </Spring>
                </Col>
            </Row>
            <Row>
                <Col span={16}>
                    <StyledLeftCol
                        dangerouslySetInnerHTML={{__html: props.projectData.node.field_project_description.value}}/>
                </Col>
                <Col span={8}> <StyledRightCol> {usedTech} </StyledRightCol></Col>
            </Row>

            <Spring
                from={{color: 'rgba(90, 90, 90, 1)'}}
                to={{color: 'rgba(250, 65, 0, 1)'}}
                config={{tension: 10, friction: 60, delay: 1000}}>
                {props => <StyledH2 style={props}>Gallery</StyledH2>}
            </Spring>

            <PortfolioGalleryComponent projectData={props}/>
        </StyledWrapper>
    );
};

export default CurrentProject;

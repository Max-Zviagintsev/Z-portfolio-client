import React from 'react';
import {Row, Col} from 'antd';
import styled from "styled-components";
import PortfolioGalleryComponent from "./PortfolioGalleryComponent";

// CSS starts
const StyledWrapper = styled.div`
    background-color: white;
`;

const StyledRightCol = styled.div`
      padding: 0 15px 15px 0;
      font-size: ${(props) => props.theme.fontSizeRegular};
      display: flex;
      flex-wrap: wrap;
`;
const StyledLeftCol = styled.div`
      padding: 0 15px 15px 15px;
      font-size: ${(props) => props.theme.fontSizeRegular};
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
                <Col span={16}><StyledH2>Description</StyledH2> </Col>
                <Col span={8}> <StyledH2>Tech</StyledH2> </Col>
            </Row>
            <Row>
                <Col span={16}>
                    <StyledLeftCol dangerouslySetInnerHTML={{__html: props.projectData.node.field_project_description.value}}/>
                </Col>
                <Col span={8}> <StyledRightCol> {usedTech} </StyledRightCol></Col>
            </Row>
            <StyledH2>Gallery</StyledH2>
            <PortfolioGalleryComponent projectData={props}/>
        </StyledWrapper>
    );
};

export default CurrentProject;

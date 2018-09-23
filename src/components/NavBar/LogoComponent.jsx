import React from 'react';
import styled from 'styled-components';


// CSS starts
const StyledLogo = styled.div`
    font-family: "Elianto-Regular";
    font-size: 60px;
    line-height: 60px;
    color: ${(props) => props.theme.colorPrimary};
    text-shadow: ${(props) => props.theme.textShadow};
    margin: 35px 35px 0 0;
`;
// CSS ends

const LogoComponent = () => {

    return (
        <StyledLogo>MAXZ</StyledLogo>
    );
};

export default LogoComponent;

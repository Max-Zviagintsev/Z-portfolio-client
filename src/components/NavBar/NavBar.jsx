import React from 'react';
import styled from 'styled-components';
import Menu from "./Menu";
import Favicon from 'react-favicon';

import fav from "../../favicon.png"
import LogoComponent from "./LogoComponent";

// CSS starts
const StyledNavBar = styled.div`
                    display: flex;
                    justify-content: space-between;
`;

// CSS ends
const NavBar = () => {
    return (
        <StyledNavBar>
            <Favicon url={fav} />
            <Menu/>
            <LogoComponent/>
        </StyledNavBar>
    );
};

export default NavBar;

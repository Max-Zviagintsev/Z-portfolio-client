import React from 'react';
import styled from 'styled-components';
import Menu from "./Menu";

import background from '../../../assets/home_hero.jpg'
import LogoComponent from "./LogoComponent";

// CSS starts
const StyledNavBar = styled.div`
                    display: flex;
                    justify-content: space-between;
                    background: url(${background}) no-repeat fixed center;
                    height: 100vh;
`;

// CSS ends
const NavBar = () => {
    return (
        <StyledNavBar>
            <Menu/>
            <LogoComponent/>
        </StyledNavBar>
    );
};

export default NavBar;

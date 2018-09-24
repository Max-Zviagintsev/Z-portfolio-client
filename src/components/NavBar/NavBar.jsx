import React from 'react';
import styled from 'styled-components';
import Menu from "./Menu";

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
            <Menu/>
            <LogoComponent/>
        </StyledNavBar>
    );
};

export default NavBar;

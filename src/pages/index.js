import React, {Component} from 'react';
import {Layout} from 'antd';
import NavBar from "../components/NavBar/NavBar";
import styled, {ThemeProvider} from 'styled-components';
import GlobalStyle from '../shared/css/globalStyles';
import {theme} from "../shared/css/theme";


const {Header, Footer, Content} = Layout;

// CSS starts
const StyledHeader = styled(Header)`
      height: 100vh;
`;

// CSS ends

class Home extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Layout>
                    <StyledHeader> <NavBar/> </StyledHeader>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                    <GlobalStyle/>
                </Layout>
            </ThemeProvider>
        );
    }
}

export default Home;
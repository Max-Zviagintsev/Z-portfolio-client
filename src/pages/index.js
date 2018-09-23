import React, {Component} from 'react';
import {Layout} from 'antd';
import NavBar from "../components/NavBar";

const {Header, Footer, Content} = Layout;

class Home extends Component {
    render() {
        return (
            <Layout>
                <Header>
                    <NavBar/>
                </Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        );
    }
}

export default Home;
import React, {Component} from 'react';
import {Layout} from 'antd';
import NavBar from "../components/NavBar";

const {Header, Footer, Sider, Content} = Layout;

class Home extends Component {
    render() {
        return (
            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Sider> <NavBar/> </Sider>
                    <Content>Content</Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        );
    }
}

export default Home;
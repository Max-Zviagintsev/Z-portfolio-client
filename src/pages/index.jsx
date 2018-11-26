import React from 'react';
import {Layout} from 'antd';
import NavBar from "../components/NavBar/NavBar";
import styled from 'styled-components';
import GlobalStyle from '../shared/css/globalStyles';
import HomeHeroComponent from "../components/HomeHeroComponent";
import background from '../../assets/home_hero.jpg';
import MyTechComponent from "../components/MyTechComponent";
import MySkillsComponent from "../components/MySkillsComponent";
import TestimonialsComponent from "../components/TestimonialsComponent";
import {graphql} from "gatsby";
import FooterComponent from "../components/FooterComponent";

export const query = graphql`
                       query {allNodeTestimonials{
                        edges{
                            node{
                                field_client,
                                field_testimonial
                                }
                               }
                              }
                             }
                        `;

const {Header, Content} = Layout;

// CSS starts
const StyledHeader = styled(Header)`
      height: 800px;
      background: url(${background}) rgba(8, 14, 12, 1) no-repeat fixed;
      
      @media(min-width: 1600px) {
      height: 1080px;
      }
`;
// CSS ends

const Home = ({data}) => {
    return (
        <Layout>
            <StyledHeader>
                <NavBar/>
                <HomeHeroComponent/>
            </StyledHeader>
            <Content>
                <MyTechComponent/>
                <MySkillsComponent/>
                <TestimonialsComponent data={data}/>
            </Content>
            <FooterComponent/>
            <GlobalStyle/>
        </Layout>
    );
};

export default Home;
import React, {Component} from 'react';
import {Animated} from "react-animated-css";
import styled from "styled-components";
import {Spring} from 'react-spring/renderprops';
import {Waypoint} from 'react-waypoint';
import {colorPrimary, textColorOnWhite} from "../shared/css/theme";
import SkillsBackground from '../../assets/Skills_Background.png';

import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoNodejs, IoMdLeaf, IoIosSpeedometer, IoIosTrendingUp, IoLogoUsd, IoIosGitNetwork, IoIosRocket } from 'react-icons/io';
import { FaReact, FaDrupal, FaDatabase, FaPhp } from 'react-icons/fa';


const SkillsWrapper = styled.div`
      background: url(${SkillsBackground}) rgba(22, 22, 24, 1) no-repeat fixed center;
      background-size: cover;
      padding: 5px 15px 50px 15px;
      min-height: 503px;
`;

const StyledH1 = styled.h1`
      font-family: "Ailerons-Typeface";
      color: ${(props) => props.theme.textColorOnWhite};
      font-size: ${(props) => props.theme.fontSizeHeading};
      text-shadow: ${(props) => props.theme.textShadowOnWhite};
      text-align: center;
      margin: 30px 15px;
`;
const StyledTech = styled.div`
      padding: 5px 10px;
      margin: 15px 5px;
        @media(min-width: 540px) {
        margin: 15px;
        }
      background-color: rgba(39, 40, 35, 1);
      color: ${(props) => props.theme.colorPrimary};
      border: 1px solid ${(props) => props.theme.colorPrimary};
      border-radius: 4px;
      box-shadow: 1px 1px 4px rgba(20, 20, 20, 0.4);
      font-family: "Exo 2.0";
      font-size: ${(props) => props.theme.fontSizeRegular};
      display: flex;
      justify-content: center;
      align-items: center;
`;

const SkillRow = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
`;

class MySkillsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showMySkills: textColorOnWhite,
            showFirstRow: false,
            showSecondRow: false,
            showThirdRow: false,
            showFourthRow: false,
            showFifthRow: false
        };
    }

    showMySkills = () => {
        this.setState({
            showMySkills: colorPrimary
        });
    };

    showFirstRow = () => {
        this.setState({
            showFirstRow: true
        });
    };

    showSecondRow = () => {
        this.setState({
            showSecondRow: true
        });
    };

    showThirdRow = () => {
        this.setState({
            showThirdRow: true
        });
    };

    showFourthRow = () => {
        this.setState({
            showFourthRow: true
        });
    };

    showFifthRow = () => {
        this.setState({
            showFifthRow: true
        });
    };

    render() {
        return (
            <SkillsWrapper>
                <Waypoint onEnter={this.showMySkills}/>
                <Spring
                    from={{color: textColorOnWhite}}
                    to={{color: `${this.state.showMySkills}`}}
                    config={{tension: 10, friction: 40}}>
                    {props => <StyledH1 style={props}>My skills</StyledH1>}
                </Spring>

                <Waypoint onEnter={this.showFirstRow}/>
                {this.state.showFirstRow ?
                <SkillRow>
                    <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
                        <StyledTech> <IoLogoJavascript />&nbsp;JavaScript</StyledTech>
                    </Animated>

                </SkillRow> : null
                }

                <Waypoint onEnter={this.showSecondRow}/>
                {this.state.showSecondRow ?
                    <SkillRow>
                        <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
                            <StyledTech> <IoLogoHtml5 />&nbsp;HTML</StyledTech>
                        </Animated>

                        <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
                            <StyledTech> <IoLogoCss3 />&nbsp;CSS</StyledTech>
                        </Animated>

                    </SkillRow> : null
                }

                <Waypoint onEnter={this.showThirdRow}/>
                {this.state.showThirdRow ?
                    <SkillRow>
                        <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
                            <StyledTech> <FaReact />&nbsp;React</StyledTech>
                        </Animated>

                        <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
                            <StyledTech> <IoLogoNodejs />&nbsp;Node.js</StyledTech>
                        </Animated>

                        <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
                            <StyledTech> <FaDrupal />&nbsp;Drupal</StyledTech>
                        </Animated>

                    </SkillRow> : null
                }

                <Waypoint onEnter={this.showFourthRow}/>
                {this.state.showFourthRow ?
                    <SkillRow>
                        <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
                            <StyledTech> <IoMdLeaf />&nbsp;MongoDB</StyledTech>
                        </Animated>

                        <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
                            <StyledTech> <IoIosSpeedometer />&nbsp;Express.js</StyledTech>
                        </Animated>

                        <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
                            <StyledTech> <FaDatabase />&nbsp;MySQL</StyledTech>
                        </Animated>

                        <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
                            <StyledTech><FaPhp />&nbsp;php</StyledTech>
                        </Animated>

                    </SkillRow> : null
                }

                <Waypoint onEnter={this.showFifthRow}/>
                {this.state.showFifthRow ?
                    <SkillRow>

                        <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
                            <StyledTech> <IoIosTrendingUp />&nbsp;SEO</StyledTech>
                        </Animated>

                        <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
                            <StyledTech> <IoLogoUsd />&nbsp;Drupal Commerce</StyledTech>
                        </Animated>

                        <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
                            <StyledTech> <IoIosGitNetwork />&nbsp;GraphQL</StyledTech>
                        </Animated>

                        <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
                            <StyledTech> <IoIosRocket />&nbsp;Gatsby.js</StyledTech>
                        </Animated>

                    </SkillRow> : null
                }

            </SkillsWrapper>
        );
    }
}

export default MySkillsComponent;
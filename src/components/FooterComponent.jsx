import React, {Component} from 'react';
import styled from "styled-components";
import {Layout} from "antd";
import {colorPrimary} from "../shared/css/theme";
import {IoIosMail, IoLogoSkype, IoIosPaperPlane} from 'react-icons/io';
import {IconContext} from "react-icons";
import {Spring} from 'react-spring/renderprops';


const {Footer} = Layout;

const StyledFooter = styled(Footer)`
      background-color: rgba(20, 20, 20, 0.8);
      box-shadow: 0 0 6px rgba(20, 20, 20, 0.9);
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      padding: 10px !important;
`;

const Contacts = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      
  @media (min-width: 825px) {
    justify-content: space-between;
  }
`;

const FooterItem = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: "Exo 2.0";
      font-size: 14px;
      color: ${colorPrimary};
      text-shadow: ${(props) => props.theme.textShadow};
      margin: 10px;
`;
const CopyRight = styled.div`
      font-family: "Exo 2.0, italic";
      font-size: 13px;
      color: ${colorPrimary};
      text-shadow: ${(props) => props.theme.textShadow};
      text-align: center;
      margin-top: 10px;
`;

class FooterComponent extends Component {
    render() {
        return (
            <Spring from={{opacity: 0}}
                    to={{opacity: 1}}
                    config={{tension: 10, friction: 10}}>
                {styles => <StyledFooter style={styles}>
                    <Contacts>
                        <FooterItem>
                            <IconContext.Provider value={{size: "24px"}}>
                                <IoIosMail/>
                            </IconContext.Provider>
                            &nbsp;
                            maxim.zviagintsev@gmail.com
                        </FooterItem>

                        <FooterItem>
                            <IconContext.Provider value={{size: "24px"}}>
                                <IoLogoSkype/>
                            </IconContext.Provider>
                            &nbsp;
                            Skype ID: maxim.zviagintsev
                        </FooterItem>

                        <FooterItem>
                            <IconContext.Provider value={{size: "24px"}}>
                                <IoIosPaperPlane/>
                            </IconContext.Provider>
                            &nbsp;
                            Telegram ID: max_zviagintsev
                        </FooterItem>
                    </Contacts>

                    <CopyRight>Visual art by Yi Liu. © 2019 Maxim Zviagintsev All Rights Reserved.</CopyRight>

                </StyledFooter>
                }
            </Spring>
        );
    }
}

export default FooterComponent;
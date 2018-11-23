import React, {Component} from 'react';
import styled from "styled-components";
import {Layout} from "antd";
import {colorPrimary} from "../shared/css/theme";
import {IoIosMail, IoLogoSkype, IoIosPaperPlane} from 'react-icons/io';
import {IconContext} from "react-icons";


const {Footer} = Layout;

const StyledFooter = styled(Footer)`
      height: 80px;
      background-color: rgba(20, 20, 20, 0.8);
      box-shadow: 0 0 6px rgba(20, 20, 20, 0.9);
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
`;

const FooterItem = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: "Exo 2.0";
      font-size: ${(props) => props.theme.fontSizeRegular};
      color: ${colorPrimary};
      text-shadow: ${(props) => props.theme.textShadow};
`;

class FooterComponent extends Component {
    render() {
        return (
            <StyledFooter>
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

            </StyledFooter>
        );
    }
}

export default FooterComponent;
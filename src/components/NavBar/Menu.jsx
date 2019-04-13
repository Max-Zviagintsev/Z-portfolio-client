import React from 'react';
import styled from 'styled-components';
import {Keyframes, animated} from 'react-spring/renderprops';
import delay from 'delay';
import {Icon} from 'antd';
import {Link} from 'gatsby';
import {IoLogoGithub} from 'react-icons/io';
import {IconContext} from "react-icons/lib";

// Creates a spring with predefined animation slots
const Sidebar = Keyframes.Spring({
    // Slots can take arrays/chains,
    peek: [{x: 0, from: {x: -100}, delay: 500}, {x: -100, delay: 800}],
    // single items,
    open: {delay: 0, x: 0},
    // or async functions with side-effects
    close: async call => {
        await delay(400)
        await call({delay: 0, x: -100})
    },
});

// Creates a keyframed trail
const Content = Keyframes.Trail({
    peek: [
        {x: 0, opacity: 1, from: {x: -100, opacity: 0}, delay: 600},
        {x: -100, opacity: 0, delay: 0},
    ],
    open: {x: 0, opacity: 1, delay: 100},
    close: {x: -100, opacity: 0, delay: 0},
})

const items = [

    <Link
        to="/"
        style={{
            color: 'rgba(250, 65, 0, 1)'
        }}
        activeStyle={{
            color: 'rgba(255, 110, 50, 1)',
            textShadow: '0 0 7px rgba(255, 150, 50, 1)'
        }}
    >Home</Link>,
    <Link
        to="/gallery/"
        style={{
            color: 'rgba(250, 65, 0, 1)'
        }}
        activeStyle={{
            color: 'rgba(255, 110, 50, 1)',
            textShadow: '0 0 7px rgba(255, 150, 50, 1)'
        }}
    >Gallery</Link>,
    <Link
        to="/portfolio/"
        style={{
            color: 'rgba(250, 65, 0, 1)'
        }}
        activeStyle={{
            color: 'rgba(255, 110, 50, 1)',
            textShadow: '0 0 7px rgba(255, 150, 50, 1)'
        }}
    >Portfolio</Link>,
    <Link
        to="/about-me/"
        style={{
            color: 'rgba(250, 65, 0, 1)'
        }}
        activeStyle={{
            color: 'rgba(255, 110, 50, 1)',
            textShadow: '0 0 7px rgba(255, 150, 50, 1)'
        }}
    >About me</Link>
];

// CSS starts

const StyledIcon = styled(Icon)`
                    position: absolute;
                    margin: 40px;
                    color: ${(props) => props.theme.colorPrimary};
                    box-shadow: 0 0 20px rgba(20, 20, 20, 0.9);
                    background-color: rgba(20, 20, 20, 0.6);
                    z-index: 100;
                    font-size: 26px;
                    cursor: pointer;
`;

const First = styled.div`
              padding: 90px 15px 15px 40px;
              text-shadow: ${(props) => props.theme.textShadow};
              font-family: "Exo 2.0";
              font-size: ${(props) => props.theme.fontSizeRegular};
              z-index: 100;
`;

const Middle = styled.div`      
              padding: 15px 15px 15px 40px;
              text-shadow: ${(props) => props.theme.textShadow};
              font-family: "Exo 2.0";
              font-size: ${(props) => props.theme.fontSizeRegular};
              z-index: 100;
`;
const IconWrapper = styled.div`
      position: absolute;
      margin-top: 40px;
      margin-left: 100px;
      box-shadow: 0 0 20px rgba(20, 20, 20, 0.9);
      background-color: rgba(20, 20, 20, 0.6);
      border-radius: 50%;
      z-index: 100;
      cursor: pointer;
`;
const StyledLink = styled.a`
      color: ${(props) => props.theme.colorPrimary};
      &:hover {
      color: ${(props) => props.theme.colorPrimary};
      }
`;

// CSS ends

class Menu extends React.Component {
    state = {
        open: false
    };
    toggle = () => this.setState(state => ({open: !state.open}));

    render() {
        const state =
            this.state.open === false
                ? 'close'
                : 'open';

        const icon = this.state.open ? 'fold' : 'unfold';

        return (
            <div>
                <StyledIcon type={`menu-${icon}`} onClick={this.toggle}/>
                <IconWrapper>
                    <StyledLink href="https://github.com/Max-Zviagintsev" target="_blank">
                        <IconContext.Provider value={{size: "26px"}}>
                            <IoLogoGithub/>
                        </IconContext.Provider>
                    </StyledLink>
                </IconWrapper>

                <Sidebar native state={state}>
                    {({x}) => (
                        <animated.div
                            className="sidebar"
                            style={{
                                transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                            }}>
                            <Content
                                native
                                items={items}
                                keys={items.map((_, i) => i)}
                                reverse={!this.state.open}
                                state={state}>
                                {(item, i) => ({x, ...props}) => (
                                    <animated.div
                                        style={{
                                            transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                                            ...props,
                                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            height: '100%',
                                            width: '165px',
                                            fontSize: '18px',
                                            borderRadius: '2px',
                                            boxShadow: '0 0 20px rgba(20, 20, 20, 0.9)'
                                        }}>
                                        {i === 0 ? <First>{item}</First> : <Middle>{item}</Middle>}
                                    </animated.div>
                                )}
                            </Content>
                        </animated.div>
                    )}
                </Sidebar>
            </div>
        )
    }
}

export default Menu;
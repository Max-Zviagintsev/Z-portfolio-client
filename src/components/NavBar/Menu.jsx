import React, {Component} from 'react';
import styled from 'styled-components';
import {Keyframes, animated, config} from 'react-spring';
import delay from 'delay';
import {Icon} from 'antd';
import { Link } from 'gatsby';

// Creates a spring with predefined animation slots
const Sidebar = Keyframes.Spring({

    // single items,
    open: {to: {x: 0}, config: config.default},
    // or async functions with side-effects
    close: async call => {
        await delay(400)
        await call({to: {x: -100}, config: config.gentle})
    }
});

// Creates a keyframed trail
const Content = Keyframes.Trail({
    open: {delay: 100, to: {x: 0, opacity: 1}},
    close: {to: {x: -100, opacity: 0}}
});

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
    >About me</Link>,
    <Link
        to="/contacts/"
        style={{
            color: 'rgba(250, 65, 0, 1)'
        }}
        activeStyle={{
            color: 'rgba(255, 110, 50, 1)',
            textShadow: '0 0 7px rgba(255, 150, 50, 1)'
        }}
    >Contacts</Link>
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
              padding: 100px 20px 25px 40px;
              text-shadow: ${(props) => props.theme.textShadow};
`;

const Middle = styled.div`      
              padding: 0 20px 25px 40px;
              text-shadow: ${(props) => props.theme.textShadow};
`;

// CSS ends

class Menu extends Component {
    constructor() {
        super();
        this.state = {open: false};
    }


    render() {
        const {open} = this.state;

        const toggle = () => {
            !open ?
                this.setState({
                    open: true
                }) :
                this.setState({
                    open: false
                })
        };

        const state = !open ? 'close' : 'open';
        const icon = open ? 'fold' : 'unfold';

        return (
            <div>
                <StyledIcon type={`menu-${icon}`} onClick={toggle}/>
                <Sidebar native state={state}>
                    {({x}) => (
                        <animated.div
                            style={{transform: x.interpolate(x => `translate3d(${x}%,0,0)`)}}>
                            <Content native keys={items.map((_, i) => i)} config={{tension: 200, friction: 20}}
                                     state={state}>
                                {items.map((item, i) => ({x, ...props}) => (
                                    <animated.div
                                        style={{
                                            transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                                            ...props,
                                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            height: '100%',
                                            width: '165px',
                                            fontSize: '18px',
                                            borderRadius: '4px',
                                            boxShadow: '0 0 20px rgba(20, 20, 20, 0.9)'
                                        }}>
                                        {i === 0 ? <First>{item}</First> : <Middle>{item}</Middle>}
                                    </animated.div>
                                ))}
                            </Content>
                        </animated.div>
                    )}
                </Sidebar>
            </div>
        )
    }
}

export default Menu;
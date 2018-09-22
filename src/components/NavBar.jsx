import React, {Component} from 'react';
import {Keyframes, animated, config} from 'react-spring';
import delay from 'delay';
import { Icon} from 'antd';

const fast = {...config.stiff, restSpeedThreshold: 1, restDisplacementThreshold: 0.01}

// Creates a spring with predefined animation slots
const Sidebar = Keyframes.Spring({
    // Slots can take arrays/chains,
    peek: [
        {delay: 500, from: {x: -100}, to: {x: 0}, config: fast},
        {delay: 800, to: {x: -100}, config: config.slow}
    ],
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
    peek: [{delay: 600, from: {x: -100, opacity: 0}, to: {x: 0, opacity: 1}}, {to: {x: -100, opacity: 0}}],
    open: {delay: 100, to: {x: 0, opacity: 1}},
    close: {to: {x: -100, opacity: 0}}
});

const items = [
    <h2>Link 1</h2>,
    <h2>Link 2</h2>,
    <h2>Link 3</h2>,
    <h2>Link 1</h2>,
    <h2>Link 4</h2>
];

class NavBar extends Component {
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

        const state = !open ? 'peek' : open ? 'open' : 'close';
        const icon = open ? 'fold' : 'unfold';
        return (
            <div>
                <Icon type={`menu-${icon}`} className="toggle" onClick={toggle}/>
                <Sidebar native state={state}>
                    {({x}) => (
                        <animated.div className="sidebar"
                                      style={{transform: x.interpolate(x => `translate3d(${x}%,0,0)`)}}>
                            <Content native keys={items.map((_, i) => i)} config={{tension: 200, friction: 20}}
                                     state={state}>
                                {items.map((item, i) => ({x, ...props}) => (
                                    <animated.div
                                        style={{
                                            transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                                            ...props
                                        }}>
                                        <div className={i === 0 ? 'middle' : ''}>{item}</div>
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

export default NavBar;
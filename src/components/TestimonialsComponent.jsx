import React, {Component} from 'react';
import styled from "styled-components";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/vertical.css';
import Loader from "react-loader-spinner";
import {colorPrimary, textColorOnWhite} from "../shared/css/theme";
import Waypoint from "react-waypoint";
import {Spring} from "react-spring";
import Interface from '../../assets/interface.gif';

// CSS starts
const StyledWrapper = styled.div`
    text-align: center;
`;
const StyledH1 = styled.h1`
      font-family: "Ailerons-Typeface";
      color: ${(props) => props.theme.textColorOnWhite};
      font-size: ${(props) => props.theme.fontSizeHeading};
      text-shadow: ${(props) => props.theme.textShadowOnWhite};
      text-align: center;
      margin: 30px 15px;
`;
const TestimonialsWrapper = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
`;
const StyledInterface = styled.img`
      box-shadow: 1px 1px 15px rgba(90, 90, 90, 1);
`;
const TestimonialsInner = styled.div`
      font-family: "Exo 2.0";
      font-size: ${(props) => props.theme.fontSizeRegular};
      height: inherit;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
`;
const TestimonialsItem = styled.div`
      flex: 1 1 0;
      display: flex;
      justify-content: center;
      align-items: center;
`;
const Testimonial = styled.div`
      font-family: "Exo 2.0, italic";
      max-width: 650px;
      text-align: justify;
`;
const Client = styled.div`
      font-family: "Exo 2.0, bold italic";
      max-width: 650px;
      margin-top: 10px;
      text-align: right;
`;

// CSS ends

class TestimonialsComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fetchedData: [],
            isLoading: true,
            showHeading: textColorOnWhite
        };
    }

    async componentDidMount() {
        await this.setState({
            fetchedData: this.props.data.allNodeTestimonials.edges,
            isLoading: false
        });
    }

    showHeading = () => {
        this.setState({
            showHeading: colorPrimary
        });
    };

    hideHeading = () => {
        this.setState({
            showHeading: textColorOnWhite
        });
    };

    render() {

        return (
            !this.state.isLoading ?
                <div>
                    <Waypoint onEnter={this.showHeading} onLeave={this.hideHeading}/>
                    <Spring
                        from={{color: textColorOnWhite}}
                        to={{color: `${this.state.showHeading}`}}
                        config={{tension: 10, friction: 40, delay: 1000}}>
                        {props => <StyledH1 style={props}>Testimonials</StyledH1>}
                    </Spring>

                    <TestimonialsWrapper>
                        <TestimonialsItem>
                            <StyledInterface src={Interface} alt="Interface" width="540px"/>
                        </TestimonialsItem>
                        <TestimonialsItem>
                            <Slider direction="vertical">
                                {this.state.fetchedData.map((item, index) => (
                                    <TestimonialsInner key={index}>
                                        <Testimonial>{item.node.field_testimonial}
                                            <Client>{item.node.field_client}</Client>
                                        </Testimonial>
                                    </TestimonialsInner>
                                ))}
                            </Slider>
                        </TestimonialsItem>
                    </TestimonialsWrapper>
                </div> :
                <StyledWrapper>
                    <Loader
                        type="Triangle"
                        color={colorPrimary}
                        height="100"
                        width="100"
                    />
                </StyledWrapper>
        );
    }
}

export default TestimonialsComponent;
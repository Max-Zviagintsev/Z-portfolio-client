import React, {Component} from 'react';
import Coverflow from 'react-coverflow';
import {URL} from "../../shared/glabal_variables";
import Loader from 'react-loader-spinner';
import styled from "styled-components";
import CurrentProject from "./CurrentProject";
import {Spring, Transition} from 'react-spring/renderprops';
import {IconContext} from "react-icons";
import {IoIosArrowRoundUp} from 'react-icons/io';
import {colorPrimary} from '../../shared/css/theme.js';

// CSS starts
const StyledWrapper = styled.div`
    text-align: center;
`;
const HelperWrapper = styled.div`
    text-align: center;
    min-height: 40vh;
`;
const HelperText = styled.div`
    text-align: center;
    font-family: "Exo 2.0";
    color: ${(props) => props.theme.colorPrimary};
    font-size: 20px;
    text-shadow: ${(props) => props.theme.textShadowOnWhite};
`;

// CSS ends

class PortfolioCoverflow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentProjectIndex: null,
            currentProject: null,
            isLoading: true,
            fetchedData: [],
            src: [],
        };
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        });
    }

    async componentDidMount() {
        await this.setStateAsync({
            fetchedData: this.props.data.allNodeProject.edges,
            isLoading: false
        });
    }

    handleCurrentProject = (item, index) => {
        this.setState({
            currentProjectIndex: index,
            currentProject: item
        });
    };

    render() {

        return (
            !this.state.isLoading && typeof window !== "undefined" ?
                <React.Fragment>
                    <Spring from={{opacity: 0}}
                            to={{opacity: 1}}
                            config={{tension: 10, friction: 40, delay: 500}}>
                        {styles => <div style={styles}>
                            <Coverflow
                                width={960}
                                height={480}
                                displayQuantityOfSide={1}
                                enableHeading={false}
                            >
                                {this.state.fetchedData.map((item, index) =>
                                    <img src={`${URL}${item.node.relationships.field_project_cover.uri.url}`}
                                         alt={'Portfolio item ' + index}
                                         onClick={() => this.handleCurrentProject(item, index)}
                                         key={index}/>
                                )}
                            </Coverflow>
                        </div>}
                    </Spring>
                    {this.state.currentProject != null ?
                        <CurrentProject projectData={this.state.currentProject}/>
                       /* <Transition
                            from={{opacity: 0}}
                            enter={{opacity: 1}}
                            leave={{opacity: 0}}
                            config={{tension: 10, friction: 10}}>
                            {styles => <div style={styles}>
                                <CurrentProject projectData={this.state.currentProject}/>
                            </div>}
                        </Transition>*/
                        :
                        <Spring from={{opacity: 0}}
                                to={{opacity: 1}}
                                config={{tension: 10, friction: 40, delay: 1000}}>
                            {styles => <HelperWrapper style={styles}>
                                <IconContext.Provider value={{color: colorPrimary, size: '72px'}}>
                                    <IoIosArrowRoundUp/>
                                </IconContext.Provider>
                                <HelperText>Click for project details</HelperText>
                            </HelperWrapper>}
                        </Spring>
                    }
                </React.Fragment>
                :
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

export default PortfolioCoverflow;
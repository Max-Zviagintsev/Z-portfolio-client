import React, {Component} from 'react';
import Coverflow from 'react-coverflow';
import {URL} from "../../shared/glabal_variables";
import Loader from 'react-loader-spinner';
import styled from "styled-components";
import CurrentProject from "./CurrentProject";
import { Transition } from 'react-spring'


// CSS starts
const StyledWrapper = styled.div`
    text-align: center;
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
            !this.state.isLoading ?
                <div>
                    <Coverflow
                        width={960}
                        height={480}
                        displayQuantityOfSide={2}
                        enableHeading={false}
                    >
                        {this.state.fetchedData.map((item, index) =>
                            <img src={`${URL}${item.node.relationships.field_project_cover.uri.url}`}
                                 alt={'Portfolio item ' + index}
                                 onClick={() => this.handleCurrentProject(item, index)}
                                 key={index}/>
                        )}
                    </Coverflow>
                    {this.state.currentProject != null ?
                        <Transition
                            from={{ opacity: 0 }}
                            enter={{ opacity: 1 }}
                            leave={{ opacity: 0 }}
                            config={{tension: 10, friction: 10}}>
                            {styles => <div style={styles}> <CurrentProject projectData={this.state.currentProject}/> </div>}
                        </Transition>
                        :
                        null}

                </div>
                :
                <StyledWrapper>
                    <Loader
                        type="Triangle"
                        color="rgba(250, 65, 0, 1)"
                        height="100"
                        width="100"
                    />
                </StyledWrapper>
        );
    }
}

export default PortfolioCoverflow;
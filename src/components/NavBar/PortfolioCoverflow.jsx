import React, {Component} from 'react';
import Coverflow from 'react-coverflow';
import {URL} from "../../shared/glabal_variables";
import Loader from 'react-loader-spinner';
import styled from "styled-components";

// CSS starts
const StyledWrapper = styled.div`
    text-align: center;
`;

// CSS ends

class PortfolioCoverflow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: 0,
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

        console.log(this.state.fetchedData);
    }

    render() {

        return (
            !this.state.isLoading ?
                <div>
                    <Coverflow
                        width={960}
                        height={480}
                        displayQuantityOfSide={2}
                        navigation={true}
                        enableHeading={false}
                        active={this.state.active}
                    >
                        {this.state.fetchedData.map((item, index) =>
                            <img src={`${URL}${item.node.relationships.field_project_cover.uri.url}`}
                                 alt={'Portfolio item ' + index}
                                 onClick={this._handleClick.bind(this)}
                                 key={index}/>
                        )}
                    </Coverflow>
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

    _handleClick() {
        var num = Math.floor((Math.random() * 10) + 1);
        this.setState({
            active: num
        });
    }
};

export default PortfolioCoverflow;
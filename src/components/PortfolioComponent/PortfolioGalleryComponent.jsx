import React, {Component} from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import Measure from 'react-measure';


import {URL} from "../../shared/glabal_variables";
import {Spring} from 'react-spring/renderprops';

// CSS starts
const StyledWrapper = styled.div`
    text-align: center;
`;

// CSS ends

class PortfolioGalleryComponent extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            currentImage: 0,
            imageLinks: [],
            photos: [],
            width: -1
        };
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        });
    }

    openLightbox = (event, obj) => {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    };
    closeLightbox = () => {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    };
    gotoPrevious = () => {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    };
    gotoNext = () => {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    };

    async setPhotos() {
        await this.setStateAsync({
            imageLinks: this.props.projectData.projectData.node.relationships.field_project_gallery,
            isLoading: false
        });

        const {imageLinks} = this.state;

        const photos = imageLinks.map((item) => {
            return (
                {src: `${URL}${item.uri.url}`, width: 2, height: 1}
            );
        });

        this.setState({photos: photos});
    }

    componentDidMount() {
        this.setPhotos();
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({isLoading: true});
            this.setPhotos();
        }
    }

    render = () => {
        const {photos} = this.state;
        const width = this.state.width;

        return (
            !this.state.isLoading ?
                <Spring from={{opacity: 0}}
                        to={{opacity: 1}}
                        config={{tension: 10, friction: 10, delay: 1000}}>
                    {styles => <div style={styles}>
                        <Measure bounds onResize={(contentRect) => this.setState({width: contentRect.bounds.width})}>
                            {
                                ({measureRef}) => {
                                    if (width < 1) {
                                        return <div ref={measureRef}></div>;
                                    }
                                    let columns = 1;
                                    if (width >= 780) {
                                        columns = 2;
                                    }
                                    return <div ref={measureRef}><Gallery photos={photos} columns={columns}
                                                                          onClick={this.openLightbox}/>
                                        <Lightbox images={photos}
                                                  onClose={this.closeLightbox}
                                                  onClickPrev={this.gotoPrevious}
                                                  onClickNext={this.gotoNext}
                                                  currentImage={this.state.currentImage}
                                                  isOpen={this.state.lightboxIsOpen}
                                        /></div>
                                }
                            }
                        </Measure>
                    </div>}
                </Spring>
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

export default PortfolioGalleryComponent;

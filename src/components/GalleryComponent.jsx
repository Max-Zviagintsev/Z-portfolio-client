import React, {Component} from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import Measure from 'react-measure';

import {URL} from "../shared/glabal_variables";

// CSS starts
const StyledWrapper = styled.div`
    text-align: center;
`;
// CSS ends

class GalleryComponent extends Component {
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

    async componentDidMount() {
        await this.setStateAsync({
            imageLinks: this.props.data.allNodeGallery.edges[0].node.relationships.field_gallery_image,
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

    render = () => {
        const {photos} = this.state;
        const width = this.state.width;
        console.log(this.props);

        return (
            !this.state.isLoading ?
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

export default GalleryComponent;
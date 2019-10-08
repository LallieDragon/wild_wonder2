import React, { Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";

import imageQuality from '../contentful/imageHandling';

class Carousel extends Component {
  render() {
    let images = this.props.content.carouselMedia.map((media, index) =>
      <MDBCarouselItem itemId={index + 1} key={media.fields.file.url}>
        <MDBView>
          <img
            className="d-block w-100"
            src={imageQuality(media.fields.file.url, 20)}
            alt={media.fields.description}
          />
        </MDBView>
      </MDBCarouselItem>
  )

    console.log(this.props.content.carouselMedia)
    return (
      <MDBContainer className="carousel-container">
        <MDBCarousel
          activeItem={1}
          length={this.props.content.carouselMedia.length}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner className="mb-3">
            { images }
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    );
  }
}

export default Carousel;

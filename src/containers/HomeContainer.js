import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import InfoSection from '../components/InfoSection';
import Spinner from '../components/Spinner';

import { initClient } from '../contentful/contentfulClient';

class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      homeContent: null,
      carouselMedia: null
    }
    this.getCarouselMedia = this.getCarouselMedia.bind(this);
    this.getHomeContent = this.getHomeContent.bind(this);
  }

  getCarouselMedia = () => {
    let client = initClient()

    client.getEntry('57uFTKWGAybS2xyBnGbKQq')
    .then((entry) => this.setState({
      carouselMedia: entry.fields
     }))
    .catch('Error: ' + console.error)
  }

  getHomeContent = () => {
    let client = initClient()

    client.getEntry('1Ty01XsTSOnMmRpuMcrlLJ')
    .then((entry) => this.setState({
      homeContent: entry.fields
     }))
    .catch('Error: ' + console.error)
  }

  render() {
    if (this.state.homeContent === null) {
      this.getHomeContent();
      return <Spinner />
    } else if (this.state.carouselMedia === null) {
      this.getCarouselMedia();
      return <Spinner />
    } else {

      return (
        <div className="container">
          <InfoSection content={this.state.homeContent} />
          <Carousel content={this.state.carouselMedia} page="Home" />
        </div>
      )
    }
  }
}

export default HomeContainer;

import React, { Component } from 'react';

import InfoSection from '../components/InfoSection';
import Spinner from '../components/Spinner';
import List from '../components/List';
import Carousel from '../components/Carousel';
import { initClient } from '../contentful/contentfulClient';

class ProgramContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rhythmContent: null,
      rhythmListContent: null,
      classroomContent: null,
      carouselMedia: null
    }
    this.getRhythmContent = this.getRhythmContent.bind(this);
    this.getClassroomContent = this.getClassroomContent.bind(this);
    this.getCarouselMedia = this.getCarouselMedia.bind(this);
    this.getRhythmListContent = this.getRhythmListContent.bind(this);
  }

  getRhythmContent = () => {
    let client = initClient()

    client.getEntry('qZftb9Q3cQ6eL602RTPH1')
    .then((entry) => this.setState({
      rhythmContent: entry.fields
    }))
    .catch('Error: ' + console.error)
  }

  getClassroomContent = () => {
    let client = initClient()

    client.getEntry('0CXFTlIPyozSJdtG1lnzR')
    .then((entry) => this.setState({
      classroomContent: entry.fields
    }))
    .catch('Error: ' + console.error)
  }

  getCarouselMedia = () => {
    let client = initClient()

    client.getEntry('3HPiQpq1J46KRRPjUWHJAT')
    .then((entry) => this.setState({
      carouselMedia: entry.fields
     }))
    .catch('Error: ' + console.error)
  }

  getRhythmListContent = () => {
    let client = initClient()

    client.getEntry('1FGv8GcVxwjiE3JTVsFkS4')
    .then((entry) => this.setState({
      rhythmListContent: entry.fields
     }))
    .catch('Error: ' + console.error)
  }

  render() {
    console.log(this.state)
    if (this.state.rhythmContent === null) {
      this.getRhythmContent();
      return <Spinner />
    } else if (this.state.classroomContent === null) {
      this.getClassroomContent();
      return <Spinner />
    } else if (this.state.carouselMedia === null) {
      this.getCarouselMedia();
      return <Spinner />
    } else if (this.state.rhythmListContent === null) {
      this.getRhythmListContent();
      return <Spinner />
    } else {
      console.log(this.state.rhythmListContent.list)
      return (
        <div className="container">
          <InfoSection content={this.state.rhythmContent} />
          <List title={this.state.rhythmListContent.title1} list={this.state.rhythmListContent.list.daily} />
          <InfoSection content={this.state.classroomContent} />
          <Carousel content={this.state.carouselMedia} />
        </div>
      )
    }
  }
}

export default ProgramContainer;

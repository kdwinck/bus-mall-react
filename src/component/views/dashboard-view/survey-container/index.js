import _ from 'lodash'
import React, {Component} from 'react'
import {connect} from 'react-redux'

import './survey-container.scss'
import SurveyImage from '../survey-image'

import {
  clickUpdate as clickUpdateAction,
  shownUpdate as shownUpdateAction,
  surveyReset as surveyResetAction,
} from '../../../../action/image-actions.js'

class SurveyContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedImages: [],
      previousImages: [],
    }
  }

  componentWillMount() {
    this.generateRandomImages()
  }

  generateRandomImages() {
    let holding = []
    while (holding.length < 3) {
      let image = _.sample(this.props.images)
      if (!holding.includes(image) && !this.state.previousImages.includes(image))
        holding.push(image)
    }
    this.setState({
      selectedImages: [...holding],
      previousImages: [...holding],
    })
  }

  render() {
    return (
      <div className="survey-container">
        <h2> Select the item you are most likely to purchase </h2>
        <div className="survey">
          <SurveyImage image={this.state.selectedImages[0]} updateClicks={this.props.clickUpdate}/>
          <SurveyImage image={this.state.selectedImages[1]} updateClicks={this.props.clickUpdate}/>
          <SurveyImage image={this.state.selectedImages[2]} updateClicks={this.props.clickUpdate}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    images: state,
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    clickUpdate: (image) => dispatch(clickUpdateAction(image)),
    shownUpdate: (image) => dispatch(shownUpdateAction(image)),
    surveyReset: (image) => dispatch(surveyResetAction(image)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyContainer)

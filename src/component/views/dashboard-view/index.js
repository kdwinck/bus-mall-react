import React, {Component} from 'react'
import {connect} from 'react-redux'

import SurveyContainer from './survey-container'

import {
  clickUpdate as clickUpdateAction,
  shownUpdate as shownUpdateAction,
  surveyReset as surveyResetAction,
} from '../../../action/image-actions.js'

class DashboardContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1> Dashboard Container </h1>
        <SurveyContainer state={this.props.state}/>
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

export default connect(mapStateToProps)(DashboardContainer)

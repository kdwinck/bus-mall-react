import React, {Component} from 'react'

import SurveyContainer from './dashboard-components/survey-container'

class DashboardContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1> Dashboard Container </h1>
        <SurveyContainer />
      </div>
    )
  }
}

export default DashboardContainer

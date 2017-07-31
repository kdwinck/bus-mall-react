import React, {Component} from 'react'
import {connect} from 'react-redux'

import SurveyContainer from './survey-container'
import Navbar from '../../navbar'

class DashboardView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Navbar />
        <SurveyContainer images={this.props.images}/>
      </div>
    )
  }
}


export default DashboardView

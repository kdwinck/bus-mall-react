import React, {Component} from 'react'

import './survey-image.scss'

class SurveyImage extends Component {
  updateClicks() {
    this.props.updateClicks(this.props.image)
  }

  render() {
    return (
      <div className="img-div">
        <img src={`src/assets/${this.props.image.url}`} onClick={this.updateClicks}/>
      </div>
    )
  }
}

export default SurveyImage

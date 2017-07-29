import React, {Component} from 'react'

class SurveyImage extends Component {
  render() {
    return (
      <div>
        <img src={this.props.source} />
      </div>
    )
  }
}

export default SurveyImage

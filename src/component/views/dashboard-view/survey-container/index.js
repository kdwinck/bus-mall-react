import React, {Component} from 'react'

import SurveyImage from '../survey-image'

class SurveyContainer extends Component {
  render() {
    return (
      <div>
        <div>
          <SurveyImage source="src/assets/bag.jpg"/>
          <SurveyImage source="src/assets/cthulhu.jpg"/>
          <SurveyImage source="src/assets/usb.jpg"/>
        </div>
      </div>
    )
  }
}

export default SurveyContainer

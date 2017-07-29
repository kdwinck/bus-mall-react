import imageData from '../data/data.json'

let initalState = imageData

export default (state=initalState, action) => {
  let {type, payload} = action

  switch(type) {
  case 'IMAGE_SHOWN':
    console.log('will update image show')
    return
  case 'IMAGE_CLICKED':
    console.log('will update image clicked')
    return
  case 'SURVEY_RESET':
    return initalState
  default:
    return state
  }
}

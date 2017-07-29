import React, {Component} from 'react'
import {Provider} from 'react-redux'

import createAppStore from '../../lib/store.js'
import DashboardContainer from '../views/dashboard-view'

const store = createAppStore()

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <DashboardContainer />
        </Provider>
      </div>
    )
  }
}

export default App

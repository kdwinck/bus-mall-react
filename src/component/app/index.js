import React, {Component} from 'react'
import {Provider} from 'react-redux'

import createAppStore from '../../lib/store.js'
import DashboardView from '../views/dashboard-view'
import '../../main.scss'

const store = createAppStore()

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <DashboardView />
        </Provider>
      </div>
    )
  }
}

export default App

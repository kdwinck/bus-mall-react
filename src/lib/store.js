import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer/image'
import reporter from './redux-reporter.js'

export default () => createStore(reducer, applyMiddleware(reporter))

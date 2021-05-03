import { combineReducers } from 'redux'
import { devices } from './devices'
import { chat } from './chat'

export default combineReducers({ devices, chat })

import {combineReducers} from 'redux';
import devices from './devices';
import stream from "./stream"

export default combineReducers({devices, stream});
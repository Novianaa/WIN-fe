import { combineReducers } from "redux";
import Auth from './auth'

const rootReducer = combineReducers({
  auth: Auth,
  // movies: Movies,
  // schedule: Schedule,
})
export default rootReducer
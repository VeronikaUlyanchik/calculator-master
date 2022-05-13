import { combineReducers } from 'redux'

import historyReducer from './historyReducer'
import themeReducer from './themeReducer'
import modeReducer from "@/reducers/modeReducer";

export const rootReducer = combineReducers({
  history: historyReducer,
  theme: themeReducer,
  mode: modeReducer,
})

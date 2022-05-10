import { combineReducers } from 'redux'

import historyReducer from './historyReducer'
import themeReducer from './themeReducer'

export const rootReducer = combineReducers({
  history: historyReducer,
  theme: themeReducer,
})

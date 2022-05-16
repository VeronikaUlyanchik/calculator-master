import { combineReducers } from 'redux'

import historyReducer from './historyReducer'
import themeReducer from './themeReducer'
import modeReducer from "@/reducers/modeReducer"
import calculatorReducer from "@/reducers/calculatorReducer"

export const rootReducer = combineReducers({
  history: historyReducer,
  theme: themeReducer,
  mode: modeReducer,
  calculator: calculatorReducer,
})

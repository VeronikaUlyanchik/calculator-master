import {handleActions, createAction} from 'redux-actions'


const INITIAL_STATE = {
  history: [],
  openHistory: true,
}

export const addToHistory = createAction(
  'ADD_TO_HISTORY',
  expression => expression,
)
export const clearHistory = createAction(
  'CLEAR_HISTORY',
)
export const closeOpenHistory = createAction(
  'CLOSE_OPEN_HISTORY',
)

export default handleActions({
  ADD_TO_HISTORY: (state, action) => ({
    ...state,
    history: [action.payload, ...state.history],
  }),
  CLEAR_HISTORY: state => ({
    ...state,
    history: [],
  }),
  CLOSE_OPEN_HISTORY: state => ({
    ...state,
    openHistory: !state.openHistory,
  }),
}, INITIAL_STATE)

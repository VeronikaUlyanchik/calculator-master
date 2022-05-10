import React from 'react'
import {handleActions, createAction} from 'redux-actions'


const INITIAL_STATE = {
  theme: 'Light theme',
}

export const changeTheme = createAction(
  'CHANGE_THEME',
  theme => theme,
)

export default handleActions({
  CHANGE_THEME: (state, action) => ({
    theme: action.payload,
  }),
}, INITIAL_STATE)

import React from 'react'
import {handleActions, createAction} from 'redux-actions'


const INITIAL_STATE = {
  functionalMode: true,
}

export const changeMode = createAction(
  'CHANGE_MODE',
  mode => mode,
)

export default handleActions({
  CHANGE_MODE: state => ({
    functionalMode: !state.functionalMode,
  }),
}, INITIAL_STATE)

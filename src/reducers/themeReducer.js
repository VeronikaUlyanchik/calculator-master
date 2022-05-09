import React from 'react'
import { handleActions } from 'redux-actions'

const INITIAL_STATE = {
  theme: "Light theme",
}

export default handleActions({}, INITIAL_STATE)

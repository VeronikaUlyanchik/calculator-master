import React from 'react'
import {DisplayStyled} from "@/components/Calculator/Display/components"
import PropTypes from "prop-types"


export const Display = props => {
  return (
    <DisplayStyled className="display">
      {props.total}
    </DisplayStyled>
  )
}

Display.propTypes = {
  total: PropTypes.string.isRequired,
}


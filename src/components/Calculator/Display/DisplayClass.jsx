import React from 'react'
import {DisplayStyled} from "@/components/Calculator/Display/components"
import PropTypes from "prop-types"


export class DisplayClass extends React.Component {
  render() {
  return (
    <DisplayStyled>
      {this.props.total}
    </DisplayStyled>
  )
}
}

DisplayClass.propTypes = {
  total: PropTypes.string.isRequired,
}


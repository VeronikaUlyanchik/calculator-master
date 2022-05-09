import React from 'react'

import {HistoryStyled} from "@/components/Calculator/History/components"
import PropTypes from "prop-types"

export const History = (props) => {
  return (
    <HistoryStyled>
      <h5>History</h5>
      <div>
        <div>5 + 5</div>
        <div>5 + 5</div>
        <div>5 + 5</div>
      </div>
    </HistoryStyled>
  )
}

// History.propTypes = {
//   expessions: PropTypes.array,
// }



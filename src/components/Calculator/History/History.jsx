import React from 'react'

import {HistoryStyled} from "@/components/Calculator/History/components"

import {useSelector} from "react-redux"

export const History = () => {
  const history = useSelector(state => state.history.history)

  return (
    <HistoryStyled>
      <h5>History</h5>
      <div className="historyContainer">
        {history.map(h=> <div key={h}>{h}</div>)}
      </div>
    </HistoryStyled>
  )
}

// History.propTypes = {
//   expessions: PropTypes.array,
// }



import React from 'react'

import {HistoryStyled} from "@/components/Calculator/History/components"

import {useSelector} from "react-redux"

export const History = () => {

  const opened = useSelector(state => state.history.openHistory)
  const history = useSelector(state => state.history.history)

  return (
    <HistoryStyled left={opened ? "0px" : "1000px"}>
      <h5>History</h5>
      <div className="historyContainer">
        {history.map((h,i)=> <div key={i}>{h}</div>)}
      </div>
    </HistoryStyled>
  )
}

// History.propTypes = {
//   expessions: PropTypes.array,
// }



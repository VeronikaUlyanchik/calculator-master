import React from 'react'

import {HistoryStyled} from "@/components/Calculator/History/components"
import {connect} from "react-redux"


class HistoryClassC extends React.Component {


  render() {
    return (
      <HistoryStyled>
        <h5>History</h5>
        <div className="historyContainer">
          {this.props.history.map(h => <div key={h}>{h}</div>)}
        </div>
      </HistoryStyled>
    )
  }
}

const mapStateToProps = state => ({
  history: state.history.history,
})

export default connect(
  mapStateToProps,
  {},
)(HistoryClassC)


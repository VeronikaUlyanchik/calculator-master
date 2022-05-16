import React from 'react'

import {HistoryStyled} from "@/components/Calculator/History/components"
import {connect} from "react-redux"
import PropTypes from "prop-types"


class HistoryClassC extends React.Component {

  render() {
    return (
      <HistoryStyled left={this.props.openHistory ? "0px" : "1000px"} className="history">
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
  openHistory: state.history.openHistory,
})

export const HistoryClass =  connect(
  mapStateToProps,
  {},
)(HistoryClassC)

HistoryClassC.propTypes ={
  history: PropTypes.array.isRequired,
  openHistory: PropTypes.bool.isRequired,
}

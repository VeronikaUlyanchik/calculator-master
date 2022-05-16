import React from 'react'
import PropTypes from "prop-types"
import {closeOpenHistory} from "@/reducers/historyReducer";
import {PanelStyled} from "@/components/Calculator/ControlPanel/components"
import {connect} from "react-redux";


class ControlPanelClass extends React.Component {

  handleHistoryMode = () => {
    this.props.closeOpenHistory()
  }

  render() {
    return (
      <PanelStyled onClick={this.handleHistoryMode}>
        {this.props.openHistory ? "Close" : "Open"} History
      </PanelStyled>
    )
  }
}
const mapStateToProps = state => ({
  openHistory: state.history.openHistory,
})

export default connect(mapStateToProps,{closeOpenHistory} )(ControlPanelClass)

ControlPanelClass.propTypes ={
  openHistory: PropTypes.bool.isRequired,
  closeOpenHistory: PropTypes.func.isRequired,
}




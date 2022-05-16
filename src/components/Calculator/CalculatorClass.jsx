import React from 'react'
import {CalculatorStyled} from "@/components/Calculator/components"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {ControlPanelClass} from "@/components/Calculator/ControlPanel/index"
import {DisplayClass} from "@/components/Calculator/Display/index"
import {HistoryClass} from "@/components/Calculator/History/index"
import {KeypadClass} from "@/components/Calculator/Keypad/index"



class CalculatorClass extends React.Component {

  render() {
    return (
      <CalculatorStyled>
        <DisplayClass total={this.props.total || this.props.prev || '0'}/>
        <HistoryClass/>
        <KeypadClass/>
        <ControlPanelClass/>
      </CalculatorStyled>
    )
  }
}

const mapStateToProps = state => ({
  total :state.calculator.total,
  prev : state.calculator.prev,
})

export default connect(mapStateToProps, {})(CalculatorClass)

CalculatorClass.propTypes ={
  total: PropTypes.string.isRequired,
  prev: PropTypes.string.isRequired,

}

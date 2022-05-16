import React from 'react'

import {KeypadStyled,Button} from "@/components/Calculator/Keypad/components"
import PropTypes from "prop-types"
import {addOperation , calculate , deleteAll, clearLast, addToDisplay , changeSign} from "@/reducers/calculatorReducer"
import {addToHistory} from "@/reducers/historyReducer"
import {connect} from "react-redux";


class KeypadClassC extends React.Component{

  updateDisplayHandler = button => {
    if (button === '0' && !this.props.total) {
      return
    }
    if (typeof Number(button) === 'number'){
     this.props.addToDisplay(button)
    }

  }

  clearLastHandler = () => {
    this.props.clearLast()
  }

  operatorHandler = button => {
    this.props.addOperation(button)
  }

  calculateHandler = () => {
    this.props.addToHistory(this.props.expression)
    this.props.total && this.props.calculate(this.props.expression)
  }

  deleteValueHandler = () => {
    this.props.deleteAll()
  }

  updateDotHandler = () => {
    if (!String(this.props.total).includes('.')) {
      this.props.addToDisplay('.')
    }
  }

  changeSignHandler = () => {
    this.props.changeSign()
  }

  btnValues = [
    [
      { value: 'C', method: this.deleteValueHandler },
      { value: '7', method: this.updateDisplayHandler },
      { value: '8', method: this.updateDisplayHandler },
      { value: '9', method: this.updateDisplayHandler },
      { value: '*', method: this.operatorHandler },
    ],
    [
      { value: '-', method: this.operatorHandler },
      { value: '4', method: this.updateDisplayHandler },
      { value: '5', method: this.updateDisplayHandler },
      { value: '6', method: this.updateDisplayHandler },
      { value: '/', method: this.operatorHandler },
    ],
    [
      { value: '+', method: this.operatorHandler },
      { value: '1', method: this.updateDisplayHandler },
      { value: '2', method: this.updateDisplayHandler },
      { value: '3', method: this.updateDisplayHandler },
      { value: '=', method: this.calculateHandler },
    ],
    [
      { value: '.', method: this.updateDotHandler },
      { value: '%', method: this.operatorHandler },
      { value: '0', method: this.updateDisplayHandler },
      { value: '+-', method: this.changeSignHandler },
      { value: 'CE', method: this.clearLastHandler },
    ],
  ]

  render() {
  return (
   <KeypadStyled>
     <div>
       {
         this.btnValues.flat().map((item,i) =>
           <Button key={`item${i}`} onClick={()=>{item.method(item.value)}}>
             {item.value}
           </Button>,
         )
       }
     </div>
   </KeypadStyled>
  )
}
}
const mapStateToProps = state => ({
  expression : state.calculator.expression,
  total : state.calculator.total,
})

export const KeypadClass = connect(mapStateToProps,{addToDisplay , clearLast , addOperation , addToHistory , calculate , deleteAll, changeSign })(KeypadClassC)

KeypadClassC.propTypes = {
  expression : PropTypes.array.isRequired,
  total : PropTypes.string.isRequired,
  addToDisplay: PropTypes.func.isRequired,
  clearLast: PropTypes.func.isRequired,
  addOperation: PropTypes.func.isRequired,
  addToHistory: PropTypes.func.isRequired,
  calculate: PropTypes.func.isRequired,
  deleteAll: PropTypes.func.isRequired,
  changeSign: PropTypes.func.isRequired,
}


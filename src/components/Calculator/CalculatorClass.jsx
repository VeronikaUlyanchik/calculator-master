import React from 'react'
import {CalculatorStyled} from "@/components/Calculator/components"
import {operate} from "@/helpers/calc-operation"
import {DisplayClass} from "@/components/Calculator/Display/DisplayClass"
import HistoryClass from "@/components/Calculator/History/HistoryClass"
import {KeypadClass} from "@/components/Calculator/Keypad/KeypadClass"
import {connect} from "react-redux";
import {addToHistory} from "@/reducers/historyReducer";

const operations = ['-', '+', '/', '*']
const additions = ['(', ')', '.']


class CalculatorClass extends React.Component {
  state = {
    total: '',
    prev: '',
    operation: '',
    remembered: '',
    expression: [],
  }

  handleClick = buttonName => {
    console.log(this.state)
    if (typeof buttonName === 'number' || additions.includes(buttonName)) {
      if (buttonName === 0 && !this.state.total) {
        return
      }
      if (!this.state.prev && this.state.operation === "=") {
        this.setState({
          ...this.state,
          total :'' + buttonName.toString(),
          operation: '',
          expression: [...this.state.expression, buttonName],
          },
        )
      } else {
        this.setState({
            ...this.state,
            total : this.state.total + buttonName.toString(),
            expression: [...this.state.expression, buttonName],
          },
        )
      }
    }


    if (operations.includes(buttonName)) {
      if (this.state.prev && this.state.operation) {
        if (buttonName === '*' || buttonName === "/") {
          if (this.state.operation === '+' || this.state.operation === '-') {
            if (this.state.total) {
              this.setState({
                  ...this.state,
                  total :'',
                  operation: buttonName,
                  expression: [...this.state.expression, buttonName],
                  remembered: this.state.operation + this.state.prev,
                  prev: this.state.total,
                },
              )
            } else {
              this.setState({
                  ...this.state,
                  operation: buttonName,
                  expression: [...this.state.expression.slice(0, this.state.expression.length - 1), buttonName],
                },
              )
            }
          } else {
            if (this.state.total) {
              this.setState({
                  ...this.state,
                  total:'',
                  operation: buttonName,
                  expression: [...this.state.expression, buttonName],
                  prev: this.state.total,
                },
              )
            } else {
              this.setState({
                  ...this.state,
                  operation: buttonName,
                expression: [...this.state.expression.slice(0, this.state.expression.length - 1), buttonName],
                },
              )
            }
          }
        } else {
          this.setState({
              ...this.state,
              operation: buttonName,
              prev:(operate(this.state.total, this.state.prev, this.state.operation)),
              total: '',
            },
          )
          if (operations.includes(this.state.expression[this.state.expression.length - 1])) {
            this.setState({
              ...this.state,
              expression: [...this.state.expression.slice(0, this.state.expression.length - 1), buttonName],
            })
          } else {
            this.setState({
              ...this.state,
              expression: [...this.state.expression, buttonName],
            })
          }
        }
      } else {
        let newSt = {
          ...this.state,
          operation: buttonName,
          prev: this.state.total,
          total:'',
        }
        // this.setState(state => {
        //  debugger
        //   return {
        //     ...state,
        //     operation: buttonName, +
        //     prev: state.total,
        //     total:'',
        //   }})

        if (this.state.operation === '=') {
          newSt = {
            ...newSt,
            expression: [...newSt.expression, newSt.total, buttonName],
          }
        } else {
          newSt = {
            ...newSt,
            expression: [...newSt.expression, buttonName],
          }
        }
        this.setState(newSt)
      }
    }
    if (buttonName === "C") {
      this.setState({
          ...this.state,
          total:'',
          operation: '',
          expression: [],
          remembered:'',
          prev: '',
        },
      )
    }
    if (buttonName === "CE") {
      this.setState({
          ...this.state,
          total:'',
          expression: [...this.state.expression.slice(0, this.state.expression.length - 1)],
        },
      )
    }
    if (buttonName === "=") {
      if(this.state.prev && this.state.operation) {
        const remNum = Number(this.state.remembered || 0)
        this.setState({
            ...this.state,
            total:(remNum >= 0 ? remNum + Number(operate(this.state.total, this.state.prev, this.state.operation))
              : Math.abs(remNum) - Number(operate(this.state.total, this.state.prev, this.state.operation))).toString(),
            operation: '=',
            expression: [],
            remembered:'',
            prev: '',
          },
        )
       this.props.addToHistory(this.state.expression)
      }
    }
    if (additions.includes(buttonName)) {
      this.setState({
          ...this.state,
          total:buttonName,
          expression: buttonName,
        },
      )
    }
  }

  render() {
    return (
      <CalculatorStyled>
        <DisplayClass total={this.state.total || this.state.prev || 0}/>
        <HistoryClass/>
        <KeypadClass onHandlerClick={this.handleClick}/>
      </CalculatorStyled>
    )
  }
}

export default connect(null, {addToHistory})(CalculatorClass)


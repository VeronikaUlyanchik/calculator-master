import React from 'react'
import {KeypadStyled, Button} from "@/components/Calculator/Keypad/components"
import {useSelector, useDispatch} from "react-redux"
import {addOperation, calculate, deleteAll, clearLast, addToDisplay, changeSign} from "@/reducers/calculatorReducer"
import {addToHistory} from "@/reducers/historyReducer"


export const Keypad = () => {
  const dispatch = useDispatch()
  const expression = useSelector(state => state.calculator.expression)
  const total = useSelector(state => state.calculator.total)
  const updateDisplayHandler = button => {
    if (button === '0' && !total) {
      return
    }
    if (typeof Number(button) === 'number') {
        dispatch(addToDisplay(button))
      }

  }

  const clearLastHandler = () => {
    dispatch(clearLast())
  }

  const operatorHandler = button => {
    dispatch(addOperation(button))
  }

  const calculateHandler = () => {
    total && dispatch(addToHistory(expression))
    dispatch(calculate(expression))
  }

  const deleteValueHandler = () => {
    dispatch(deleteAll())
  }

  const updateDotHandler = () => {
    if (!String(total).includes('.')) {
      dispatch(addToDisplay('.'))
    }
  }

  const changeSignHandler = () => {
    dispatch(changeSign())
  }
  const btnValues = [
    [
      {value: 'C', method: deleteValueHandler},
      {value: '7', method: updateDisplayHandler},
      {value: '8', method: updateDisplayHandler},
      {value: '9', method: updateDisplayHandler},
      {value: '*', method: operatorHandler},
    ],
    [
      {value: '-', method: operatorHandler},
      {value: '4', method: updateDisplayHandler},
      {value: '5', method: updateDisplayHandler},
      {value: '6', method: updateDisplayHandler},
      {value: '/', method: operatorHandler},
    ],
    [
      {value: '+', method: operatorHandler},
      {value: '1', method: updateDisplayHandler},
      {value: '2', method: updateDisplayHandler},
      {value: '3', method: updateDisplayHandler},
      {value: '=', method: calculateHandler},
    ],
    [
      {value: '.', method: updateDotHandler},
      {value: '%', method: operatorHandler},
      {value: '0', method: updateDisplayHandler},
      {value: '+-', method: changeSignHandler},
      {value: 'CE', method: clearLastHandler},
    ],
  ]
  return (
    <KeypadStyled>
      <div>
        {
          btnValues.flat().map((item, i) =>
            <Button key={`item${i}`} onClick={() => {
              item.method(item.value)
            }}>
              {item.value}
            </Button>,
          )
        }
      </div>
    </KeypadStyled>
  )
}



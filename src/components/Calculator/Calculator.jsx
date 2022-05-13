import React, {useState} from 'react'
import {CalculatorStyled} from "@/components/Calculator/components"
import {History} from "@/components/Calculator/History/History"
import {Keypad} from "@/components/Calculator/Keypad/Keypad"
import {Display} from "@/components/Calculator/Display/Display"
import {operate} from "@/helpers/calc-operation"
import {useDispatch} from "react-redux"
import {addToHistory} from "@/reducers/historyReducer";
import {expressionOperate} from "@/helpers/calc-operation";
import {ControlPanel} from "@/components/Calculator/ControlPanel/ControlPanel";

const operations = ['-', '+', '/', '*']
const additions = ['(', ')']


export const Calculator = () => {
  const dispatch = useDispatch()
  const [total, setTotal] = useState('')
  const [prev, setPrev] = useState('')
  const [operation, setOperation] = useState('')
  const [remembered, setRemembered] = useState('')
  const [expression, setExpression] = useState([])
  const [expressionMode, setExpressionMode]= useState(false)


  const handleClick = buttonName => {
    if (additions.includes(buttonName)) {
      setExpressionMode(true)
    }
    if(!expressionMode) {
      debugger
      if (typeof buttonName === 'number' || additions.includes(buttonName)) {
        if (buttonName === 0 && !total) {
          return
        }
        if (!prev && operation === "=") {
          setTotal('' + buttonName.toString())
          setOperation('')
          setExpression([...expression, buttonName])
        } else {
          setTotal(total + buttonName.toString())
          setExpression([...expression, buttonName])
        }
      }


      if (operations.includes(buttonName)) {
        if (prev && operation) {
          if (buttonName === '*' || buttonName === "/") {
            if (operation === '+' || operation === '-') {
              if (total) {
                setRemembered(operation + prev)
                setPrev(total)
                setTotal('')
                setOperation(buttonName)
                setExpression([...expression, buttonName])
              } else {
                setOperation(buttonName)
                setExpression([...expression.slice(0, expression.length - 1), buttonName])
              }
            } else {
              if (total) {
                setPrev(total)
                setTotal('')
                setOperation(buttonName)
                setExpression([...expression, buttonName])
              } else {
                setOperation(buttonName)
                setExpression([...expression.slice(0, expression.length - 1), buttonName])
              }
            }
          } else {
            setPrev(operate(total, prev, operation))
            setTotal('')
            setOperation(buttonName)
            if (operations.includes(expression[expression.length - 1])) {
              setExpression([...expression.slice(0, expression.length - 1), buttonName])
            } else {
              setExpression([...expression, buttonName])
            }
          }

        } else {
          setPrev(total)
          setTotal('')
          setOperation(buttonName)
          if (operation === '=') {
            setExpression([...expression, total, buttonName])
          } else {
            setExpression([...expression, buttonName])
          }
        }
      }
      if (buttonName === "C") {
        setPrev('')
        setTotal('')
        setOperation('')
        setRemembered('')
        setExpression([])
      }
      if (buttonName === "CE") {
        setTotal('')
        setExpression([...expression.slice(0, expression.length - 1)])
      }
      if (buttonName === "=") {
        if (prev && operation) {
          const remNum = Number(remembered || 0)
          setTotal((remNum >= 0 ? remNum + Number(operate(total, prev, operation))
            : Math.abs(remNum) - Number(operate(total, prev, operation))).toFixed(3).toString())
          setPrev('')
          setRemembered('')
          setOperation("=")
          dispatch(addToHistory(expression))
          setExpression([])
        }
      }
    }
    else {
      if (buttonName === "=") {
         setTotal(expressionOperate(total.toString()))
      }
      else{
        setTotal(total+buttonName)
        setExpression([...expression, buttonName])
      }

    }
  }


  return (
    <CalculatorStyled>
      <Display total={total || prev || 0}/>
      <History/>
      <Keypad onHandlerClick={handleClick}/>
      <ControlPanel/>
    </CalculatorStyled>
  )
}



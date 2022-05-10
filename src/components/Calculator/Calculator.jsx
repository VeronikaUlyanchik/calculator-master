import React, {useState} from 'react'
import {CalculatorStyled} from "@/components/Calculator/components"
import {History} from "@/components/Calculator/History/History"
import {Keypad} from "@/components/Calculator/Keypad/Keypad"
import {Display} from "@/components/Calculator/Display/Display"
import {operate} from "@/helpers/calc-operation"

const operations = ['-', '+', '/', '*']
const additions = ['(', ')', '.']
const expressionsArray = []

export const Calculator = () => {

  const [total, setTotal] = useState('')
  const [prev, setPrev] = useState('')
  const [operation, setOperation] = useState('')
  const [remembered, setRemembered] = useState('')
  const [expression, setExpression] = useState([])


  const handleClick = buttonName => {

    if (typeof buttonName === 'number' || additions.includes(buttonName)) {
      if (buttonName === 0 && !total) {
        return
      }
      if (!prev && operation === "=") {
        setTotal('' + buttonName.toString())
        setOperation('')
        setExpression([...expression,buttonName])
      } else {
        setTotal(total + buttonName.toString())
        setExpression([...expression,buttonName])
      }
    }
    if (operations.includes(buttonName)) {
      if (prev && operation) {
        if (buttonName === '*' || buttonName === "/") {
          if (operation === '+' || operation === '-') {
            if(total){
              setRemembered(operation + prev)
              setPrev(total)
              setTotal('')
              setOperation(buttonName)
              setExpression([...expression,buttonName])
            }
            else{
              setOperation(buttonName)
              setExpression([...expression.slice(0, expression.length-1),buttonName])
            }
          } else {
            if(total) {
              setPrev(total)
              setTotal('')
              setOperation(buttonName)
              setExpression([...expression, buttonName])
            } else {
              setOperation(buttonName)
              setExpression([...expression.slice(0, expression.length-1),buttonName])
            }
          }
        } else {
          setPrev(operate(total, prev, operation))
          setTotal('')
          setOperation(buttonName)
          if (operations.includes(expression[expression.length-1])){
            setExpression([...expression.slice(0, expression.length-1),buttonName])
          }
            else{
            setExpression([...expression, buttonName])
          }
        }

      } else {
        setPrev(total)
        setTotal('')
        setOperation(buttonName)
        setExpression([...expression,buttonName])
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
      setExpression([...expression.slice(0, expression.length-1)])
    }
    if (buttonName === "=") {
      if (prev && operation) {
        const remNum = Number(remembered || 0)
        setTotal((remNum >= 0 ? remNum + Number(operate(total, prev, operation))
          : Math.abs(remNum) - Number(operate(total, prev, operation))).toString())
        setPrev('')
        setRemembered('')
        setOperation("=")
        setToHistory()
        setExpression([])
      }
    }
    if (additions.includes(buttonName)) {
      setExpression(buttonName)
      setTotal(buttonName)
    }
  }

  const setToHistory = () => {
    return expression
  }
  console.log(expression)
  return (
    <CalculatorStyled>
      <Display total={total || prev || 0}/>
      <History />
      <Keypad handleClick={handleClick}/>
    </CalculatorStyled>
  )
}



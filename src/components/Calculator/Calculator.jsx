import React, {useState} from 'react'
import {CalculatorStyled} from "@/components/Calculator/components"
import {History} from "@/components/Calculator/History/History"
import {Keypad} from "@/components/Calculator/Keypad/Keypad"
import {Display} from "@/components/Calculator/Display/Display"
import {operate} from "@/helpers/calc-operation"

const operations = ['-', '+', '\\', '*']
const additions = ['(', ')', '.']
const expressionsArray = []

export const Calculator = () => {

  const [total, setTotal] = useState('')
  const [next, setNext] = useState('')
  const [operation, setOperation] = useState('')
  const [remembered, setRemembered] = useState('')
  const [expression, setExpression] = useState('')



  const handleClick = buttonName => {

  debugger
    if (typeof buttonName === 'number' || additions.includes(buttonName)) {
      if (buttonName === 0 && !total) {
        return
      }
      if(!next && operation==="="){
        setTotal('' + buttonName.toString())
        setOperation('')
      }
      else{
        setTotal(total + buttonName.toString())
      }
    }
    if (operations.includes(buttonName)) {
      if (next && operation) {
        if(buttonName !=='*' && buttonName !=="\\"){
          setNext(operate(total, next, operation))
          setTotal('')
          setOperation(buttonName)
        }
        else {
          setRemembered(operation + next)
          setNext(total)
          setTotal('')
          setOperation(buttonName)
        }

      }
      else {
        setNext(total)
        setTotal('')
        setOperation(buttonName)
      }
    }
    if (buttonName === "C") {
      setNext('')
      setTotal('')
      setOperation('')
      setRemembered('')
    }
    if (buttonName === "CE") {
      setTotal('')
    }
    if (buttonName === "=") {
      if (next && operation) {
        const remNum = Number(remembered||0)
        setTotal((remNum>=0 ? remNum + Number(operate(total, next, operation))
        : Math.abs(remNum) - Number(operate(total, next, operation))).toString())
        setNext('')
        setRemembered('')
        setOperation("=")
      }
    }
    if(additions.includes(buttonName)){
      setExpression(buttonName)
      setTotal(buttonName)
    }
  }

  return (
    <CalculatorStyled>
      <Display total={total || next || 0}/>
      <History/>
      <Keypad handleClick={handleClick}/>
    </CalculatorStyled>
  )
}



import React, {useState} from 'react'
import {CalculatorStyled} from "@/components/Calculator/components"
import {History} from "@/components/Calculator/History/History"
import {Keypad} from "@/components/Calculator/Keypad/Keypad"
import {Display} from "@/components/Calculator/Display/Display"
import {operate} from "@/helpers/calc-operation"

const operations = ['-', '+', '\\', '*']

export const Calculator = () => {
  const [total, setTotal] = useState('')
  const [next, setNext] = useState('')
  const [operation, setOperation] = useState('')

  const handleClick = buttonName => {
    console.log(next, operation)
    if (typeof buttonName === 'number') {
      if (buttonName === 0 && !total) {
        return
      }
      if(!next && operation==="="){
        setTotal('' + buttonName.toString())
        setOperation('')
      }
      // if(operations.includes(operation)){
      //   setNext((Number(total) + Number(next) + buttonName).toString())
      // }
      else{
        setTotal(total + buttonName.toString())
      }

      // if(total) {
      //   setTotal('' + buttonName.toString())
      // }
      // if (operation) {
      //   if (next) {
      //     setNext(next + buttonName)
      //   }
      //   setNext(buttonName)
      // }
      // if (next) {
      //   const next1 = next === "0" ? buttonName : Number(next) + buttonName
      //   setNext(next1)
      //   setTotal('')
      // } else {
      //   setNext(buttonName.toString())
      //   setTotal('')
      // }

    }

    if (operations.includes(buttonName)) {
      if (next && operation) {
        setNext(operate(total, next, operation))
        setTotal('')
        setOperation(buttonName)
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
    }
    if (buttonName === "CE") {
      setTotal('')
    }
    if (buttonName === "=") {
      if (next && operation) {
        setTotal(operate(total, next, operation))
        setNext('')
        setOperation("=")
      }
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



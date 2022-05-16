import React, {useState} from 'react'
import {CalculatorStyled} from "@/components/Calculator/components"
import {Keypad} from "@/components/Calculator/Keypad/Keypad"
import {Display} from "@/components/Calculator/Display/Display"
import {ControlPanel} from "@/components/Calculator/ControlPanel/ControlPanel"
import {useSelector} from "react-redux"
import History from "@/components/Calculator/History/index"



export const Calculator = () => {
  const total = useSelector(state => state.calculator.total)
  const prev = useSelector(state => state.calculator.prev)

  return (
    <CalculatorStyled>
      <Display total={total || prev || 0}/>
      <History/>
      <Keypad/>
      <ControlPanel/>
    </CalculatorStyled>
  )
}



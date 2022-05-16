import React  from 'react'
import {CalculatorStyled} from "@/components/Calculator/components"
import {useSelector} from "react-redux"
import {ControlPanel} from "./ControlPanel"
import {Display} from "@/components/Calculator/Display/index"
import {Keypad} from "@/components/Calculator/Keypad/index"
import {History} from "@/components/Calculator/History/index"




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



import React from 'react'
import {HeaderStyled} from "@/components/Header/components"
import {NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import {changeMode} from "@/reducers/modeReducer"

export const Header = () => {
  const dispatch = useDispatch()
  const funcMode = useSelector(state => state.mode.functionalMode)

  const toggleMode = () => {
    dispatch(changeMode())
  }

  return (
    <HeaderStyled>
      <h3 onClick={toggleMode}> {funcMode ? 'Functional ' : 'Class '}Calculator App</h3>
      <div>
        <NavLink to="/calculator-home"> Home </NavLink>
        <NavLink to="/calculator-settings"> Settings </NavLink>
      </div>
    </HeaderStyled>
  )
}



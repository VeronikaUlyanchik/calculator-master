import React from 'react'
import {HeaderStyled} from "@/components/Header/components"
import {NavLink} from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderStyled>
      <h3>Calculator App</h3>
      <div>
        <NavLink to="/calculator-home"> Home </NavLink>
        <NavLink to="/calculator-settings"> Settings </NavLink>
      </div>
    </HeaderStyled>
  )
}



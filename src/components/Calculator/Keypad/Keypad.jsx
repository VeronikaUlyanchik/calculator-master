import React , {useState} from 'react'

import {KeypadStyled,Button} from "@/components/Calculator/Keypad/components"
import PropTypes from "prop-types"


const btnValues = [
  ["C", 7, 8, 9 , "*"],
  ["-", 4, 5, 6 , "\\" ],
  ["+", 1, 2, 3 , "="],
  [".", "(", 0, ")", "CE"],
]

export const Keypad = props => {

  const onClickHandler = n => {
    props.handleClick(n)
  }

  return (
   <KeypadStyled>
     <div>
       {
         btnValues.flat().map(item =>
           <Button key={`item${item}`} onClick={()=>onClickHandler(item)}>
             {item}
           </Button>,
         )
       }
     </div>

   </KeypadStyled>
  )
}

Keypad.propTypes = {
  handleClick: PropTypes.func.isRequired,
}


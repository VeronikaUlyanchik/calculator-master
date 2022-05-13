import React , {useState} from 'react'

import {KeypadStyled,Button} from "@/components/Calculator/Keypad/components"
import PropTypes from "prop-types"


const btnValues = [
  ["C", 7, 8, 9 , "*"],
  ["-", 4, 5, 6 , "/" ],
  ["+", 1, 2, 3 , "="],
  [".", "(", 0, ")", "CE"],
]

export class KeypadClass extends React.Component{

   onClickHandler = n => {
    this.props.onHandlerClick(n)
  }

  render() {
  return (
   <KeypadStyled>
     <div>
       {
         btnValues.flat().map(item =>
           <Button key={`item${item}`} onClick={()=>this.onClickHandler(item)}>
             {item}
           </Button>,
         )
       }
     </div>
   </KeypadStyled>
  )
}
}

KeypadClass.propTypes = {
  onHandlerClick: PropTypes.func.isRequired,
}


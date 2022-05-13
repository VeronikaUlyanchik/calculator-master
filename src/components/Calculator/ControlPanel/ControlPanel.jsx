import React from 'react'
import {PanelStyled} from "@/components/Calculator/ControlPanel/components"
import {useDispatch , useSelector} from "react-redux"
import {closeOpenHistory} from "@/reducers/historyReducer"


export const ControlPanel = () => {
  const dispatch = useDispatch()
  const opened = useSelector(state => state.history.openHistory)

  const toggleHistoryMode = () => {
    dispatch(closeOpenHistory())
  }

  return (
    <PanelStyled onClick={toggleHistoryMode}>
      {opened ? "Close" : "Open"} History
    </PanelStyled>
  )
}



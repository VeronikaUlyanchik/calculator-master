import React from 'react'
import { useSelector} from "react-redux"
import {Settings} from "@/components/Settings/Settings"
import SettingsClass from "@/components/Settings/SettingsClass"


export const Setting = () => {

  const funcMode = useSelector(state => state.mode.functionalMode)

  return (
    <>
    {funcMode ? <Settings/> : <SettingsClass/>}
    </>
  )
}







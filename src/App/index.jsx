import React, {  Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import {Header} from "@/components/Header/Header"
import Home from "@/pages/Home/index"
import {Setting} from "@/pages/Settings/Settings"
import SettingClass from "@/pages/Settings/SettingsClass"
import lightTheme from "@/lightTheme"
import {ThemeProvider} from "styled-components"
import GlobalStyles from "@/globalStyles"
import {useSelector} from "react-redux"
import darkTheme from "@/darkTheme"
import coloredTheme from "@/coloredTheme";


export default () => {
const commonTheme = useSelector(state => state.theme.theme)
  let theme = lightTheme
  if(commonTheme === 'Light theme'){
    theme = lightTheme
  }
  if(commonTheme === 'Colored theme'){
    theme = coloredTheme
  }
  if(commonTheme === 'Dark theme'){
    theme = darkTheme
  }

  return (
  <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <Header/>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/calculator-home">
        <Home/>
      </Route>
      <Route path="/calculator-settings">
        <Setting/>
      </Route>
    </Switch>
  </ThemeProvider>
  )
}

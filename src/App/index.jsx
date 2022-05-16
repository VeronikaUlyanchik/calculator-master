import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import {Header} from "@/components/Header/Header"
import Home from "@/pages/Home/index"
import {Setting} from "@/pages/Settings/Setting"
import lightTheme from "@/lightTheme"
import {ThemeProvider} from "styled-components"
import GlobalStyles from "@/globalStyles"
import {useSelector} from "react-redux"
import darkTheme from "@/darkTheme"
import coloredTheme from "@/coloredTheme"


export default () => {

  const commonTheme = useSelector(state => state.theme.theme)
  let theme = lightTheme
  switch (commonTheme) {
    case 'Light theme':
      theme = lightTheme
      break
    case 'Colored theme':
      theme = coloredTheme
      break
    case 'Dark theme':
      theme = darkTheme
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Header/>
      <Switch>
        <Route path="/" exact
               render={() => <Redirect to="/home"/>}>
          <Home/>
        </Route>
        <Route path="/home"
               render={() => <Home/>}/>
        <Route path="/settings"
               render={() => <Setting/>}/>
      </Switch>
    </ThemeProvider>
  )
}

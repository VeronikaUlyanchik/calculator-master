import React, {  Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import Loader from '@/components/Loader'
import {Header} from "@/components/Header/Header"
import Home from "@/pages/Home/index"
import {Setting} from "@/pages/Settings/Settings"


export default () => (
  <Suspense fallback={<Loader />}>
     <Header/>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/calculator-home">
        <Home />
      </Route>
      <Route path="/calculator-settings">
        <Setting />
      </Route>
    </Switch>
  </Suspense>
)

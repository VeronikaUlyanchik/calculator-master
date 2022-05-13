import React from 'react'

import { PageLayout } from '@/layouts'
import {Calculator} from "@/components/Calculator/Calculator"
import CalculatorClass from "@/components/Calculator/CalculatorClass"
import {useSelector} from "react-redux"


// import { CalculatorComponent} from './components'

export default () => {
  const funcMode = useSelector(state => state.mode.functionalMode)
  return (
    <PageLayout>
      {funcMode ? <Calculator/> :<CalculatorClass/>}
    </PageLayout>
  )
}

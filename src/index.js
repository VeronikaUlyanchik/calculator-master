import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Application from '@/App'

import { store } from '@/store'
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Application />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
)

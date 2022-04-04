import React from 'react'
import ReactDOM from 'react-dom'
import { App } from 'App'

import { WindowWidthProvider } from 'components/providers/index'

ReactDOM.render(
  <React.StrictMode>
    <WindowWidthProvider>
      <App />
    </WindowWidthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

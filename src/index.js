import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { AppContext } from './components/App/context'

ReactDOM.render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>,
  document.getElementById('root')
)

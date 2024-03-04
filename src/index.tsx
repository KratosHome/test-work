import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './app'
import { Provider } from 'react-redux'
import { store } from './store/store'

const root = ReactDOM.createRoot(
  document.querySelector('#root') as HTMLElement,
)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
)

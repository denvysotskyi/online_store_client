import React, { createContext } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/app/App'
import UserStore from './store/user/UserStore'
import DeviceStore from './store/device/DeviceStore'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.sass'

export const Context = createContext({})

const root = createRoot(document.getElementById('root'))
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    device: new DeviceStore()
  }}>
    <App />
  </Context.Provider>
)

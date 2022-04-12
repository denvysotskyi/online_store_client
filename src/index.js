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
    userStore: new UserStore(),
    deviceStore: new DeviceStore()
  }}>
    <App />
  </Context.Provider>
)

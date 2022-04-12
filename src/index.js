import React, { createContext } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/app/App'
import UserStore from './store/UserStore'
import DeviceStore from './store/DeviceStore'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.sass'

export const UserContext = createContext({})

const root = createRoot(document.getElementById('root'))
root.render(
  <UserContext.Provider value={{
    user: new UserStore(),
    device: new DeviceStore()
  }}>
    <App />
  </UserContext.Provider>
)

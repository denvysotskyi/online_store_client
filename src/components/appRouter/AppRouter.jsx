import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from 'react-router'
import AdminPanelPage from '../../pages/adminPanel/AdminPanelPage'
import AuthPage from '../../pages/auth/AuthPage'
import BasketPage from '../../pages/basket/BasketPage'
import DevicePage from '../../pages/device/DevicePage'
import ShopPage from '../../pages/shop/ShopPage'
import { useContext } from 'react'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'

const AppRouter = observer(() => {

  const { userStore } = useContext(Context)

  return (
    <Router>
      {
        userStore._isAuth && <Routes>
          <Route path={'/'}
                 element={<AdminPanelPage />}
          />
          <Route path={'/basket'}
                 element={<BasketPage />}
          />
          <Route path='*'
                 element={<AdminPanelPage />}
          />
        </Routes>
      }
      {
        !userStore._isAuth && <Routes>
          <Route path={'/shop'}
                 element={<ShopPage />}
          />
          <Route path={'/login'}
                 element={<AuthPage />}
          />
          <Route path={'/registration'}
                 element={<AuthPage />}
          />
          <Route path={'/device/:id'}
                 element={<DevicePage />}
          />
          <Route path='*'
                 element={<ShopPage />}
          />
        </Routes>
      }
    </Router>
  )
})

export default AppRouter
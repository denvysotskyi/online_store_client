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
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../../utils/consts";

const AppRouter = observer(() => {

  const { userStore } = useContext(Context)

  return (
    <Router>
      {
        userStore._isAuth && <Routes>
          <Route path={ADMIN_ROUTE}
                 element={<AdminPanelPage />}
          />
          <Route path={BASKET_ROUTE}
                 element={<BasketPage />}
          />
          <Route path='*'
                 element={<AdminPanelPage />}
          />
        </Routes>
      }
      {
        !userStore._isAuth && <Routes>
          <Route path={SHOP_ROUTE}
                 element={<ShopPage />}
          />
          <Route path={LOGIN_ROUTE}
                 element={<AuthPage />}
          />
          <Route path={REGISTRATION_ROUTE}
                 element={<AuthPage />}
          />
          <Route path={DEVICE_ROUTE}
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
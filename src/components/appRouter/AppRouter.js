import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from 'react-router'
import AdminPanelPage from '../../pages/AdminPanelPage'
import AuthPage from '../../pages/AuthPage'
import BasketPage from '../../pages/BasketPage'
import DevicePage from '../../pages/DevicePage'
import ShopPage from '../../pages/ShopPage'
import { useContext } from 'react'
import { UserContext } from '../../index'

const AppRouter = () => {

  const { user: { _isAuth }} = useContext(UserContext)

  return (
    <Router>
      {
        _isAuth && <Routes>
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
        !_isAuth && <Routes>
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
}

export default AppRouter
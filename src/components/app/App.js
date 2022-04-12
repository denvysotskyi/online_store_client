import AppRouter from '../appRouter/AppRouter'
import NavbarComponent from '../navbar/NavBar'
import styles from './App.module.sass'

const App = () => (
    <div className={styles.container}>
      <NavbarComponent />
      <AppRouter />
    </div>
  )

export default App
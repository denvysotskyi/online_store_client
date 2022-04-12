import AppRouter from '../appRouter/AppRouter'
import styles from './App.module.sass'

const App = () => (
    <div className={styles.container}>
      <AppRouter />
    </div>
  )

export default App
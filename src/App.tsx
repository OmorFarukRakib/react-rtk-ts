import styles from './App.module.css'
import classnames from 'classnames'
import Cake from './components/Cake'
import IceCream from './components/Icecream'
import Users from './components/Users'
function App() {

  return (
    <div className={classnames(styles['app'])}>
      <Cake/>
      <IceCream/>
      <Users/>
    </div>
  )
}

export default App

import './App.css';
import Favorites from './components/Favorites'
import Meals from './components/Meals'
import Modal from './components/Modal'
import Search from './components/Search'

import useAppContext from './context'

function App() {
  const {showModal} = useAppContext()

  return (
    <main>
      <Search />
      {/*<Favorites />*/}
      <Meals />
      {showModal && <Modal />}
    </main>
  )
}

export default App;

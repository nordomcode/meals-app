import './App.css';
import Favorites from './components/Favorites'
import Meals from './components/Meals'
import Modal from './components/Modal'
import Search from './components/Search'

import useAppContext from './context'

const getFavoritesFromLocalStaorage = () => {
  let favorites = localStorage.getItem('favorites');

  if(favorites) {
    favorites = JSON.parse(localStorage.getItem('favorites'))
  } else {
    favorites = []
  }

  return favorites
}


function App() {
  const {showModal, favorites} = useAppContext()

  return (
    <main>
      <Search />
      {favorites.length > 0 && <Favorites />}
      <Meals />
      {showModal && <Modal />}
    </main>
  )
}

export default App;

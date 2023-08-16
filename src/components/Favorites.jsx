import useAppContext from '../context'

const Favorites = () => {

  const {favorites, selectMeal, removeFromFavorites} = useAppContext()

  return (
    <section className='favorites'>
      <div className="favorites-content">
        <h5>Favorites</h5>
        <div className="favorites-container">
          {favorites.map((item) => {
            const {idMeal: id, strMealThumb: image} = item;

            return <div key={id} className='favorite-item'>
              <img src={image} className='favorites-img img'/>
              <button className='remove-btn' onClick={() => removeFromFavorites(id)}>remove</button>
            </div>
          })}
        </div>
      </div>
    </section>
  )
}

export default Favorites
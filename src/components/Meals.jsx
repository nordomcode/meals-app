import useAppContext from '../context'
import {FaRegThumbsUp} from 'react-icons/fa'

const Meals = () => {
  const {loading, meals, selectMeal, addToFavorites, removeFavorites} = useAppContext()

  if (loading) {
    return <section className='section'>
      <h4>Loading...</h4>
    </section>
  }

  if(meals.length < 1) {
    return <section className='section'>
      <h4>No meals matched your searched term. lease try again.</h4>
    </section>
  }

  return (
    <section className='section-center'>
      {meals.map((singleMeal) => {
        const {idMeal: id, strMeal: title, strMealThumb: image} = singleMeal
        return (
          <article key={id} className='single-meal'>
            <img src={image} className='img' onClick={() => selectMeal(id)}/>
            <footer>
              <h5>{title}</h5>
              <button className='like-btn' onClick={() => addToFavorites(id)}><FaRegThumbsUp /></button>
            </footer>
          </article>
        )
      })}
    </section>
  )
}

export default Meals
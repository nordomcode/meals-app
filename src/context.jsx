import {createContext, useContext, useEffect, useState} from 'react'
import axios from 'axios'

const AppContext = createContext()

const useAppContext = () => {
  return useContext(AppContext)
}
const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

export const AppProvider = ({children}) => {

  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
 
  const fetchMeals = async (url) => {
    setLoading(true)
    try {
     const {data} = await axios.get(url)

     if(data.meals) {
      setMeals(data.meals)
     } else {
      setMeals([])
     }
     
    
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const fetchRandomMeal = async () => {
    setLoading(true)
    try {
     fetchMeals(randomMealUrl)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchMeals(allMealsUrl)
  }, [])

  useEffect(() => {
    if(!searchTerm) {
      fetchMeals(`${allMealsUrl}${searchTerm}`)
    }
  }, [searchTerm])

  return <AppContext.Provider value={{loading, meals, setSearchTerm, fetchRandomMeal}}>
    {children}
  </AppContext.Provider>
}

export default useAppContext
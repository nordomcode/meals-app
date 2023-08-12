import {createContext, useContext, useEffect, useState} from 'react'
import axios from 'axios'

const AppContext = createContext()

const useAppContext = () => {
  return useContext(AppContext)
}
const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'www.themealdb.com/api/json/v1/1/random.php'

export const AppProvider = ({children}) => {

  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)
 
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


  useEffect(() => {
    fetchMeals(allMealsUrl)

  }, [])

  return <AppContext.Provider value={{loading, meals}}>
    {children}
  </AppContext.Provider>
}

export default useAppContext
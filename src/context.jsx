import {createContext, useContext, useEffect} from 'react'

const AppContext = createContext()

const useAppContext = () => {
  return useContext(AppContext)
}

export const AppProvider = ({children}) => {

  useEffect(() => {
    const fetchData = async () => {
      try {
       const response = await fetch('https://randomuser.me/api/')
       const data = await response.json()
       console.log(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()

  }, [])

  return <AppContext.Provider value={{name: 'john', status: 'student'}}>
    {children}
  </AppContext.Provider>
}

export default useAppContext
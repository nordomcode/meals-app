import {createContext, useContext} from 'react'

const AppContext = createContext()

const useAppContext = () => {
  return useContext(AppContext)
}

export const AppProvider = ({children}) => {
  return <AppContext.Provider value={{name: 'john', status: 'student'}}>
    {children}
  </AppContext.Provider>
}

export default useAppContext
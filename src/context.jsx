import {createContext} from 'react'

const AppContext = createContext()

export const AppProvider = ({children}) => {
  return <AppContext.Provider value='hello'>
    {children}
  </AppContext.Provider>
}

export default AppContext
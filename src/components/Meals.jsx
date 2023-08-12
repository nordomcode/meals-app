import {useContext} from 'react'
import AppContext from '../context'

const Meals = () => {
  const context = useContext(AppContext)

  console.log(context)

  return (
    <div>Meals Component</div>
  )
}

export default Meals
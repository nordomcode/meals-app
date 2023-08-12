import useAppContext from '../context'

const Meals = () => {
  const context = useAppContext()

  console.log(context)

  return (
    <div>Meals Component</div>
  )
}

export default Meals
import {useState} from 'react'
import useAppContext from '../context'

const Search = () => {
  const [text, setText] = useState('')
  const {setSearchTerm, fetchRandomMeal} = useAppContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text) {
      setSearchTerm(text)

    }
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleRandomMeal = (e) => {
    setSearchTerm('')
    setText('')
    fetchRandomMeal()
  }

  
  return (
    <header className='search-container'>
      <form onSubmit={handleSubmit}>
        <input type="text" className="form-input" placeholder='type your favorite meal' onChange={handleChange} value={text}/>
        <button className="btn" type='submit' >Search</button>
        <button className="btn btn-hipster" type='button' onClick={handleRandomMeal}>Surprise me!</button>
        </form>
      
    </header>
  )
}

export default Search
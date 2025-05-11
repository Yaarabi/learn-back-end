
import { useState, createContext } from 'react'
import './App.css'
import Header from './component/header'
import List from './component/list'
import Form from './component/form/form'

const Context = createContext()

function App() {

  let [showList, setShowList]=useState(false)
  let [showForm, setShowForm]=useState(false)

  return (
    <Context.Provider value = {{setShowList, setShowForm}}>
    <div className='container'>
      <Header/>
      {showList && <List/>}
      {showForm && <Form/>}
    </div>
    </Context.Provider>
  )
}

export default App
export { Context }

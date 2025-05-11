
import { useState, createContext } from 'react'
import './App.css'
import Header from './component/header'
import List from './component/list'
import Form from './component/form/form'


const Context = createContext()

function App() {

  let [showList, setShowList]=useState(false)
  let [showForm, setShowForm]=useState(false)
  let [a, setDb]=useState(0)
  let [showAction, setAction]=useState(false)
  let [typeAction, setType]=useState(false)

  return (
    <Context.Provider value = {{setShowList, setShowForm, a, setDb, showAction, setAction, typeAction, setType}}>
    <div className='container'>
      <Header />
      {showList && <List toUp = {a}/>}
      {showForm && <Form/>}
    </div>
    </Context.Provider>
  )
}

export default App
export { Context }

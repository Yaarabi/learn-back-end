

import { useState, useEffect, useContext } from "react"
import Row from "./row"
import { createContext } from "react"
import { Context } from "../App"

const Db = createContext()

const List = (props) => {


  const {showAction} = useContext(Context)
  let [data, setData]=useState([])

  useEffect(()=>{
      fetch("http://localhost:4000/api/studs")
      .then((res)=>res.json())
      .then((resu)=>{
        console.log(resu[0]._id)
        setData(resu)
      }).catch((err)=>{
        console.log(err)
      })
  }, [props.toUp])


  return (
    <Db.Provider value = {data}>
    <main>
    <table>
      <thead>
        <tr>
          <th>N</th>
          <th style={ {width:"15vw"} }>Name</th>
          <th style={ {width:"15vw"} }>Email</th>
          <th>Groupe</th>
          <th>Note</th>
          {showAction && <th style={ {width:"15vw"} }>Action</th>}
        </tr>
      </thead>
      <tbody>
        { data && 
        <>
        { data.map((ele, index)=>(
          
          <Row key={index} id={index + 1} name={ele.name} email={ele.email} groupe = {ele.groupe} note={ele.note} indexOf ={index} />
        )) }
        </>
        }
      </tbody>
    </table>
  </main>
  </Db.Provider>
  )
}

export default List
export {Db}

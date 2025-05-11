

import { useState, useEffect } from "react"
import Row from "./row"

const List = () => {

  let [data, setData]=useState([])

  useEffect(()=>{
      fetch("http://localhost:4000/api/studs")
      .then((res)=>res.json())
      .then((resu)=>{
        console.log(resu)
        setData(resu)
      }).catch((err)=>{
        console.log(err)
      })
  }, [])


  return (
    <main>
    <table>
      <thead>
        <tr>
          <th>N</th>
          <th>Name</th>
          <th>Email</th>
          <th>Groupe</th>
          <th>Note</th>
        </tr>
      </thead>
      <tbody>
        { data && 
        <>
        { data.map((ele, index)=>(
          
          <Row key={index} id={index + 1} name={ele.name} email={ele.email} groupe = {ele.groupe} note={ele.note} />
        )) }
        </>
        }
      </tbody>
    </table>
  </main>
  )
}

export default List

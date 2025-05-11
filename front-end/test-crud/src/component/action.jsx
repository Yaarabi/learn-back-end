import { useContext, createContext } from "react"
import { useState } from "react"
import { Db } from "./list"
import { useEffect } from "react"
import PutForm from "./form/putForm"
import axios from "axios"
import { Context } from "../App"

const Id= createContext()

const Action = (props) => {

const {typeAction}= useContext(Context)
const {a, setDb} = useContext(Context)
const data = useContext(Db)
let [id, setId]= useState('')
let [obj, setObj]=useState('')
let [showPutForm, setShowPutForm] = useState(false)

useEffect(()=>{
    setObj(data[props.index])
}, [props.index, data])

const removeStud = ()=>{
    axios.delete(`http://localhost:4000/api/delete/${data[props.index]._id}`)
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)})
}

return (
    <Id.Provider value={{id, obj}}>
    <td>
        {typeAction && <img onClick={()=>{setId(data[props.index]._id), setShowPutForm(true)}} src="/edit.png" height={"20px"} alt="update icon" />}
        {!typeAction && <img onClick={()=>{removeStud(), setDb(a+1)}} src="/bin.png" height={"20px"} alt="delete icon" />}
        {showPutForm && <PutForm fun={ ()=>{setShowPutForm(false)} }/>}
    </td>
    </Id.Provider>
)
}

export default Action
export {Id}

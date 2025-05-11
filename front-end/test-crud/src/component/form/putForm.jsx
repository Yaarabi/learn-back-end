

import { useState, useEffect} from "react"
import axios from "axios"
import "./form.css"
import { useContext } from "react"
import { Id } from "../action"
import { Context } from "../../App"


const PutForm = (props) => {

    const {id, obj} = useContext(Id)
    const {a, setDb} = useContext(Context)
    
    useEffect(()=>{
        console.log(id)
        console.log(obj)
    }, [id, obj])

    let [Name, setName]=useState(obj?.name || '')
    let [Email, setEmail]=useState(obj?.email || '')
    let [Note, setNote]=useState(obj?.note || '')
    let [Groupe, setGroupe]=useState(obj?.groupe || '')

const update = ()=>{
    axios.put(`http://localhost:4000/api/studUp/${id}`, {
    name: Name,
    email: Email,
    groupe: Groupe,
    note: Note
    })
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)})
}


return (
    
    <div id='form'>
        <div>
            <label>Name:</label>
            <input 
            type="text"
            value={Name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="your Name"/>
        </div>
        <div>
            <label>Email:</label>
            <input 
            type="text"
            value={Email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="your Email"/>
        </div>
        <div>
            <label>Groupe:</label>
            <select
            value={Groupe}
            onChange={(e)=>setGroupe(e.target.value)}
            >
                <option value="">chose</option>
                <option value="1">Groupe 1</option>
                <option value="2">Groupe 2</option>
                <option value="3">Groupe 3</option>
                <option value="4">Groupe 4</option>
            </select>
        </div>
        <div>
            <label>Note:</label>
            <input 
            type="number"
            value={Note}
            onChange={(e)=>setNote(e.target.value)}
            placeholder="your Note"/>
        </div>       
        <button onClick={()=>{ update(), props.fun(), setDb(a+1)}}>Update</button>
        
        <img onClick={()=>{props.fun()}} src="/close.png" height={"20px"} alt="close icon" />
    </div>
    
)
}

export default PutForm


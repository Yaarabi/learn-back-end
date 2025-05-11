
import { useState} from "react"
import axios from "axios"
import "./form.css"


const Form = () => {
    

    let [Name, setName]=useState('')
    let [Email, setEmail]=useState('')
    let [Note, setNote]=useState('')
    let [Groupe, setGroupe]=useState('')

    const submit = ()=>{
    axios.post("http://localhost:4000/api/add", {
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
        <button onClick={submit}>Login</button>
        
        <img src="/icon/close.png" height={"20px"} alt="close icon" />
    </div>
    
)
}

export default Form


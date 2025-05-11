
import { Context } from '../App'
import { useContext } from 'react'

const Header = () => {
    const { setShowList, setShowForm, a, setDb, setAction, setType } = useContext(Context)

    return (
    <nav>
        <h2 onClick={()=>{setShowList(true), setShowForm(false), setDb(a+1), setAction(false)}}>Show users</h2>
        <h2 onClick={()=>{setShowList(false), setShowForm(true), setAction(false)}}>Add user +</h2>
        <h2 onClick={()=>{setAction(true), setType(true)}}>Update user</h2>
        <h2 onClick={()=>{setAction(true), setType(false)}}>Delete user</h2>
    </nav>
)
}

export default Header

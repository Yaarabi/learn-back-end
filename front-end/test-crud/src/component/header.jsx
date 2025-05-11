
import { Context } from '../App'
import { useContext } from 'react'

const Header = () => {
    const { setShowList, setShowForm } = useContext(Context)

    return (
    <nav>
        <h2 onClick={()=>{setShowList(true), setShowForm(false)}}>Add user +</h2>
        <h2 onClick={()=>{setShowList(false), setShowForm(true)}}>Update user</h2>
        <h2>Delete user</h2>
        <h2>Show users</h2>
    </nav>
)
}

export default Header

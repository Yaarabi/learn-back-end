
import { useContext } from 'react'
import Action from './action'
import { Context } from '../App'


const Row = (props) => {

const {showAction} = useContext(Context)

    return (
    <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>{props.groupe}</td>
        <td>{props.note}</td>
        {showAction && <Action index = {props.indexOf} />}
    </tr>
    )
}

export default Row

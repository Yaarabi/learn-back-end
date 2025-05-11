
import React from 'react'

const Row = (props) => {
    return (
    <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>{props.groupe}</td>
        <td>{props.note}</td>
    </tr>
    )
}

export default Row

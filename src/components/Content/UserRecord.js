import React from 'react'
import { NavLink } from 'react-router-dom'
const UserRecord = (props) => {
  const { id, name, email } = props
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <NavLink
          className="btn btn-primary text-white mx-3"
          to={`/profile/${props.id}`}
        >
          User Profile
        </NavLink>
        <NavLink className="btn btn-secondary text-white mx-5" to={`#`}>
          Edit
        </NavLink>
      </td>
    </tr>
  )
}

export default UserRecord

import React from 'react';
import UserRecord from '../Content/UserRecord';
import { Table } from 'react-bootstrap';

const UsersTable = (props) => {
  const { users } = props;
  return (
    <Table striped bordered style={{ width:'900px' }} >
      <thead style={{ backgroundColor: 'blue'  ,textAlign: 'center',color:'white' }}>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody style={{ backgroundColor: 'skyblue'  ,textAlign: 'center' }}>
        {users.map(user => <UserRecord key={user.id} id={user.id} name={user.name} email={user.email} />)}

      </tbody>
    </Table>)
}

export default UsersTable;
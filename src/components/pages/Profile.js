import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchUserByID } from '../Content/Users'
import { Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap'

const Profile = () => {
  const { id } = useParams()
  const [user, setUser] = useState([])

  useEffect(() => {
    fetchUserByID(id)
      .then((res) => {
        setUser(res.data)
      })
      .catch((err) => {
        setUser(null)
      })
  }, [id])

  return (
    <>
      {user ? (
        <Container>
          {' '}
          <Card style={{ width: '18rem', margin: 'auto' }}>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>Information of user</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{user.email}</ListGroupItem>
              <ListGroupItem>{user.phone}</ListGroupItem>
            </ListGroup>
          </Card>{' '}
        </Container>
      ) : (
        <p className="p-3 bg-alert">Error while fetching data</p>
      )}
      ;
    </>
  )
}

export default Profile

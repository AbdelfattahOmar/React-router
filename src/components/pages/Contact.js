import React from 'react'
import { Card, Container } from 'react-bootstrap'

const Contact = () => {
  return (
    <Container>
      <Card className="my-3 p-4">
        <Card.Body>
          <Card.Title>My Contact Info</Card.Title>
          <Card.Text>
            Phone:1111111111
            <br />
            Email: abdo@gmail.com
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Contact

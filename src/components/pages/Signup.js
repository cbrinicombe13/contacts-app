import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function Signup() {
    return (
        <React.Fragment>
            <Card bg = 'dark' className = 'text-center' style = {{marginTop: '50px', padding: '30px'}}>
                <Card.Title><h2>Sign Up</h2></Card.Title>
                <Card.Subtitle>Create an account below and start tracking your contacts!</Card.Subtitle>
                <Card.Body>
                    <Form>
                        <Form.Control type = 'text' placeholder = 'Username'></Form.Control>
                        <Form.Control type = 'password' placeholder = 'Password'></Form.Control>
                        <Button style = {{margin: '5px', padding: '10px'}}>Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default Signup;
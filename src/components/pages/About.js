import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

function About() {
    return (
        <React.Fragment>
            <Card bg = 'dark' className = 'text-center' style = {{marginTop: '50px', padding: '30px'}}>
                <Card.Title>
                    Create an account to start tracking your contacts!
                </Card.Title>
                <Card.Body>
                    <ListGroup className = 'text-center'>
                        <p style = {{background: '#343a40'}}>View, Create, Update and Delete</p>
                        <p style = {{background: '#343a40'}}>Pull contacts into specific groups with ease</p>
                    </ListGroup>
                </Card.Body>
                <div className = 'text-center' style = {{margin: '3px'}}>
                    <Button>Click here for a tour</Button>
                </div>
            </Card>
            
        </React.Fragment>
        
    )
}

export default About;


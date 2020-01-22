import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import PropTypes from 'prop-types'

export class AddModal extends Component {
    state = {
        show: false,
        newContact: {
            first_name: "",
            last_name: "",
            age: "",
            phone: "",
            email: "",
            occupation: ""
        },
        error: ""
    }

    toggleAdd = () => {
        this.setState({
            show: !this.state.show,
            error: ""
        });
    }

    onHide = () => {
        this.toggleAdd();
        this.setState({
            show: false,
            newContact: {
                first_name: "",
                last_name: "",
                age: "",
                phone: "",
                email: "",
                occupation: ""
            },
            error: "" 
        });
    }

    onChange = (e) => {
        this.setState({
            newContact: { ...this.state.newContact, [e.target.name]: e.target.value },
        });
    }

    // Check for null/empty fields:
    isValidContact = (contact) => {
        return Object.keys(contact).every(key => {
            return !(contact[key] === null || contact[key] === "");
        });
   }

    // Check for duplicate phone/email: DOESNT WORK
    isUnique = (newContact) => {
        let contacts = this.props.contacts;
        contacts.every(contact => {
            return (contact['email'] !== newContact['email'] || contact['phone'] !== newContact['phone']);
        });
    }

    onSubmit = () => {
        // First empty the error state:
        this.setState({
            error: ""
        });

        // Add new contact if is valid and unique, otherwise show respective error:
        if(this.isValidContact(this.state.newContact)) {
            if(true) {
            // if(this.isUnique(this.state.newContact)) {
                this.toggleAdd();
                this.props.addContact(this.state.newContact);
                this.setState({
                    show: false,
                    newContact: {
                        first_name: "",
                        last_name: "",
                        age: "",
                        phone: "",
                        email: "",
                        occupation: ""
                    },
                });
            } else {
                this.setState({
                    error: "Contact already exists." 
                });
            }
        } else {
            this.setState({
                error: "All fields must be entered."
            });
        }
    }

    render() {
        return (
            <React.Fragment>
            <Button onClick = {this.toggleAdd}>+ Add Contact</Button>
            <Modal show = {this.state.show} onHide = {this.onHide} className = 'custom_modal'>
                <Modal.Header closeButton>
                    <Modal.Title>New Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Row>
                            <Col>
                                <Form.Control
                                type = 'text'
                                name = 'first_name'
                                value = {this.state.newContact.first_name}
                                onChange = {this.onChange}
                                placeholder = 'First Name'>
                                </Form.Control>
                            </Col>
                            <Col>
                                <Form.Control
                                type = 'text'
                                name = 'last_name'
                                value = {this.state.newContact.last_name}
                                onChange = {this.onChange}
                                placeholder = 'Last Name'>
                                </Form.Control>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Control
                                type = 'text'
                                name = 'age'
                                value = {this.state.newContact.age}
                                onChange = {this.onChange}
                                placeholder = 'Age'>
                                </Form.Control>
                            </Col>
                            <Col>
                                <Form.Control
                                type = 'text'
                                name = 'phone'
                                value = {this.state.newContact.phone}
                                onChange = {this.onChange}
                                placeholder = 'Phone'>
                                </Form.Control>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Control
                                type = 'email'
                                name = 'email'
                                value = {this.state.newContact.email}
                                onChange = {this.onChange}
                                placeholder = 'Email'>
                                </Form.Control>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Control
                                type = 'text'
                                name = 'occupation'
                                value = {this.state.newContact.occupation}
                                onChange = {this.onChange}
                                placeholder = 'Occupation'>
                                </Form.Control>
                            </Col>
                        </Form.Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Container>
                        <Row>
                            <Col style = {{textAlign: 'center'}}>
                                {this.state.error}
                            </Col>
                            <Col style = {{textAlign: 'right'}}>
                                <Button onClick = {this.onSubmit}>Add</Button>
                            </Col>
                        </Row>
                    </Container>
                    
                </Modal.Footer>
            </Modal>
        </React.Fragment>
        )
    }
}

AddModal.propTypes = {
    addContact: PropTypes.func.isRequired
}

export default AddModal

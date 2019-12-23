import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

export class BookRow extends Component {
    state = {
        modalShow: false,
        modalEdit: false,
        editDetails: {
            id: '',
            first_name: '',
            last_name: '',
            age: '',
            phone: '',
            email: '',
            occupation: ''
        }
    }

    toggleShow = () => {
        this.setState({
            modalShow: !this.state.modalShow,
            modalEdit: false,
        });
    }

    toggleEditOpen = () => {
        this.setState({
            modalShow: false,
            modalEdit: !this.state.modalEdit,
            editDetails: {
                id: this.props.contact.id,
                first_name: '',
                last_name: '',
                age: '',
                phone: '',
                email: '',
                occupation: ''
            }
        });
    }

    toggleEditClose = () => {
        this.setState({
            modalShow: false,
            modalEdit: !this.state.modalEdit,
            editDetails: {
                id: '',
                first_name: '',
                last_name: '',
                age: '',
                phone: '',
                email: '',
                occupation: ''
            }
        });
    }

    onChange = (e) => {
        this.setState({
            modalShow: false,
            modalEdit: this.state.modalEdit,
            editDetails: { ...this.state.editDetails, [e.target.name]: e.target.value}
        });
    }

    onDone = () => {
        this.toggleEditClose();
        this.props.editContact(this.state.editDetails);
    }

    render() {
        // Edit form is currently fixed to the contact from App.js state so needs fixing. CSS also on form input click should not change.
        const {id, first_name, last_name, age, phone, email, occupation, created_at} = this.props.contact;
        return (
            <tr>
                <td>{first_name}</td>
                <td>{last_name}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>
                    {/* Show more info modal */}
                    <Button onClick = {this.toggleShow} style = {btnNest}>Show</Button>
                    <React.Fragment>
                        <Modal show = {this.state.modalShow} onHide = {this.toggleShow}>
                            <Modal.Header closeButton>
                                <Modal.Title>{first_name + ' ' + last_name}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <ul>
                                    <li>First Name:<strong>{first_name}</strong></li>
                                    <li>Last Name:<strong>{last_name}</strong></li>
                                    <li>Age:<strong>{age}</strong></li>
                                    <li>Phone:<strong>{phone}</strong></li>
                                    <li>Email:<strong>{email}</strong></li>
                                    <li>Occupation:<strong>{occupation}</strong></li>
                                    <li>Contact Since: <strong>{created_at}</strong></li>
                                </ul>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button onClick = {this.toggleShow}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </React.Fragment>

                    {/* Edit contact modal */}
                    <Button onClick = {this.toggleEditOpen} style = {btnNest}>Edit</Button>
                    <React.Fragment>
                        <Modal show = {this.state.modalEdit} onHide = {this.toggleEditClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Editing: <strong>{first_name + ' ' + last_name}</strong></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Row>
                                        <Col>
                                            <Form.Control
                                            type = 'text'
                                            name = 'first_name'
                                            value = {this.state.editDetails.first_name}
                                            onChange = {this.onChange}
                                            placeholder = {first_name}>
                                            </Form.Control>
                                        </Col>
                                        <Col>
                                            <Form.Control
                                            type = 'text'
                                            name = 'last_name'
                                            value = {this.state.editDetails.last_name}
                                            onChange = {this.onChange}
                                            placeholder = {last_name}>
                                            </Form.Control>
                                        </Col>
                                    </Form.Row>
                                    <Form.Row>
                                        <Col>
                                            <Form.Control
                                            type = 'text'
                                            name = 'age'
                                            value = {this.state.editDetails.age}
                                            onChange = {this.onChange}
                                            placeholder = {age}>
                                            </Form.Control>
                                        </Col>
                                        <Col>
                                            <Form.Control
                                            type = 'text'
                                            name = 'phone'
                                            value = {this.state.editDetails.phone}
                                            onChange = {this.onChange}
                                            placeholder = {phone}>
                                            </Form.Control>
                                        </Col>
                                    </Form.Row>
                                    <Form.Row>
                                        <Col>
                                            <Form.Control
                                            type = 'email'
                                            name = 'email'
                                            value = {this.state.editDetails.email}
                                            onChange = {this.onChange}
                                            placeholder = {email}>
                                            </Form.Control>
                                        </Col>
                                    </Form.Row>
                                    <Form.Row>
                                        <Col>
                                            <Form.Control
                                            type = 'text'
                                            name = 'occupation'
                                            value = {this.state.editDetails.occupation}
                                            onChange = {this.onChange}
                                            placeholder = {occupation}>
                                            </Form.Control>
                                        </Col>
                                    </Form.Row>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick = {this.onDone}>Done</Button>
                            </Modal.Footer>
                        </Modal>
                    </React.Fragment>

                    {/* Delete button */}
                    <Button onClick = {this.props.delContact.bind(this, id)} style = {btnNest}>Delete</Button>
                </td>
            </tr>
        )
    }
}

const btnNest = {
    marginLeft: '1px',
    marginRight: '1px'
}

BookRow.propTypes = {
    contact: PropTypes.object.isRequired,
    delContact: PropTypes.func.isRequired,
    editContact: PropTypes.func.isRequired
}

export default BookRow

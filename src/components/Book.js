import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import BookRow from './BookRow'
import PropTypes from 'prop-types'

class Book extends Component {
    render() {
        return (
            <Table striped bordered hover variant = 'dark'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.contacts.map((contact) => (
                        <BookRow key = {contact.id} contact = {contact} delContact = {this.props.delContact} editContact = {this.props.editContact}/>
                    ))}
                </tbody>
            </Table>
        )
    }
}

Book.propTypes = {
    contacts: PropTypes.array.isRequired,
    delContact: PropTypes.func.isRequired,
    editContact: PropTypes.func.isRequired
}

export default Book;

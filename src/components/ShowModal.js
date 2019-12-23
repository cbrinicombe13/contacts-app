import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'

export class ShowModal extends Component {
    state = {
        show: false,
        contactState: {
            first_name: '',
            last_name: '',
            age: '',
            phone: '',
            email: '',
            occupation: '',
            created_at: ''
        }
    }

    toggleShow = () => {
        this.setState({
            show: !this.state.show,
            contactState: this.state.contactState
        });
    }

    render() {
        contact = this.state.contactState;
        return (
            <React.Fragment>
                <Modal show = {this.state.show} onHide = {this.toggleShow} className = 'custom_modal'>
                    <Modal.Header closeButton>
                        <Modal.Title>{contact.first_name + ' ' + contact.last_name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul>
                            <li>{contact.first_name}</li>
                            <li>{contact.last_name}</li>
                            <li>{contact.age}</li>
                            <li>{contact.phone}</li>
                            <li>{contact.email}</li>
                            <li>{contact.occupation}</li>
                            <li>{contact.created_at}</li>
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onclick = {this.toggleShow}></Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }
}

export default ShowModal
